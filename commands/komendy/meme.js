  const { MessageEmbed } = require("discord.js");
  const api = require("imageapi.js");
  module.exports = {
      name: "meme",

      run: async(client, message, args) => {
          let { MessageAttachment } = require('discord.js');
          let plik = new MessageAttachment("https://api.xenith.tk/memapi").setName("mem.jpg");
          message.channel.send(plik);
      }
  }