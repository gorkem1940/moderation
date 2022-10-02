const Discord = require('discord.js')
const db = require('croxydb')

exports.run = async (client, message, args) => {

 if(!['845672270222458924'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) 
  
const jail = message.guild.roles.cache.find(r => r.id === '845672270177370134')

if(!jail) return message.reply('Jail rolünü ayarlamamışsın botcu.')
  
let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
if(!member) return message.channel.send('Kimi mahkum etmem gerek?')

let reason = args.slice(1).join(' ')
if(!reason) return message.channel.send('Bir sebep belirt.')
let Cardin = message.guild.member(member)

Cardin.roles.add(jail)
Cardin.roles.cache.forEach(r => {
    Cardin.roles.remove(r.id)})

  
    const Tanrısızjail = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL ({ dynamic : true }))
    .setColor(`BLACK`)
    .setDescription(`<@${member.id}> (\`${member.id}\`) Adlı Kullanıcı <@${message.author.id}> tarafından jaile gönderildi.

  • Yetkili: <@${message.author.id}> (\`${message.author.id}\`)
  • Sebebi: \`${reason}\`
  • Kanal: \`${message.channel.name}\`
    `)
    .setFooter(`Tanrısız Jail Sistemi || Arkadaş Jaile Gönderilmiştir ^^`)
    message.channel.send(Tanrısız)
    message.react('✅')

             const Tanrısızlog = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL ({ dynamic : true }))
    .setColor(`BLACK`)
    .setDescription(`<@${member.id}> (\`${member.id}\`) Adlı Kullanıcı <@${message.author.id}> tarafından jaile gönderildi.

  • Yetkili: <@${message.author.id}> (\`${message.author.id}\`)
  • Sebebi: \`${reason}\`
  • Kanal: \`${message.channel.name}\`
    `)
    .setFooter(`Tanrısız Jail Log`)
   client.channels.cache.get('845680388381605901').send(Tanrısızlog)

    const bilgi = new Discord.MessageEmbed()
  .setTitle(`Jail Bilgi`)
  .setDescription(`Kanka sunucuda olan kurallara uymadığın için jaile atılmışsın Allah kurtasın ^^
  • Yetkili: <@${message.author.id}> (\`${message.author.id}\`)
  • Jaile Atılan: <@${member.id}> (\`${member.id}\`)
  • Sebebi: \`${reason}\`
   `)
   .setFooter(`Tanrısız Jail Bilgi`)
   client.channels.cache.get('845672271636201505').send(bilgi)

   
}



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['jail','karantina'],
    permLevel: 0
};

exports.help = {
    name: 'Tanrısız Jail Sistemi',
};