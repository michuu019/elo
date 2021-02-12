const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "iq",
    run: async(client, message, args) => {

        let ilosc_iq = Math.floor(Math.random() * 200) + 1;


        let wynikIQ = new MessageEmbed()
            .setColor("#FF00FF")
            .setTitle("Twoje IQ")
            .setDescription(`${message.author.tag} twoje iq wynosi test : \`${ilosc_iq}\``)
            .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
            .setTimestamp()


        message.channel.send(wynikIQ);
    }
}