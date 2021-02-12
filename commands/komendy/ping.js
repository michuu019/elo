const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "ping",
    description: "Returns Latency and API Ping",
    timeout: 10000,
    run: async(client, message, args) => {
        const msg = await message.channel.send("Pobierania pingu...");
        const Embed = new MessageEmbed()
            .setTitle("Pong!")
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
            .setDescription(
                `⌛ Ping bota ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\n⏲️ API Ping  ${Math.round(client.ws.ping)}`
            )
            .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
            .setTimestamp()
            .setColor('#fb644c');

        msg.edit(Embed);
        msg.edit("\u200b");
    }
};

console.error("Wywalił błąd Nie martw się to nic takiego")