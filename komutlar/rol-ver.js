const Discord = require("discord.js");
exports.run = async(client, message, args) => {
   if (!message.member.roles.cache.has("862706091250548756") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",` Bu komutu kullanabilmen için gerekli yetkin yok.`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
        let embed = new Discord.MessageEmbed().setColor('##084e51')
        let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
        if (!member) return message.channel.send(embed.setDescription("Kullanıcı etiketlenmedi veya bulunamadı!")).then(x => x.delete({ timeout: 3000 }))
        let rol = message.guild.roles.cache.find(x => x.name == args[1]) ||  message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
        if (!rol) return message.channel.send(embed.setDescription("Rol belirtmelisin. !rolver @kullanıcı/id @rol/id/isim")).then(x => x.delete({ timeout: 3000 }))

        try {
            message.channel.send(embed.setDescription(`Kullanıcıya ${rol} rolü başarıyla verildi`));
            member.roles.add(rol)
              } catch{
                  message.channel.send("Bir Hata Oluştu Botun Yapımcısına Yazın @Tanrısız")
            }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rolver','rol-ver'],
    permLevel: 0
};

exports.help = {
    name: 'Rol verir.',
};