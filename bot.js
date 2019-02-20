const Discord = require('discord.js');
const Cilent  = new Discord.Cilent();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
