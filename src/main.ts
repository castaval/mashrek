import { Markup } from "telegraf";

const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx : any) => {
    ctx.replyWithPhoto(
        {source: "./assets/images/hello.jpg"},
        {caption: "Привет\nЯ Mashrek!\nНажми на кнопочки!",
            ...Markup.keyboard([["Хочу", "Не хочу",]]).resize()});
});
bot.help((ctx : any) => ctx.reply("'Хочу' - получить картинку"));
bot.hears('Хочу', (ctx : any) => {
    const items = ["./assets/mashrek-images/1.jpg", "./assets/mashrek-images/2.jpg", "./assets/mashrek-images/3.jpg", "./assets/mashrek-images/4.jpg", "./assets/mashrek-images/5.jpg", "./assets/mashrek-images/6.jpg", "./assets/mashrek-images/7.jpg", "./assets/mashrek-images/8.jpg", "./assets/mashrek-images/9.jpg", "./assets/mashrek-images/10.jpg"]
    const item = items[Math.floor(Math.random()*items.length)]
    ctx.replyWithPhoto({source: item});
});
bot.hears('Не хочу', (ctx: any) => ctx.reply("Ну ладно (:\nЕсли захочешь, нажми на кнопочку 'Хочу' !"));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));