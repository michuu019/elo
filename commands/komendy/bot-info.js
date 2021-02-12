const Discord = require(`discord.js`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
        name: "botinfo",

        run: async(bot, message, args) => {
                function duration(ms) {
                    const sec = Math.floor((ms / 1000) % 60).toString()
                    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
                    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 24).toString()
                    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
                    return `${days.padStart(1, `0`)}d : ${hrs.padStart(2, `0`)}h : ${min.padStart(2, `0`)}min : ${sec.padStart(2, `0`)}s`
        }
        const wiadomosc_embed = new Discord.MessageEmbed()
        .setTitle(`Informacje o bocie`)
        .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
        .addField(`Nazwa bota:`, `Rybeńkowa`, true)
        .addField(`Właściciel bota:`, `<@668527377977966622> (michuu019)`, true)
        .addField("Czas działania:", `${duration(bot.uptime)}`)
        .addField(`Serwery:`, `${bot.guilds.cache.size}`, true)
        .addField("Ping:", `${(Math.round(bot.ws.ping))}`, true)
        .setTimestamp()
        .setColor(`#0099ff`)
        message.channel.send(wiadomosc_embed)
        
    }
}