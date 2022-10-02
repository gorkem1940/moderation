const Discord = require('discord.js');

exports.run = async (client, message, args) => { 
const guild = message.member.guild

if (!message.member.roles.cache.has("Yetkili id") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",`Bu Komutu Kullanabilmeniz için Yeterli Yetkiniz Yok`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));

if(!message.member.voice || message.member.voice.channelID != "katıldı rolü vericek kanal id") return; 
let üyeler = message.guild.members.cache.filter(member => member.roles.cache.has("silinecek rol id") && member.voice.channelID != "794636699190689843");
üyeler.array().forEach((member, index) => {
  setTimeout(() => {
    member.roles.remove("Silincek rol id ").catch();
  }, index * 1250)
});

let katıldıverildi = message.member.voice.channel.members.filter(member => !member.roles.cache.has("katıldı rol id") && !member.user.bot)
katıldıverildi.array().forEach((member, index) => {
  setTimeout(() => {
    member.roles.add("katıldı rol id").catch();
  }, index * 1250)
});
message.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**Toplantımızı gelenelere Katıldı veriliyor**.<a:kaytk:841782363687092224>  \n\n**Rol Verilecek**: ${katıldıverildi.size} <a:kaytk:841782363687092224> \n\n **Gelmeyen Yetkili sayısı** : ${üyeler.size} <a:kaytk:841782363687092224>`)).catch();

  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yetkili-katıldı", "katıldı"],
  permLevel: 0
}
exports.help = {
  name: "katıldı",
  description: "tanrısıznaber"
}