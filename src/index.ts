import { Start, DontWant, Help, Want, Introduction, PhotoAction, MusicAction, TextAction } from "hears";
import { Telegraf, Scenes, session } from 'telegraf';
import { botToken } from "token";

const bot = new Telegraf<Scenes.SceneContext>(botToken);
const helloScene = new Scenes.BaseScene<Scenes.SceneContext>("hello");
const workScene = new Scenes.BaseScene<Scenes.SceneContext>("work");
const stage = new Scenes.Stage<Scenes.SceneContext>([helloScene, workScene]);

bot.use(session());
bot.use(stage.middleware());
bot.launch();

bot.start(Start);
helloScene.help(Help);
helloScene.hears('Хочу', Want);
helloScene.hears('Не хочу', DontWant);
workScene.enter(Introduction);
workScene.action("photo", PhotoAction);
workScene.action("music", MusicAction);
workScene.action("text", TextAction);

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

