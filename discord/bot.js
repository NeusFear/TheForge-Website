const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
try {
  if (fs.existsSync("./data/config.json")) {
    console.log("Configuration file already exists. Starting bot...");
  } else {
    console.log("Configuration file does not exist. Creating file...");
    fs.mkdir("./data/");
    fs.createReadStream('./template/config.json').pipe(fs.createWriteStream('./data/config.json'));
    console.log("Configuration file successfully created. Starting bot...");
  }
} catch (err) {
  console.log("There was an error!");
  console.log(err);
}
const config = require("./data/config.json");

bot.on('ready', () => {
  console.log('TheForge bot is now ready.');
});

bot.on('message', message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else if (message.content.startsWith(config.prefix + "help")) {
    const embed = new Discord.RichEmbed()
      .setAuthor("The Forge", bot.user.avatarURL)
      .setColor(0xffc342)
      .setDescription("This is a list of commands I can do:")
      .addField("Commands:", "!help\n!ping\n!info\n!website\n!dick", true)
      .addField("Description:", "Displays the help menu.\nPong!\nDisplays the info Field.\nView a link to our website.\nCompare Bryce to Brandon.", true)
      .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")
      .setThumbnail(bot.user.avatarURL)

      message.channel.send({embed});
  } else if (message.content.startsWith(config.prefix + "info")) {
    const embed = new Discord.RichEmbed()
      .setAuthor("The Forge", bot.user.avatarURL)
      .setColor(0xffc342)
      .setDescription("About TheForge:")
      .addField("Who are we?", "TheForge started as a group of friends who liked to play games, simple enough. We had a vision to make a community of players that like dto play the same games as us so we dont have that one guy in the squad who dosent know what they're doing and has their VOP Volume all the way down.", true)
      .addField("What's our goal?", "We want to make it easy for gamers to find games they'll love. On top of the community on discord you can ask, you can also consult our website, where we have reviews by REAL gamers, who arent biased or partnered with a huge company.", true)
      .addField("How do I get Involved?", "Getting to be apart of the community is really easy here on TheForge, you can do anything from saying 'Hi' on the forums or on discord, or you could join a voice channel and squad up with some other members of the community.", true)
      .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")

      message.channel.send({embed});
  } else if (message.content.startsWith(config.prefix + "website")) {
    const embed = new Discord.RichEmbed()
      .setAuthor("The Forge", bot.user.avatarURL)
      .setColor(0xffc342)
      .setDescription("Our website is: " . config.website)

      message.channel.send({embed});
  } else if (message.content.startsWith(config.prefix + "dick")) {
    const embed = new Discord.RichEmbed()
      .setAuthor("The Forge", bot.user.avatarURL)
      .setColor(0xffdbaa)
      .setDescription("Size Comparison: Bryce vs. Brandon")
      .addField("Bryce", ":-")
      .addField("Brandon", "8=====================================)")
      .setFooter("Pictures taken with ❤ by SkyForge | Contact them for more.")
      message.channel.send({embed});
  } else if (message.content.startsWith("hi theforge")) {
    message.reply('Hi!');
  }
});



































bot.on('message', message => {
  if (message.content === '!embed') {
    const embed = new Discord.RichEmbed()
      .setTitle("This is your title, it can hold 256 characters")
      .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
      .setAuthor("The Forge", bot.user.avatarURL)
      .setColor(0xffc342)
      .setDescription("This is the main body of text, it can hold 2048 characters.")
      .setFooter("This is the footer text, it can hold 2048 characters", bot.user.avatarURL)
      .setImage("https://i.gyazo.com/1095e28a94a827b5f42a64d0ecf8e30a.png")
      .setThumbnail(bot.user.avatarURL)
      .setTimestamp()
      .addField("This is a field title, it can hold 256 characters", "This is a field value, it can hold 2048 characters.")
      .addField("Inline Field", "They can also be inline.", true)
      .addBlankField(true)
      .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

      message.channel.send({embed});
  }
});

bot.login(config.token);
