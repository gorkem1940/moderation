const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) => {
    if (!message.member.hasPermission(8)) return;
    let embed = new MessageEmbed().setColor('RANDOM').setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))

    let pubID = "868212811564711953"

    let pubatılcaklar = message.guild.members.cache.filter(s => s.voice.channel && s.voice.channel.id === message.member.voice.channel.id).filter(x => x.voice.selfDeaf === false)
    let sleep = message.guild.members.cache.filter(s => s.voice.channel && s.voice.channel.id === message.member.voice.channel.id).filter(x => x.voice.selfDeaf === true)

    let kanallar = message.guild.channels.cache.filter(s => s.parentID === pubID)
    let sleepID = "868212811912855629"
    sleep.array().forEach(async(member, index) => {
        setTimeout(() => {
            member.voice.setChannel(sleepID)
        }, index * 2000)
    })
    pubatılcaklar.array().forEach(async(member, index) => {
        setTimeout(() => {
            member.voice.setChannel(kanallar.random())
        }, index * 2000)
    })
    embed.setDescription(`${sleep.size} Adet kullanıcı sleep odalara taşındı. 
    ${pubatılcaklar.size} Adet kullanıcı public odalara dağıtıldı.`)
    message.channel.send(embed)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dağıt'],
    permLevel: 0
};

exports.help = {
    name: 'Sesteki Üyeleri Seslere Dağıtır.',
};