const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["av"],
    description: "returns users avatar",
    enabled: true,
    run: async(client, message, args) => {

        let mentioned = message.mentions.users.array();

        if (args.length == 0) {
            let gmem = message.member;

            const embed = new MessageEmbed()
                .setColor("#BBA2F7")
                .setImage(message.author.displayAvatarURL({ size: 1024, dynamic: true })) // appears gif dynamically.
                .setAuthor('Oto twój avatar')
                .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
                .setTimestamp()

            message.channel.send(embed);
        } else if (args.length == 1) {
            if (mentioned.length == 1) {

                message.guild.members.fetch(mentioned[0].id).then(gmem => {


                    const embed = new MessageEmbed()
                        .setColor("#BBA2F7")
                        .setAuthor(mentioned[0].username)
                        .setImage(mentioned[0].displayAvatarURL({ size: 1024, dynamic: true })) // appears gif dynamically.
                        .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
                        .setTimestamp()

                    message.channel.send(embed);
                });
            } else {
                message.guild.members.fetch(args[0]).then(gmem => {
                    let gmemuser = gmem.user;
                    const created = gmemuser.createdAt;

                    const embed = new MessageEmbed()
                        .setImage(gmemuser.displayAvatarURL({ size: 1024, dynamic: true }))
                        .setColor("#BBA2F7")
                        .setAuthor(gmemuser.username)
                        .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
                        .setTimestamp()

                    message.channel.send(embed);
                }).catch(err => {
                    message.channel.send("**Poprawna komenda to**: +avatar @wzmainka lub ID");
                });
            }
        } else {
            message.channel.send("**Poprawna komenda to**: +avatar @wzmainka lub ID");
        }
    }
}