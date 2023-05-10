const Discord = require("discord.js");
const moment = require("moment");
const talkedRecently = new Set();
const ms = require("ms");
const { parseZone } = require("moment");

module.exports.run = async(client, message, args)  => {

  
 if(!message.member.roles.cache.get('838765022086955048') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.')

 if(!args[0]) return message.channel.send('Canım sunucudan kimi şutlayayım ?')

let reason = args.slice(1).join(' ')
let cardin = message.mentions.users.first() || client.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user
if(!reason) return message.channel.send('Bir Sebep Belirt.')
if(!cardin) return message.channel.send('Belirtilen Kullanıcı Sunucuda Bulunmamakta.')
let member = message.guild.member(cardin)
if(!member) return message.channel.send('Belirtilen Kullanıcı Sunucuda Bulunmamakta.')
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Etiketlenen Kullanıcı Sizden Üst/Aynı Pozisyonda.')
  member.ban({days: 7, reason: reason})

         const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL ({ dynamic : true }))
        .setColor(`GREEN`)
        .setDescription(`<@${member.id}> (\`${member.id}\`) Adlı Kullanıcı <@${message.author.id}> Tarafından Sunucudan Yasaklandı.

      • Yetkili: <@${message.author.id}> (\`${message.author.id}\`)
      • Sebebi: \`${reason}\`
      • Kanal: \`${message.channel.name}\`
        `)
        .setFooter(`Görkemcim Ban Sistemi || Arkadaş Sunucu Dışına Gönderilmiştir ^^`)
        message.channel.send(embed)
        message.react('✅')

                 const cardinlog = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL ({ dynamic : true }))
        .setColor(`GREEN`)
        .setDescription(`<@${member.id}> (\`${member.id}\`) Adlı Kullanıcı <@${message.author.id}> Tarafından Sunucudan Yasaklandı.

      • Yetkili: <@${message.author.id}> (\`${message.author.id}\`)
      • Sebebi: \`${reason}\`
      • Kanal: \`${message.channel.name}\`
        `)
        .setFooter(`Görkemcim Ban Log`)
       client.channels.cache.get('838765132301336596').send(Tanrısızlog)
  

};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ban", "yasakla"],
    PermLvl: 0,
}

exports.help = {
  name: 'ban'
};
