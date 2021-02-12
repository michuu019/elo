const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "emoji",
    run: async(client, message, args) => {

        const emotka = client.emojis.cache.get(`${args}`) || client.emojis.cache.find(emoji => emoji.name === `${args}`);
        if (!args.length) {
            const blademoji = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("**Podaj nazwę emotki!**")
            return message.channel.send(blademoji)

        }

        if (!emotka === true) {
            const nieistnieje = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription("**Taka emotka nie istnieje!**")

            return message.channel.send(nieistnieje)
        }

        var null1 = `${emotka.animated}`
        var zamien = null1.replace("true", "Tak").replace("false", "Nie")

        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor("RANDOM")
            .addField("**Nazwa emotki:**", `${emotka.name}`)
            .addField("**Czy jest animowana?**", zamien)
            .addField("**URL emotki:**", `[kliknij tutaj](${emotka.url})`)
            .addField("**ID emotki:**", `${emotka.id}`)
            .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
            .setTimestamp()
            .setThumbnail(emotka.url)


        message.channel.send(embed)
    }
}