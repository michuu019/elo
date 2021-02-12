const Discord = require('discord.js');
const client = new Discord.Client();

const got = require('got');
module.exports = {
    name: "osiągnięcie",
    run: async(bot, message, args) => {
        if (!args[0]) {
            const embed1 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("「<:Sno:715473559866048524>」Wystąpił błąd.")
                .setDescription("**Prawidłowy Wygląd:** \n ``/osiągnięcie [Tekst1]`` ")
                .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
                .setTimestamp()
            return message.channel.send(embed1)
        }
        let tekst = args.slice(0).join("+");
        let l = Math.floor(Math.random() * 43 + 1)
        const embed = new Discord.MessageEmbed()
            .setTitle("Zdobyłeś nowe osiągnięcie!")
            .setTimestamp()
            .setColor(`#57cfff`)
            .setImage(`https://api.alexflipnote.dev/achievement?text=${tekst}&icon=${l}`)
            .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
            .setTimestamp()
        message.channel.send(embed);
    }
}