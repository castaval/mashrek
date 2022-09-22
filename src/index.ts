import { Start, DontWant, Help, Want } from "hears";
import { Telegraf, Scenes, session } from 'telegraf';
import { botToken } from "token";
import { audioWizard, photoWizard, textWizard} from "wizards";

const bot = new Telegraf<Scenes.WizardContext>(botToken);
const stage = new Scenes.Stage<Scenes.WizardContext>([textWizard, photoWizard, audioWizard]);

bot.use(session());
bot.use(stage.middleware());
bot.launch();

bot.start(Start);
bot.help(Help);
bot.hears('Хочу', Want);
bot.hears('Не хочу', DontWant);
bot.action("photo", ctx => ctx.scene.enter('photo-wizard'));
bot.action("audio", ctx => ctx.scene.enter('audio-wizard'));
bot.action("text", ctx => ctx.scene.enter('text-wizard'));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

