/* eslint-disable @typescript-eslint/no-floating-promises */
import { Scenes, Composer} from 'telegraf'

const textHandler = new Composer<Scenes.WizardContext>()
textHandler.on('text', async (ctx) => {
    const message = getMessage(ctx);

    await ctx.copyMessage(message);
    return await ctx.scene.leave();
});
textHandler.on('audio', async (ctx) => {
    await ctx.reply("Введите текст, а не аудио!");
    await ctx.scene.enter("text-wizard");
});
textHandler.on('photo', async (ctx) => {
    await ctx.reply("Введите текст, а не фото!");
    await ctx.scene.enter("text-wizard");
});

const photoHandler = new Composer<Scenes.WizardContext>()
photoHandler.on('photo', async (ctx) => {
    const message = getMessage(ctx);

    await ctx.copyMessage(message);
    return await ctx.scene.leave();
});
photoHandler.on('audio', async (ctx) => {
    await ctx.reply("Пришлите фото, а не аудио!");
    await ctx.scene.enter("photo-wizard");
});
photoHandler.on('text', async (ctx) => {
    await ctx.reply("Пришлите фото, а не текст!");
    await ctx.scene.enter("photo-wizard");
});

const audioHandler = new Composer<Scenes.WizardContext>()
audioHandler.on('audio', async (ctx) => {
    const message = getMessage(ctx);

    await ctx.copyMessage(message);
    return await ctx.scene.leave();
});
audioHandler.on('text', async (ctx) => {
    await ctx.reply("Пришлите аудио, а не текст!");
    await ctx.scene.enter("audio-wizard");
});
audioHandler.on('photo', async (ctx) => {
    await ctx.reply("Пришлите аудио, а не фото!");
    await ctx.scene.enter("audio-wizard");
});

export const textWizard = new Scenes.WizardScene(
  'text-wizard',
  async (ctx: any) => {
    await ctx.reply('Пришлите текст');
    return ctx.wizard.next();
  },
  textHandler
);

export const photoWizard = new Scenes.WizardScene(
    'photo-wizard',
    async (ctx: any) => {
        await ctx.reply('Пришлите фото');
        return ctx.wizard.next();
    },
    photoHandler
);

export const audioWizard = new Scenes.WizardScene(
    'audio-wizard',
    async (ctx: any) => {
        await ctx.reply('Пришлите аудио');
        return ctx.wizard.next();
    },
    audioHandler
);

const getMessage = (ctx: any): number => {
    if (ctx.message?.chat.id && 'text') {
        return ctx.message.chat.id;
    } 
     
    throw new Error('This is no message!');
};

