import { Markup, Context } from "telegraf";

export const Start = (ctx: any) => {
    ctx.replyWithPhoto(
        {source: "./assets/images/hello.jpg"},
        {caption: "Привет\nЯ Mashrek!\nНажми на кнопочки!",
            ...Markup.keyboard([["Хочу", "Не хочу",]]).resize().oneTime()});
};
export const Help = (ctx : Context) => ctx.reply("'Хочу' - получить картинку");
export const Want = (ctx: any) => {
    ctx.reply("Выберите взаймодействие",
        Markup.inlineKeyboard([
            Markup.button.callback("Фото", "photo"),
            Markup.button.callback("Музыка", "audio"),
            Markup.button.callback("Текст", "text"),
        ]));
};
export const DontWant = (ctx: Context) => ctx.reply("Ну ладно (:\nЕсли захочешь, нажми на кнопочку 'Хочу' !");
