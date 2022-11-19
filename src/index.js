const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TOKEN;
// console.log(token);
const bot = new TelegramBot(token, {polling: true});
bot.on('message',(msg)=>{
    var hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    console.log(msg)
    }
    var bye= "bye";
    if(msg.text.toString().toLowerCase().includes(bye)){
        bot.sendMessage(msg.chat.id,"Hope to see you around again, "+msg.from.first_name)
    }

})