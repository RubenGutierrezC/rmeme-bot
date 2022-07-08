import { Telegraf } from "telegraf";
import axios from 'axios'

const bot = new Telegraf('5474692629:AAGFDqDrV6uDwlUtBOHD-8BoJLN5RdX2VwA');

bot.command("start", (ctx) => {
  ctx.reply('Mensaje de bienvenida')
});

bot.command("meme", async (ctx) => {

  try {

    const response = await axios('https://meme-api.herokuapp.com/gimme')

    const data = response.data

    if (data.url) {
      ctx.replyWithPhoto(data.url || '')

    } else {
      ctx.reply("hubo un error al buscar el meme");
    }
  } catch (error) {
    ctx.reply("hubo un error al buscar el meme");

  }
});

bot.launch();

console.log("bot is running");
