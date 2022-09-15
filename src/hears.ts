import { Markup, Context } from "telegraf";

const items = ["./assets/mashrek-images/1.jpg", "./assets/mashrek-images/2.jpg", "./assets/mashrek-images/3.jpg", "./assets/mashrek-images/4.jpg", "./assets/mashrek-images/5.jpg", "./assets/mashrek-images/6.jpg", "./assets/mashrek-images/7.jpg", "./assets/mashrek-images/8.jpg", "./assets/mashrek-images/9.jpg", "./assets/mashrek-images/10.jpg"]

export const Start = (ctx: Context) => {
    ctx.replyWithPhoto(
    {source: "./assets/images/hello.jpg"},
    {caption: "Привет\nЯ Mashrek!\nНажми на кнопочки!",
        ...Markup.keyboard([["Хочу", "Не хочу",]]).resize()});
}
export const Help = (ctx : Context) => ctx.reply("'Хочу' - получить картинку");
export const Want = (ctx: Context) => {
    const item = items[Math.floor(Math.random()*items.length)]
    ctx.replyWithPhoto({source: item});
};
export const DontWant = (ctx: Context) => ctx.reply("Ну ладно (:\nЕсли захочешь, нажми на кнопочку 'Хочу' !");
