const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
    name: "giveaway",
    description: "Create a simple giveaway",
    usage: "<time> <channel> <prize>",
    run: async(client, message, args) => {
        if (!args[0]) return message.channel.send(`**Poprawna komenda to**: **+giveaway <czas> <kanał> <Wygrana>**`);
        if (!args[0].endsWith("d") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s") &&
            !args[0].endsWith("m")
        )
            return message.channel.send(
                `**Poprawna komenda to**: **+giveaway <czas> <kanał> <Wygrana>**`
            );
        let czas = args.slice(4).join(" ");

        if (isNaN(args[0][0])) return message.channel.send(`**Poprawna komenda to**: **+giveaway <czas> <kanał> <Wygrana>**`);
        let channel = message.mentions.channels.first();
        if (!channel)
            return message.channel.send(
                `**Poprawna komenda to**: **+giveaway <czas> <kanał> <Wygrana>**`
            );
        let prize = args.slice(2).join(" ");
        if (!prize) return message.channel.send(`**Poprawna komenda to**: **+giveaway <czas> <kanał> <Wygrana>**`);
        message.channel.send(`*Giveaway został stworzony na kanale: ${channel}*`);
        let Embed = new MessageEmbed()
            .setTitle(`🎉 Giveaway!`)
            .setDescription(
                `Autor: ${message.author} 
        Do wygrania: ${prize}`
            )
            .setTimestamp(Date.now() + ms(args[0]))
            .setColor(`BLUE`);
        let m = await channel.send(Embed);
        m.react("🎊");
        setTimeout(() => {
            if (m.reactions.cache.get("🎊").count <= 1) {
                message.channel.send(`Ilośc reakcji: ${m.reactions.cache.get("🎊").count} (Liczy się rekacja bota!)`);
                return channel.send(
                    `Nikt nie zagłosował na giveawaya!`
                );
            }

            let winner = m.reactions.cache
                .get("🎊")
                .users.cache.filter((u) => !u.bot)
                .random();
            channel.send(
                `🎉 ** Użytkownik: ${winner} wygrał: ${prize}** 🎉`
            );
        }, ms(args[0]));
    },
};