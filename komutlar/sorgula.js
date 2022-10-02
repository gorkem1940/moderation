const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
//-------------------------------------------------------------------------------\\
  
if(!["845672270244479003"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\  
  
  
let ramo;
let ramo1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
let ramo2 = message.guild.members.cache.get(args[0]);
if(!ramo1) return message.channel.send(new MessageEmbed().setTimestamp().setColor('0x800d0d').setDescription(`Bir ID veya Kullanıcı belirtmelisin.`))
if (ramo1) {
ramo = ramo1;
}
if (ramo2) {
ramo = ramo2;
}
if (!ramo) {
ramo = message.member;
}
let ses = ramo.voice.channel;
if (!ses) {
message.channel.send(new MessageEmbed().setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription("**<@"+ramo.id+"> Ses kanalına bağlı değil :( **"));
}
if (ses) {
message.channel.send(new MessageEmbed().setColor('#7289D').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(
"**<@"+ramo.id+"> İsimli arkadaş `"+ses.name+"` isimli bir ses kanalına bağlı ^^**"
));
}};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sorgula"],
    permLevel: 0,
    name: "sorgula"
  }
  
  exports.help = {
    name: "kontrol"
  };
  
  