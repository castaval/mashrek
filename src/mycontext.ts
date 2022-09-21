import { Composer, Context, Scenes } from "telegraf";

interface MyWizardSession extends Scenes.WizardSessionData {
    myWizardSessionProp: string;
}

interface MyContext extends Context {

    scene: Scenes.SceneContextScene<MyContext, MyWizardSession>;
    wizard: Scenes.WizardContextWizard<MyContext>;
}


const stepHandler = new Composer<MyContext>();
stepHandler.action('next', async (ctx) => {
    ctx.scene.session.myWizardSessionProp = ctx.message.chat.id;
});

const textWizard = new Scenes.WizardScene(
    'text-wizard',
    async (ctx) => {
        await ctx.reply('Отправьте текст');
        return ctx.wizard.next()
    },
)