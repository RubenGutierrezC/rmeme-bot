import { Telegraf } from "telegraf";
import axios from 'axios'

const bot = new Telegraf('telegram_token');

bot.command("start", (ctx) => {
  ctx.reply('Mensaje de bienvenida')
});

bot.command("meme", async (ctx) => {


});

bot.launch();

console.log("bot is running");
