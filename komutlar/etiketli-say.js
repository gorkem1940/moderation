const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => { 
  

  let botcommands = "849341898245275688"
  if(!message.member.roles.cache.get(botcommands) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(new MessageEmbed().setDescription(`Bu komutu kullanabilmen için <@&${botcommands}> rolüne sahip olman gerekiyor.`).setColor("BLACK")).then(x => x.delete({ timeout: 6500 }));
  
  let tag1 = "North";
  let tag2 = "0046"
  const etiket =  message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator == "0046").size;
  const tag = message.guild.members.cache.filter(m => m.user.username.includes(tag1)).size
  const tag31 = message.guild.members.cache.filter(m => m.user.username.includes(tag2)).size
  const agalaraktif = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
  const toptag = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.username.includes(tag1) || member.user.discriminator == "0046").size;
  const swtop = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const meedyxd = new MessageEmbed()
  .setTimestamp()
  .setColor('BLACK')
  .setFooter('Nórthallah')
  message.react('841782363687092224') // Onay veya tag emoji ID
  message.channel.send(meedyxd.setDescription(`<a:stac:845686083584655360> **Sunucumuzda toplam \`${swtop}\` üye bulunmakta**.<a:stac:845686083584655360> \`${agalaraktif}\` 
  <a:sgul:845686087422181416> **Aktif Taglarımızda toplam \`${tag+tag31}\` üye bulunmakta**.<a:sgul:845686087422181416>
  <a:sates:845686083005448222> **Etiket tagımızda toplam \`${etiket}\` üye bulunmakta**.<a:sates:845686083005448222>
  <a:syhelmas:841782371417456680> **Etiketimizde ve taglarımızda toplam \`${toptag+tag31}\` üye bulunmakta**.<a:syhelmas:841782371417456680>
  <a:ssonszluk:845686084087185439> **Ses kanallarında \`${ses}\` üye bulunmakta**.<a:ssonszluk:845686084087185439>`));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

exports.help = {  
name: "say"
}