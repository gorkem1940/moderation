const { MessageEmbed } = require("discord.js");

const ayarlar = require("../ayarlar.json");
exports.run = async(client, message, args) => {
    let embed = new MessageEmbed().setColor('RANDOM').setTimestamp().setFooter(` Xai ❤️ North`)
    let rol = "ROL ID"
    let tag = "22"
    let etiket = "1875" // etiketi # siz yazin
    message.guild.members.cache.filter(s => s.user.discriminator === etiket || s.user.username.includes(tag) && !s.roles.cache.has(rol)).forEach(m => m.roles.add(rol))
    message.channel.send(embed.setDescription(`
Kullanıcı adında \`${tag}\` ve etiketinde \`#${etiket}\` bulunduran kullanıcılara rol veriliyor.
`))
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["tag-say"],
    permLvl: 0,
  }
  
    exports.help = {
    name: 'taglı'
  }