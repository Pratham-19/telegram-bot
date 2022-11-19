const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
// import fetch from 'node-fetch';
// const fetch = require('node-fetch');
// const axios = require('axios').default;
const token = process.env.TOKEN;
// console.log(token);
async function getJoke1() {
    // const response = await fetch('https://api.chucknorris.io/jokes/random');
    // console.log(response.data.value);
    try {
      const response = await fetch("https://icanhazdadjoke.com/slack");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
// const getJoke= async (url)=>{
//     axios(url, {
// 		method: 'HEAD',
// 		mode: 'no-cors',
// 		headers: {
// 			'Access-Control-Allow-Origin': '*',
// 			Accept: 'application/json',
// 			'Content-Type': 'application/json',
// 		},
// 		withCredentials: true,
// 		credentials: 'same-origin',
// 		crossdomain: true,
// 	}).then((response) => {
// 		console.log(response);
// 	}).catch((e) => {
// 		console.log(e);
// 	});
// }
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome to my Workshop ⚒️ ", {
    "reply_markup": {
        "keyboard": [["Get a random pic", "Get a random audio"],   ["Get a random qoute"], ["Get a dad joke"]]
        }
    });
    
});
bot.on('message',(msg)=>{
    var hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
        bot.sendMessage(msg.chat.id,"Hello dear user");
        console.log(msg)
    }
    var dadJoke = "get a dad joke";
    if (msg.text.toString().toLowerCase().indexOf(dadJoke) === 0) {
        bot.sendMessage(msg.chat.id,"Hello dear user");
        // getJoke("https://icanhazdadjoke.com/slack");
        getJoke1();
        // console.log(msg)
    }
    var bye= "bye";
    if(msg.text.toString().toLowerCase().includes(bye)){
        bot.sendMessage(msg.chat.id,"Hope to see you around again, "+msg.from.first_name)
    }

})