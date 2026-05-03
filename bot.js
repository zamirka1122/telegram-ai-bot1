const { Telegraf } = require("telegraf");
const axios = require("axios");

const bot = new Telegraf("8772989176:AAFdD9Fxb1SAPPW4mA73oiMAWOisln4FUbw");
const API_KEY = "sk-27058565dacb4be7822751302e4103a8";

bot.on("text", async (ctx) => {
    try {
        const res = await axios.post(
            "https://api.deepseek.com/v1/chat/completions",
            {
                model: "deepseek-chat",
                messages: [{ role: "user", content: ctx.message.text }]
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        ctx.reply(res.data.choices[0].message.content);
    } catch (e) {
        ctx.reply("Ошибка 😢 ");
        console.log(e);
    }
});

bot.launch();
console.log("Бот запущен");
