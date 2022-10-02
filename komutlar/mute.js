const { MessageEmbed } = require('discord.js');
const db = require('croxydb');
const ms = require("ms");
exports.run = async (client, message, args) => {
  const embed = (content) => message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor("BLACK").setDescription(content));
  if (!message.member.roles.cache.has("848131645079814174") && !message.member.hasPermission("ADMINISTRATOR")) return embed(`Bu komutu kullanmak için ayarlanan yetkiye sahip değilsiniz!`);
  
   const victim = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
   if (!victim) return embed(`Lütfen doğru bir şekilde komutu kullanın teşekkürler.\n\n Örnek: \`.mute @tanrısız/ID\ süre\``); 
  
   var reason, emojis = ["<:c_mute:868108704640278529>", "<:v_mute:868108704409587733>"], filter = (reaction, user) => emojis.includes(reaction.emoji.name) && user.id === message.author.id;
   if (emojis.length < 1) return embed(`Gerekli emojiler belirtilmiş değil.`);
  
   var time = args[1] && (ms(args[1]) && ["m", "h", "d"].some(x => args[1].includes(x))) ? ms(args[1]) : false; 
  
   embed(`Lütfen cezayı, belirten tepkiye tıklayınız.\n\n${emojis[0]}: CHAT-MUTE\n${emojis[1]}: VOICE-MUTE\n\n• 30 saniye içerisinde seçim yapmaz isen işlem iptal olacak.`).then((mesaj) => {
     mesaj.react(emojis[0]);
     mesaj.react(emojis[1]);
     
     let collector = mesaj.createReactionCollector(filter, { time: 30000 });
     
     collector.on("collect", (aprax) => {
       const name = aprax.emoji.name;
       
       if (name == emojis[0]) {
        if (time) {
          reason = `${victim} - (\`${victim.id}\`) adlı kullanıcı \`Metin kanallarının işleyişini bozucu hareket\` sebebiyle \`${args[1]}\` boyunca metin kanallarından susturuldu ^^`;
          mesaj.reactions.removeAll();
          
          victim.roles.add("chatMutedRoleID", { reason: reason }).catch();
          mesaj.delete().then(x => embed(reason));
          
          setTimeout(function () {
            victim.roles.remove("chatMutedRoleID").catch();
            
            embed(`${victim} kullanıcısının susturulma süresi dolduğu için susturulması kaldırıldı.`);
          }, time); 
        } else {
         reason = `${victim} - (\`${victim.id}\`) adlı kullanıcı \`Metin kanallarının işleyişini bozucu hareket\` sebebiyle \`süresiz\` metin kanallarından susturuldu ^^`;
         mesaj.reactions.removeAll();
         
         victim.roles.add("chatMutedRoleID", { reason: reason }).catch();
         mesaj.delete().then(x => embed(reason));
        };
      } else {
       if (time) { 
        reason = `${victim} - (\`${victim.id}\`) adlı kullanıcı \`Ses kanallarının işleyişini bozucu hareket\` sebebiyle \`${args[1]}\` boyunca ses kanallarından susturuldu ^^`;
          mesaj.reactions.removeAll();
         victim.roles.add("voiceMutedRoleID", { reason: reason }).catch();
          mesaj.delete().then(x => embed(reason));
          
          setTimeout(function () {
            victim.roles.remove("voiceMutedRoleID").catch();
            
            embed(`${victim} kullanıcısının susturulma süresi dolduğu için susturulması kaldırıldı.`);
          }, time); 
        } else {
         reason = `${victim} - (\`${victim.id}\`) adlı kullanıcı \`Ses kanallarının işleyişini bozucu hareket\` sebebiyle \`süresiz\` ses kanallarından susturuldu ^^`;
         
         mesaj.reactions.removeAll();
         victim.voice.setMute(true)
         victim.roles.add("voiceMutedRoleID", { reason: reason }).catch();
         mesaj.delete().then(x => embed(reason));
        }
       };
     });
     
     collector.on("end", (aprax) => {
       const size = aprax.size;
       
       if (size < 1) {
         mesaj.edit(`**30 saniye içinde seçim yapılmadığı için işlem iptal edildi :) **`);
         return;
       };
     });
   });;
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};
exports.help = {
  name: "mute"
};