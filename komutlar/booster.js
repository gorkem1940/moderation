const Discord = require("discord.js");

exports.run = async (client, message, args, ayar, emoji) => {
    let boosterrol = "856581218161786961" //boost rolü idsi
    let kanalid = "856566056448819270" //kullana bileceginiz kanal id (misal commands - bot komutlar)
    let renk = "ffffff" //renk kafaniza göre ayarlayin suanki pembe boost rengi
    let tag = "☆" //tag sembolü varsa yazin cünkü isminin basina ekleyek olan sey yoksa bos birakin


    let onay = "841782363687092224" //onay emojisi id tepki icin 
    let iptal = "841782363218509835" //iptal emojisi id tepki icin
    if(!message.member.roles.cache.has(boosterrol)) return message.channel.send(`**Bu komutu kullanabilmek için Sunucuya Boost basmalısın** ${iptal}`).then( a=> a.react(iptal)) 
    if(message.channel.id !== kanalid) return message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag,  message.author.avatarURL({dynamic: true}))
.setColor(renk)
    .setDescription(`**\`•\` <@${message.author.id}>, bu komutu sadece <#${kanalid}> kanalin da kullanabilirsin.**`)
.setTimestamp()
.setFooter(`Tanrısızaskm`, "https://cdn.discordapp.com/emojis/785950806384836619.gif?v=1%22"))
message.react(iptal);

  let boosternick = args.slice(0).join(' ')
  if(!boosternick) return message.reply("Yeni adını girmelisin.").then( a=> a.react(iptal))
  message.member.setNickname(`${tag} ${boosternick}`)
    const Savage = new Discord.MessageEmbed()
    .setAuthor(message.author.tag,  message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    .setColor(renk)
    .setDescription(`**\`•\` Nickin adın başarıyla \`${tag} ${boosternick}\` olarak değiştirildi.**`) // tagi göstermesse embedde ${boosternick}'in basina ${tag} ekleyin yani; ${tag} ${boosternick}
    .setFooter(`Tanrısızaskm`, "https://cdn.discordapp.com/emojis/785950806384836619.gif?v=1%22")
    message.channel.send(Savage)
    message.react(onay);
}

exports.conf = {
    name: "zengin",
    aliases: ["booster", "boosternick", "rich", "me"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'zengin', 
    description: 'Boost basanlar isim sag tiksiz degise bilcek.',
    usage: 'rich <isim>',
    kategori: 'kullanıcı'
};