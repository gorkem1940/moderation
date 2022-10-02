//const Discord = require('discord.js');
//module.exports = member => {
//};

const moment = require("moment")
require("moment-duration-format")
module.exports = class {
    constructor(client) {
      this.client = client;
    }

  async run(member) {
    if(member.bot) return;
    if (Date.now() - member.user.createdTimestamp < ms("1d")) return;
    let fake = Date.now() - member.user.createdTimestamp < ms("5d") ? true : false
    let arr = []
    let InviteCode;
    const cachedInvites = await this.client.guildInvıtes.get(member.guild.id)
    const newInvites = await member.guild.fetchInvites()
    await this.client.guildInvıtes.set(member.guild.id, newInvites)
    try {
      const usedInvite = await newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses)
      if(usedInvite) {
        arr.push(usedInvite.inviter.id)
        InviteCode = usedInvite0
      }
    } catch (err) {
      this.client.logger.log(err, "error")
    }

    if(arr.length > 0) {
      const InviteUser = await this.client.users.fetch(arr[0])
      if(InviteUser.id == member.id) return this.client.channels.cache.get("861562582032056320 kanal ıd ").send("🎉 Revolution'a hoş geldin <@!" + member + "> !\n\nHesabın " + moment(member.user.createdTimestamp).format("LLL") + " tarihinde (" + moment(member.user.createdTimestamp).fromNow() + ") oluşturulmuş. \n\nSunucu kurallarımız <#852194278980583447> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek.\n\nSeninle beraber " + member.guild.members.cache.size + " kişi olduk! Sol tarafta bulunan **V. Confirmed** odalarından birine girerek kayıt işlemini gerçekleştirebilirsin."), this.client.channels.cache.get("852194283028086862").send(`<a:rvt_star:858790966822567966> ${member} sunucuya katıldı, kullanıcı kendi kendini davet ettiği için işlem yapılmadı.`)

      this.client.channels.cache.get("861562582032056320 kanal ıd").send("🎉 Revolution'a hoş geldin <@!" + member + "> !\n\nHesabın " + moment(member.user.createdTimestamp).format("LLL") + " tarihinde (" + moment(member.user.createdTimestamp).fromNow() + ") oluşturulmuş. \n\nSunucu kurallarımız <#852194278980583447> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek.\n\n"+ + "> " + member.guild.members.cache.size + ". üyesi olmanı sağladı! İyi eğlenceler 🎉🎉🎉")
    } else {
      this.client.channels.cache.get("861562582032056320 kanal ıd").send("🎉 Revolution'a hoş geldin <@!" + member + "> !\n\nHesabın " + moment(member.user.createdTimestamp).format("LLL") + " tarihinde (" + moment(member.user.createdTimestamp).fromNow() + ") oluşturulmuş. \n\nSunucu kurallarımız <#852194278980583447> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek.\n\nSeninle beraber " + member.guild.members.cache.size + " kişi olduk! Sol tarafta bulunan **V. Confirmed** odalarından birine girerek kayıt işlemini gerçekleştirebilirsin."), this.client.channels.cache.get("852194283028086862").send(`<a:rvt_star:858790966822567966> ${member} sunucuya katıldı fakat kimin davet ettiği bulunamadı.`)
    }
}
} 