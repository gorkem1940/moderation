const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
    if (!args[0]) {
        return message.channel.send(`Hey Bu Komutu Kullanmak İçin Bir Kullanıcının ID'sini Belirtmen Gerek!`)
   }
   var sebep = args.slice(1).join(" ");
   var pinkcode = args[0]
   var now = new Date()
   if (!sebep) {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(pinkcode)) {
                   return message.channel.send(`:x: Bu Kullanıcı Zaten Yasaklanmış.`)
               }
               message.guild.members.ban(pinkcode, sebep)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<@!${user.id}> adlı kullanıcı banlandı `);
                   })
                   .catch(error => {
                       message.channel.send(`:x: Bir Hata Oluştu Konsola Bak`);
                       console.error('Hata:', error);
                   });
           });
   } else {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(pinkcode)) {
                   return message.channel.send(`Bu Kullanıcı Zaten Yasaklanmış.`)
               }
               message.guild.members.ban(pinkcode, sebep)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<@!${user.id}> sunucudan offline olarak yasaklandı`);
                   })
                   .catch(error => {
                       message.channel.send(` Bir Hata Oluştu Konsola Bak`);
                       console.error('Hata:', error);
                   });
           });
   }
 
}
exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['force-ban' , 'ipban'],
   permLevel: 0
 
};
 
exports.help = {
   name: 'forceban',
   description: 'ID sini yazdığınız kişiyi offline olarak banlar.',
   usage: 'forceban <id>'
};
