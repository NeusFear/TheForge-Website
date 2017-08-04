const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  if (message.content === '!ping') {
    message.reply('pong');
  }
});


bot.on('message', message => {
  if (message.content === '!embed') {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "Embed Title (with a like to the website.)",
        url: "http://99.108.87.56",
        description: "This is a test embed so Brandon can see what everything looks like when he needs to make them later.",
        fields: [{
            name: "Fields",
            value: "They can have different fields with small headlines."
          },
          {
            name: "Masked links",
            value: "[Website](http://99.108.87.56) <-- Click it."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "© Example"
        }
      }
    });
  }
});

bot.on('message', message => {
  if (message.content === '!dick') {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: "Dick Sizes",
          icon_url: bot.user.avatarURL
        },
        title: "",
        url: "",
        description: "Size Comparison; Bryce vs. Brandon",
        fields: [{
            name: "Bryce",
            value: ":-"
          },
          {
            name: "Brandon",
            value: "8====================================)"
          }
        ],
        timestamp: '',
        footer: {
          icon_url: bot.user.avatarURL,
          text: "Pictures taken with <3 by: SkyForge"
        }
      }
    });
  }
});


bot.login('MzQzMDU4MDU4MDg1NDAwNTc3.DGYpSA.SoiZKok88y59UeShluZOg7Rs04A');
