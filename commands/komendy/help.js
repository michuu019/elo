const Discord = require('discord.js')
const { MessageEmbed } = require(`discord.js`)

module.exports = {
    name: "help",


    run: async(client, message, args) => {

        const embed = new MessageEmbed()
            .setAuthor(`Centrum Pomocy`)
            .setColor(`RANDOM`)
            .setDescription(`<a:6018_lsdheart:804297070994915348> **Komendy administracyjne**\n**+ban** **+clear** 
            **+backup-stworz** **+backup-zaladuj** **+backup-info** **+kick**`)
            .addField('<a:emoji_40:743495034325827686> Muzyczne', '**Już nie długo**!')
            .addField('<a:9672_mona_phuthon:804675913462710302> Komendy Fun', '**+avatar** **+8ball** **+embed** \n\ **+iq** **+spotify** **+pogoda** ')
            .addField('<a:siren:804675261638377502> Developerskie', '**+eval**')
            .addField(`Linki`, '**[Dodaj bota](https://discord.com/oauth2/authorize?client_id=802843020021334037&permissions=8&scope=bot)**')



        message.member.send(embed)

        const elo = new MessageEmbed()
            .setTitle('Poprawnie wysłałem ci pomoc!')
            .setDescription('**Pomoc została wysłana na nasze prywatne wiadomości!**')
            .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
            .setTimestamp()
            .setColor('RANDOM')
        message.channel.send(elo)



    }
}