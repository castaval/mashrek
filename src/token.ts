import { config } from "dotenv"
config()

const getBotToken = (): string => {
    if (process.env.BOT_TOKEN) {
        return process.env.BOT_TOKEN;
    }
    throw new Error('BOT_TOKEN must be provided!');
}

export const botToken = getBotToken();