const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "emotki",

    run: async(bot, message, args) => {
        let Emojis = "";
        let EmojisAnimated = "";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;

        function Emoji(id) {
            return bot.emojis.cache.get(id).toString();
        }
        message.guild.emojis.cache.forEach((emoji) => {
            OverallEmojis++;
            if (emoji.animated) {
                Animated++;
                EmojisAnimated += Emoji(emoji.id);
            } else {
                EmojiCount++;
                Emojis += Emoji(emoji.id);
            }
        });
        let Embed = new MessageEmbed()
            .setTitle(`Emotki z: ${message.guild.name}.`)
            .setDescription(
                `**Animowane: [${Animated}]**:\n${EmojisAnimated}\n\n**Normalne [${EmojiCount}]**:\n${Emojis} 
  `)
            .setColor(`RANDOM`)

        .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
            .setTimestamp()
        message.channel.send(Embed);
    },
};