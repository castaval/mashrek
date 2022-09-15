import { Start, DontWant, Help, Want } from "hears";
import { Telegraf } from 'telegraf';
import { botToken } from "token";

const bot = new Telegraf(botToken);

bot.start(Start);
bot.help(Help);
bot.hears('Хочу', Want);
bot.hears('Не хочу', DontWant);
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

