const Discord = require(`discord.js`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
        name: "serwer-info",
        run: async(bot, message, args) => {
                function duration(ms) {
                    const sec = Math.floor((ms / 1000) % 60).toString()
                    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
                    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 24).toString()
                    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
                    return `${days.padStart(1, `0`)}d : ${hrs.padStart(2, `0`)}h : ${min.padStart(2, `0`)}min : ${sec.padStart(2, `0`)}s`
        }
        let AFKTime = message.guild.afkTimeout / 60
        let ludzie = message.guild.memberCount - message.guild.members.cache.filter(m => m.user.bot).size
        let AFKkanal = `${message.guild.afkChannel.name}`
        const wiadomosc_embed = new Discord.MessageEmbed()
        .setTitle(`Informacje o Serwerze`)
        .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
        .addField(`Nazwa serwera:`, `${message.guild.name}`, true)
        //.addField(`Ping bota:`, `${bot(rounded.ws.ping)}ms`)
        .addField("Data utworzenia:", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)}`, true)
        .addField("Właściciel serwera:", `<@${message.guild.ownerID}>`)
        .addField("Poziom premium:", "Poziom " + message.guild.premiumTier)
        .addField(`Ilość członków:`, message.guild.memberCount, true)
        .addField(`Ilość ludzi:`, `${ludzie}`, true)
        .addField(`Ilość botów:`, `${message.guild.members.cache.filter(m => m.user.bot).size}`, true)
        .addField("Kanał AFK:", AFKkanal, true)
        .addField("Czas AFK:", AFKTime + "min", true)
        .setTimestamp()
        .setColor(`#0099ff`)
        
        message.channel.send(wiadomosc_embed)
        
    }
}