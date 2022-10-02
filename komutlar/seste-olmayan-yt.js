const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\

if(!["845672270244479003"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\
  
  
  let ramo2 = "**Seslere geçer misiniz arkadaşlar; <a:kaytk:841782363687092224>**\n";
  message.guild.roles.cache.get("845672270222458921").members.map(r => {
    ramo2 += !r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
  });

  const ramoembed = new Discord.MessageEmbed()
    .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription("" + ramo2 + "")
  message.channel.send(ramo2).then(s => s.s);
};
module.exports.conf = {
  aliases: ["yt-seste-olmayan"]
};

module.exports.help = {
  name: "seste-olmayan"
};