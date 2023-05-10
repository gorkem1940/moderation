const Discord = require('discord.js');
const db = require('croxydb');
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {
   if (!message.member.roles.cache.has("849341898245275688") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",` Bu komutu kullanabilmen için gerekli yetkin yok.`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
   let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
   if(!member) {
       return message.channel.send('\・Bir kişi etiketlemelisin.')
   }
   let gorkemvip = message.guild.roles.cache.find(r => r.id === '848127316680638505') // Rol id

   if(!gorkemvip) {
       return message.channel.send('Hata oluştu!')
   }

   let vipa = message.guild.member(member)


   vipa.roles.add(gorkemvip)
   let RİA = new Discord.MessageEmbed()
   .setColor('BLACK')
   .setTitle('<a:sseytan:841782368771768350> VIP ROLU VERİLDİ. <a:sseytan:841782368771768350>')
   .addField('<a:kaytk:841782363687092224> VIP Rolü Alan Kullanıcı:',member)
   .addField('<a:kaytk:841782363687092224> VIP Rolü Veren Yetkili:', message.author)

message.channel.send(RİA);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['vipver','vip-ver', 'vip'],
    permLevel: 0
};

exports.help = {
    name: 'vip',
    description: 'vip-ver',
    usage: 'vip-ver'
}; 
