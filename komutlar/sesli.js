const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {      

let confirmRooms = "862706286335229973" // Teyit odaları kategori ID
let publicRooms = "862706298720878622" // Public odaları kategori ID
let privRooms = "862706303058313216" // Priv odaları kategori ID
let gameRooms = "862706300545925160" // Oyun odaları kategori ID

let Voice = message.guild.members.cache.filter(t => t.voice.channel).size;
let Confirm = message.guild.members.cache.filter(c => c.voice.channel && c.voice.channel.parentID === confirmRooms).size;
let Public = message.guild.members.cache.filter(c => c.voice.channel && c.voice.channel.parentID === publicRooms).size;
let Game = message.guild.members.cache.filter(c => c.voice.channel && c.voice.channel.parentID === gameRooms).size;
let Priv = message.guild.members.cache.filter(c => c.voice.channel && c.voice.channel.parentID === privRooms).size;
message.channel.send(new Discord.MessageEmbed().setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
.setDescription(`
\`•\` Sesli odalarda toplam **${Voice}** kişi var.

\`•\` Teyit odalarında bulunan **${Confirm}** kişi var.
\`•\` Public odalarımda bulunan **${Public}** kişi var.
\`•\` Priv odalarımda bulunan **${Priv}** kişi var.
\`•\` Oyun odalarında bulunan **${Game}** kişi var.
`))
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ses','sesli'],
    permLevel: 0
};

exports.help = {
    name: 'Sesteki üyeler',
};