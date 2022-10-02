const Discord = require('discord.js');
const db = require('croxydb')
 

exports.run = async (client, message, args) => {
  let kayityetkili = '840858557809557514' //Kayıt yetkilisi İD
  if(!message.member.roles.cache.has(kayityetkili)) 
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmalısınız.`).then(message => message.delete({timeout: 5000}));
   
  
  
  
  let member = message.mentions.users.first();
    if(!member) return message.channel.send('Bir kişiyi etiketlemelisin').then(message => message.delete({timeout: 5000}));
    let codeariuseski = await db.fetch(`eskiad_${member.id}`) || 'Eski ismi yok'
    let toplamik = await db.fetch(`toplamik_${member.id}`) || '0'
    let kayıtlılar = new Discord.MessageEmbed()
      .setColor('f5f5f5') 
      .setAuthor(`${member.tag}`, member.avatarURL())
      .setDescription(`Bu üyenin toplamda \`${toplamik}\` isim kayıtı bulundu

\`${codeariuseski.join('\n')}\``)
  
 .setFooter(message.author.username,
message.author.avatarURL( { dynamic : true } ))
  .setTimestamp()
      .setThumbnail('')
    message.channel.send(kayıtlılar) 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
}
exports.help = {
  name: 'isimler',
  description: "kişinin eski isimlerini gösterir",
  usage: 'isimler @kişi'
}


