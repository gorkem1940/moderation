const Discord = require('discord.js');
const db = require("croxydb")
exports.run = async (client, message, args) => {
 if (!message.member.roles.cache.has("918713501256650762") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Bir Kullanıcı Etiketleyiniz`).setColor("BLACK"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.roles.add("918713501193732160");
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reklam" , "r"],
  permLevel: 0
}
exports.help = {
  name: 'reklam',
}