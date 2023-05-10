const Discord = require('discord.js')
const db = require('croxydb')

exports.run = async (client, message, args) => {

 if(!['845672270222458924'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu Komutu kullanmak için jail hammer sahibi olmalısın.`) 
  
const unregister = message.guild.roles.cache.find(r => r.id === '845672270189428753')
const unregister1 = message.guild.roles.cache.find(r => r.id === '845672270189428753')
const jail = message.guild.roles.cache.find(r => r.id === '845672270177370134')

if(!unregister) return message.reply('Unregister Rolü Ayarlanmamış .')
if(!jail) return message.reply('Jail Rolü Ayarlanmamış.')

  
let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
if(!member) return message.channel.send('Kimi Jailden Çıkartmam Gerek ?')
let Gorkem = message.guild.member(member)
Gorkem.roles.add(unregister)
Gorkem.roles.add(unregister1)
Gorkem.roles.remove(jail)

const unjail = new Discord.MessageEmbed()
.setTitle(`Jailden Çıkartılmıştır !`)
.setTimestamp()
.addField(`Jailden Çıkartılan Kişi` , `<@${member.id}> (\`${member.id}\`)`)  
.addField(`Jailden Çıkartan Yetkili` , `<@${message.author.id}> (\`${message.author.id}\`)`)
.setFooter(`Gorkem Unjail Sistemi || Jailden Çıkartılmıştır.`)
.setColor('BLACK')
message.channel.send(unjail)
        message.react('✅')
    
const unjaillog = new Discord.MessageEmbed()
.setTitle(`Jailden Çıkartılmıştır !`)
.setTimestamp()
.addField(`Jailden Çıkartılan Kişi` , `<@${member.id}> (\`${member.id}\`)`)  
.addField(`Jailden Çıkartan Yetkili` , `<@${message.author.id}> (\`${message.author.id}\`)`)
.setFooter(`Gorkem Unjail Log`)
.setColor('BLACK')
client.channels.cache.get('845680388381605901').send(unjaillog)

const registerunjail = new Discord.MessageEmbed()
.setTitle(`Jailden Çıkmıştır`)
.setDescription(`<@${member.id}> (\`${member.id}\`) Arkadaş jailden yeni çıktı dikkat edin !`)
.setFooter(`Gorkem Unjail Sistemi || Jailden Yeni Çıkartılmıştır !!`)
client.channels.cache.get('845672270256537606').send(registerunjail)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['unjail','karantinaçıkar'],
    permLevel: 0
};

exports.help = {
    name: 'Gorkem Unjail Sistemi',
};
