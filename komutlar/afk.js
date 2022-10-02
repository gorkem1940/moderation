const db = require("croxydb");
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
 
exports.run = function(client, message, args) {
 
  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
   .setAuthor(message.author.tag,message.author.displayAvatarURL({ dynamic: true }))
  .setDescription(`Afk Olmak İçin Bir Sebep Belirtin.\n Örnek : \`${prefix}afk <sebep>\``)
  if(!REASON) return message.channel.send(embed)
 
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setAuthor(USER.tag, USER.displayAvatarURL({ dynamic: true }))
  .setDescription(`${USER} kullanıcısı \`${REASON}\` sebebiyle \`AFK\` moduna girdi.`)
  message.channel.send(afk)
 
};
exports.conf = {
  aliases: []
};
 
exports.help = {
  name: 'afk',
  description: 'afk ya girer',
  usage: 'afk'
};
