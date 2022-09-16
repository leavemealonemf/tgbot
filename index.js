require('dotenv').config()
const {Telegraf} = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('start', (ctx) => {
    ctx.reply("Выбирай", {
        reply_markup: {
            keyboard: [
                [
                    {text: "Каталог"},
                    {text: "Отзывы"}
                ],
                [
                    {text: "Помощь"}
                ]
            ], resize_keyboard: true
        }
    })
})

bot.on('text', (ctx) => {
    if (ctx.message.text === 'Каталог') {
        ctx.reply('Это каталог!')
    } else if (ctx.message.text === 'Отзывы') {
        ctx.reply('Это отзывы!')
    } else if (ctx.message.text === 'Помощь') {
        ctx.reply("С чем тебе помочь?", {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Оплата"},
                        {text: "Доставка"}
                    ],
                    [
                        {text: "Задать конкретный вопрос"}
                    ]
                ], resize_keyboard: true
            }
        })
    } else {
        ctx.reply("Неизвестная команда. Используй /start")
    }
})

bot.launch()
    .then(() => {
        console.log('Бот в деле')
    })