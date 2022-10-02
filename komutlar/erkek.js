const Discord = require('discord.js');
const db = require('croxydb')
  

exports.run = async (client, message, args) => {
let kayityetkili = '862706130382880799' //Yetkili
let codeariusver = '862706154508124250' //ERKEK 1
let codeariusver2 = '862706155251171368' //ERKEK 2 
let codeariusal = '862706157814939678' //Alınacak
let isimön = '✭' //İsmin önüne gelecek simge,tag   

if (!message.member.roles.cache.has("862706130382880799") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",` Bu komutu kullanabilmen için gerekli yetkin yok.`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  let isim = args[1]
  let yaş = args[2]
  if (!member) return message.channel.send('Bir üye etiketlemelisin.').then(message => message.delete({timeout: 5000}));  
  if (!isim) return message.channel.send('Bir isim yazmalısın.').then(message => message.delete({timeout: 5000}));
  if (!yaş) return message.channel.send('Bir yaş yazmalısın.').then(message => message.delete({timeout: 5000})); 
  if (isNaN(yaş)) return message.channel.send('Yaş sadece sayı olarak kabul edilir.').then(message => message.delete({timeout: 5000}));
  if(!['viprolıd', 'boosterrolıd', 'familyrolıd'].some(role => member.roles.cache.get(role)) ) return message.channel.send('Sunucumuz şu anda taglı alımda, kısacası kayıt olman için tag alman veya boost basman gerekir.').then(x => x.delete({timeout: 6500}));
   
  let toplamaisim = `${isimön} ${isim} | ${yaş}`
  let kayıtlımı = await db.fetch(`kayıtlıkişi_${member}`)
    db.set(`kayıtlıisim_${member}`, toplamaisim)
  db.push(`eskiad_${member.id}`, toplamaisim)
  db.add(`toplamik_${member.id}`, 1)
   if(kayıtlımı === 'evet'){
  
 
 }
  let codeariuseski = await db.fetch(`eskiad_${member.id}`) || 'Eski ismi yok'
  let toplamik = await db.fetch(`toplamik_${member.id}`) || '0'
  let eskiismi = await db.fetch(`kayıtlıisim_${member}`)  
    
  setTimeout(function(){
  member.setNickname(`${isimön} ${isim} | ${yaş}`)
  },1000)
    setTimeout(function(){
  member.roles.add(codeariusver)//ERKEK 1  
  },2000)
  setTimeout(function(){
  member.roles.add(codeariusver2)//ERKEK 2
  },2000)
  setTimeout(function(){
  member.roles.remove(codeariusal)
  },3000)
 

    
  let embed = new Discord.MessageEmbed()
  .setAuthor(`Kayıt Başarılı`,)
  .setColor('f5f5f5')
  .setDescription(`

**Kayıt edilen kullanıcı :** ${member}
**Kayıt işleminde verilen rol: ** <@&${codeariusver}>
**Yeni Kullanıcı Adı :** \`${toplamaisim}\`


**Bu Kullanıcının Sunucudaki Eski İsimleri [${toplamik}]** <a:kaytk:841782363687092224>
\n\`${codeariuseski.join('\n')}\`
`)
  
  .setThumbnail(member.user.avatarURL({dynamic: true}))
 .setFooter(message.author.username,
message.author.avatarURL( { dynamic : true } ))
  .setTimestamp()
   
  
message.channel.send(embed)
  message.react('841782363687092224')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [''],
  permLevel: 0
}
exports.help = {
  name: 'e',
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: 'kadın @kişi isim yaş'
}


////// EKİP İÇİN KAYIT BOTU ////////


const Discord = require('discord.js');
const db = require("croxydb")
exports.run = async (client, message, args) => {
 if (!message.member.roles.cache.has("YETKİLİ İD") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Bir Kullanıcı Etiketleyiniz`).setColor("BLACK"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let isim = args[1];
      if(!isim) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Bir İsim Yazınız`).setColor("BLACK")).then(m => m.delete({timeout: 5000}));
await member.setNickname(`${isim}`)
  member.roles.add("ERKEK ROL İD");
  member.roles.add("ERKEK 2. ROL İD");
  member.roles.remove("UNREGİSTER İD");
     const kanal = message.guild.channels.cache.find(c => c.id == "GENEL SOHBET İD")
    const embed1 = new Discord.MessageEmbed() 
    .setDescription(`<@!${member.id}> Arımıza katıldı.`)
    .setColor("BLACK")
  let embed = new Discord.MessageEmbed() 
  .setColor("BLACK")
  .setTimestamp()
  .addField(`Kayıt İşlemi Başarılı`, `<@!${member.id}> **Adlı Kullanıcıya <@&ROL İD> Rolünü Verdim ve İsmini** \n\`${isim} | ${yas}\` **Olarak Düzenledim**`) 
  .setFooter(`Komutu Kullanan Yetkili : ${message.author.username}` ,message.author.avatarURL({dynamic: true }))
  return message.channel.send(embed).then(kanal.send(embed1)).then(m => m.delete({timeout: 20000}));
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["erkek" , "e"],
  permLevel: 0
}
exports.help = {
  name: 'Erkek',

}