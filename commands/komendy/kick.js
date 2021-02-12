const Discord = require("discord.js");
module.exports = {
    name: 'kick',
    category: 'moderation',
    description: 'kick a members',
    run: async(client, message, args, guild) => {

        let kicked = message.mentions.users.first() || client.users.resolve(args[0]);
        let reason = args.slice(1).join(" ");

        // MESSAGES

        if (!kicked) {
            let kickinfoembed = new Discord.MessageEmbed()
                .setTitle("Komenda kick")
                .setDescription(
                    "**Poprawna komenda to:**\n" +
                    "+kick @wzmianka lub id <powód>\n")

            .setColor('RANDOM');
            message.channel.send(kickinfoembed);

            return;
        }

        if (message.author === kicked) {
            let sanctionyourselfembed = new Discord.MessageEmbed()
                .setDescription(`+kick @wzmianka lub id <powód>`)
                .setColor('RANDOM');
            message.channel.send(sanctionyourselfembed);

            return;
        }

        if (!reason) {
            let noreasonembed = new Discord.MessageEmbed()
                .setDescription(`Podaj powód`)
                .setColor('RANDO');
            message.channel.send(noreasonembed);

            return;
        }

        if (!message.member.permissions.has("KICK_MEMBERS")) {
            let nopermsembed = new Discord.MessageEmbed()
                .setDescription(
                    "**Nie masz uprawnień**: `KICK_MEMBERS`"
                )
                .setColor('RANDOM');
            message.channel.send(nopermsembed);

            return;
        }

        if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
            let botnopermsembed = new Discord.MessageEmbed()
                .setDescription(
                    "**Nie mam uprawnień**: `KICK_MEMBERS ` "
                )
                .setColor('RANDOM');
            message.channel.send(botnopermsembed);

            return;
        }

        message.guild.member(kicked).kick(reason);

        let successfullyembed = new Discord.MessageEmbed()
            .setDescription(`Wyrzucony: ${kicked.name}.
            **Wyrzucił**: **${message.author.username}**\n
            **Powód**: **${reason}**\n`)
            .setColor('RANDOM');

        message.channel.send(successfullyembed);

    }
}