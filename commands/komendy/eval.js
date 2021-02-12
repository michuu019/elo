const { MessageEmbed } = require("discord.js")
const snekfetch = require('snekfetch');
const { inspect } = require("util");



module.exports = {
        name: "eval",
        description: "komenda twórcy bota",
        run: async(client, message, args) => {
                if (message.author.id === '668527377977966622') {
                    try {
                        let toEv = args.join(" ")
                        let evaluated = inspect(eval(toEv, { depth: 0 }));
                        if (!toEv) {
                            let no = new MessageEmbed()
                                .setColor()
                                .setDescription('Error: `cos zje*eś`')
                            return message.channel.send(no)
                        } else {
                            let hrStart = process.hrtime()
                            let hrDiff;
                            hrDiff = process.hrtime(hrStart)
                            let e = new MessageEmbed()
                                .setColor()
                                .setDescription(`Took: *${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\`\`\`javascript\n${evaluated}\`\`\``, { maxLength: 1900 })
            return message.channel.send(e)
          }
        } catch(e) {
          let oops = new MessageEmbed()
            .setColor()
            .setDescription(`Debilu źle wpisałeś kod: **${e.message}**`)
          return message.channel.send(oops)
        }
      } else {

        const Brak_Permisji = new MessageEmbed()
            .setTitle("**<:nie:744103207751647283> Błąd!**")
            .setDescription("Nie posiadasz permisji, Tej komendy mogą używać Właściciele Bota")
            .setColor(0xFF0033)
        return message.channel.send(Brak_Permisji)
    
    

      }
    }
  }