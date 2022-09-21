import { Markup, Context } from "telegraf";

const items = ["./assets/mashrek-images/1.jpg", "./assets/mashrek-images/2.jpg", "./assets/mashrek-images/3.jpg", "./assets/mashrek-images/4.jpg", "./assets/mashrek-images/5.jpg", "./assets/mashrek-images/6.jpg", "./assets/mashrek-images/7.jpg", "./assets/mashrek-images/8.jpg", "./assets/mashrek-images/9.jpg", "./assets/mashrek-images/10.jpg"]

export const Start = (ctx: any) => {
    ctx.replyWithPhoto(
        {source: "./assets/images/hello.jpg"},
        {caption: "Привет\nЯ Mashrek!\nНажми на кнопочки!",
            ...Markup.keyboard([["Хочу", "Не хочу",]]).resize().oneTime()});
    ctx.scene.enter("hello");
};
export const Help = (ctx : Context) => ctx.reply("'Хочу' - получить картинку");
export const Want = (ctx: any) => {
    const item = items[Math.floor(Math.random()*items.length)]
    ctx.replyWithPhoto(
        {source: item},
        {...Markup.removeKeyboard()});
    ctx.scene.enter("work");
};
export const DontWant = (ctx: Context) => ctx.reply("Ну ладно (:\nЕсли захочешь, нажми на кнопочку 'Хочу' !");
export const Introduction = (ctx: any) => {
    ctx.reply("Выберите взаймодействие",
        Markup.inlineKeyboard([
            Markup.button.callback("Фото", "photo"),
            Markup.button.callback("Музыка", "music"),
            Markup.button.callback("Текст", "text"),
        ]));
};
export const PhotoAction = (ctx: any) => {

};
export const MusicAction = (ctx: any) => {

};
export const TextAction = (ctx: any) => {

};
