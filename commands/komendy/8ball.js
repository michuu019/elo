const Discord = require('discord.js')
const { MessageEmbed } = require(`discord.js`)
const webhookClient = new Discord.WebhookClient();

module.exports = {
    name: "8ball",


    run: async(client, message, args) => {

        let teksty = ["Tak", "Nie", "Niewiem", "Zapytaj później!", "Raczej", "A może ty?"];
        let wynik = Math.floor((Math.random() * teksty.length));

        if (!args[0]) {
            const embed1 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("「」Wystąpił błąd.")
                .setDescription("**Prawidłowy Wygląd:** \n ``/8ball [Pytanie]`` ")
                .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
                .setTimestamp()
            return message.channel.send(embed1)
        }





        const embed = new MessageEmbed()

        .setAuthor(`8ball`)
            .setColor(`RANDOM`)
            .addField('Pytanie:', args.join(" "))
            .addField('Odpowiedź bota:', teksty[wynik])
            .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
            .setTimestamp()

        message.channel.send(embed)
        message.react('🎱')
            .then(console.log)
            .catch(console.error);

    }

}