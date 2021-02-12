const Discord = require("discord.js");
const weather = require("weather-js");
module.exports = {
    name: "pogoda",

    run: async(client, message, args) => {
        weather.find({ search: args.join(" "), degreeType: "C" }, function(
            err,
            result
        ) {
            if (result === undefined || result.length === 0) {
                const embed = new Discord.MessageEmbed()
                    .setDescription(`**Podaj poprawną miejscowość!**`)
                    .setAuthor(`Błąd!`)
                    .setColor("RANDOM")
                    .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
                    .setTimestamp()
                message.channel.send(embed);
                return;
            }
            const current = result[0].current;
            const location = result[0].location;
            const embed = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Pogoda dla ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor("RANDOM")
                .addField("Strefa czasu:", `UTC${location.timezone}`, false)
                .addField("Temperatrua:", `${current.temperature}°C`, false)
                .addField("Temperatura odczuwalna:", `${current.feelslike}°C`, false)
                .addField("Wiatr:", current.winddisplay, false)
                .addField("Wilgotność:", `${current.humidity}%`, false)
                .setFooter(`Wywołano przez ${message.author.username}`, message.author.avatarURL())
                .setTimestamp()
            message.channel.send(embed);
        });
    }
};