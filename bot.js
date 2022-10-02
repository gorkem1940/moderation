const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
const disbut = require('discord-buttons')
disbut(client);
require('./util/eventLoader.js')(client);
const fs = require('fs');
const express = require ('express')
const app = express();
const port = 3000
app.get('/',(req, res) => res.send( 'Hey I am Live :D'))
 
app.listen(port,() =>
console.log('your App Is Listening At https://localhost:${port}')
);
const Jimp = require("jimp");
const  db  = require('croxydb')
const tags = require('common-tags')

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//////////////////////////////

  client.on("ready", () => {
    client.channels.cache.get("845672270767849476").join();
  })
///////////////////////////////
  

client.on("message", async msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.reply('Aleyküm Selam Nasılsın? <a:syhkalp:841782368419053589>');
    }
  });

  client.on("message", async msg => {
    if (msg.content.toLowerCase() === 'slm') {
      msg.reply('Aleyküm Selam Nasılsın? <a:syhkalp:841782368419053589>');
    }
  });

  client.on("message", async msg => {
    if (msg.content.toLowerCase() === 'Selamın Aleyküm') {
      msg.reply('Aleyküm Selam Nasılsın? <a:syhkalp:841782368419053589>');
    }
  });

  client.on("message", async msg => {
    if (msg.content.toLowerCase() === 'Selam ') {
      msg.reply('Aleyküm Selam Nasılsın? <a:syhkalp:841782368419053589>');
    }
  });

  client.on("message", async msg => {
    if (msg.content.toLowerCase() === 'selam') {
      msg.reply('Aleyküm Selam Nasılsın? <a:syhkalp:841782368419053589>');
    }
  });

  client.on("message", async msg => {
    if (msg.content.toLowerCase() === 'link') {
      msg.reply('https://discord.gg/zHUm7E2tjq');
    }
  });

  client.on("message", async msg => {
    if (msg.content.toLowerCase() === '!link') {
      msg.reply('https://discord.gg/zHUm7E2tjq');
    }
  });

  client.on("message", async msg => {
    if (msg.content.toLowerCase() === '.link') {
      msg.reply('https://discord.gg/zHUm7E2tjq');
    }
  });


  client.on("message", message => {
    if(message.content.toLowerCase() == "<@!478293497166954507>") 
    return message.channel.send("Arkadaşlık atsana canısı")
});

      client.on("message", message => {
        if(message.content.toLowerCase() == "tag") 
        return message.channel.send("_Yazı Tagımız_ : **TheUnbeaten** & _Etiket_: **#1975**")
    });

    client.on("message", message => {
      if(message.content.toLowerCase() == ".tag") 
      return message.channel.send("_Yazı Tagımız_ : **TheUnbeaten** & _Etiket_: **#1975**")
  });

  client.on("message", message => {
    if(message.content.toLowerCase() == "!tag") 
    return message.channel.send("_Yazı Tagımız_ : **TheUnbeaten** & _Etiket_: **#1975**")
});


client.on("userUpdate", async function(oldUser, newUser) { 
  const guildID = "848126239503548436"//sunucu
  const roleID = "848140429858045992"//taglırolü
  const tag = "TheUnbeaten"//tag
  const chat = '848126459443675137'// chat
  const log2 = '848316120359501854' // log kanalı

  const guild = client.guilds.cache.get(guildID)
  const role = guild.roles.cache.find(roleInfo => roleInfo.id === roleID)
  const member = guild.members.cache.get(newUser.id)
  const embed = new Discord.MessageEmbed().setAuthor(member.displayName, member.user.avatarURL({ dynamic: true })).setColor('#ff0000').setTimestamp().setFooter('🎄Developed by Tanrısız🎄');
  if (newUser.username !== oldUser.username) {
      if (oldUser.username.includes(tag) && !newUser.username.includes(tag)) {
          member.roles.remove(roleID)
          client.channels.cache.get(log2).send(embed.setDescription(` ${newUser} isminden \`TheUnbeaten\` çıkartarak ailemizden ayrıldı!`))
      } else if (!oldUser.username.includes(tag) && newUser.username.includes(tag)) {
          member.roles.add(roleID)
          client.channels.cache.get(chat).send(`<a:kaytk:840935035367981056>Tebrikler, ${newUser} tag alarak ailemize katıldı.(${tag})`)
          client.channels.cache.get(log2).send(embed.setDescription(`  ${newUser} ismine \`TheUnbeaten\` alarak ailemize katıldı`))
      }
  }
 if (newUser.discriminator !== oldUser.discriminator) {
      if (oldUser.discriminator == "1975" && newUser.discriminator !== "1975") {
          member.roles.remove(roleID)
          client.channels.cache.get(log2).send(embed.setDescription(`  ${newUser} etiketinden \`1975\` çıkartarak ailemizden ayrıldı!`))
      } else if (oldUser.discriminator !== "1975" && newUser.discriminator == "1975") {
          member.roles.add(roleID)
          client.channels.cache.get(log2).send(embed.setDescription(`  ${newUser} etiketine \`1975\` alarak ailemize katıldı`))
          client.channels.cache.get(chat).send(`<a:kaytk:840935035367981056>**Tebrikler, ${newUser} tag alarak ailemize katıldı.**(#1975)`)
      }
  }

})

////////////////////////////////////     ÇOKLU TAG ROL   /////////////////////////////////////////////
client.on("userUpdate", async function(oldUser, newUser) { 
  const guildID = "849331834370261016"//sunucu
  const roleID = "849339362402893884"//taglırolü
  const tag = "North"//tag
  const tag2 = "";
  const tag3 = "";
  const chat = '849332673905688606'// chat
  const log2 = '850016343239295106' // log kanalı

  const guild = client.guilds.cache.get(guildID)
  const role = guild.roles.cache.find(roleInfo => roleInfo.id === roleID)
  const member = guild.members.cache.get(newUser.id)
  const embed = new Discord.MessageEmbed().setAuthor(member.displayName, member.user.avatarURL({ dynamic: true })).setColor('#ff0000').setTimestamp().setFooter('🎄Developed by Tanrısız🎄');
  if (newUser.username !== oldUser.username) {
      if (oldUser.username.includes(tag) && !newUser.username.includes(tag)) {
          member.roles.remove(roleID)
          client.channels.cache.get(log2).send(embed.setDescription(` ${newUser} isminden \`North\` çıkartarak ailemizden ayrıldı.`))
      } else if (!oldUser.username.includes(tag) && newUser.username.includes(tag)) {
          member.roles.add(roleID)
          client.channels.cache.get(chat).send(`<a:kaytk:841782363687092224>Tebrikler, ${newUser} tag alarak ailemize katıldı.(${tag})`)
          client.channels.cache.get(log2).send(embed.setDescription(`  ${newUser} ismine \`North\` alarak ailemize katıldı.`))
      }
  }
  if (newUser.username !== oldUser.username) {
      if (oldUser.username.includes(tag2) && !newUser.username.includes(tag2)) {
          member.roles.remove(roleID)
          client.channels.cache.get(log2).send(embed.setDescription(` ${newUser} isminden \`${tag2}\` çıkartarak ailemizden ayrıldı.`))
      } else if (!oldUser.username.includes(tag2) && newUser.username.includes(tag2)) {
          member.roles.add(roleID)
          client.channels.cache.get(chat).send(`<a:kaytk:841782363687092224>Tebrikler, ${newUser} tag alarak ailemize katıldı.(${tag})`)
          client.channels.cache.get(log2).send(embed.setDescription(`  ${newUser} ismine \`${tag2}\` alarak ailemize katıldı.`))
      }
  }
  if (newUser.username !== oldUser.username) {
      if (oldUser.username.includes(tag) && !newUser.username.includes(tag3)) {
          member.roles.remove(roleID)
          client.channels.cache.get(log2).send(embed.setDescription(` ${newUser} isminden \`${tag3}\` çıkartarak ailemizden ayrıldı.`))
      } else if (!oldUser.username.includes(tag3) && newUser.username.includes(tag3)) {
          member.roles.add(roleID)
          client.channels.cache.get(chat).send(`<a:kaytk:841782363687092224>Tebrikler, ${newUser} tag alarak ailemize katıldı.(${tag})`)
          client.channels.cache.get(log2).send(embed.setDescription(`  ${newUser} ismine \`${tag3}\` alarak ailemize katıldı.`))
      }
  }
 if (newUser.discriminator !== oldUser.discriminator) {
      if (oldUser.discriminator == "0046" && newUser.discriminator !== "0046") {
          member.roles.remove(roleID)
          client.channels.cache.get(log2).send(embed.setDescription(`  ${newUser} etiketinden \`0046\` çıkartarak ailemizden ayrıldı.`))
      } else if (oldUser.discriminator !== "0046" && newUser.discriminator == "0046") {
          member.roles.add(roleID)
          client.channels.cache.get(log2).send(embed.setDescription(`  ${newUser} etiketine \`0046\` alarak ailemize katıldı`))
          client.channels.cache.get(chat).send(`<a:kaytk:841782363687092224>**Tebrikler, ${newUser} tag alarak ailemize katıldı.**(#0046)`)
      }
  }

})

////////////////////////////////////////// TEK TAG  ROL XD /////////////////////////////////////////////
client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
  const tag = 'SłNłЯ YØK'
  const sunucu = "832985894872416287"
  const kanal = '849048662038151208'
  const rol = '838765030274629733'

  try {

  if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`${newUser} , \`${tag}\` Tagımızı Aldığı İçin <@&${rol}> Rolü Verildi`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
  }
  if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("RED").setDescription(`${newUser} , \`${tag}\` Tagımızı Çıkardığı İçin <@&${rol}> Rolü Alındı`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
  }
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
});


/////////////////////////////   İLTİFAT  ////////////////////////////
const knaveqwe = [
  'Gözlerindeki saklı cenneti benden başkası fark etsin istemiyorum.',
  'Mavi gözlerin, gökyüzü oldu dünyamın.',
  'Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.',
  'Huzur kokuyor geçtiğin her yer.',
  'Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.',
  'Gözlerinin hareketi bile yeter  benim aklımı başımdan almaya.',
  'Güller bile kıskanır seni gördükleri zaman kendi güzelliklerini.',
  'Hiç yazılmamış bir şiirsin sen, daha önce eşi benzeri olmayan.',
  'Adım şaire çıktı civarda. Kimse senin şiir olduğunun farkında değil henüz.',
  'Etkili gülüş kavramını ben senden öğrendim.',
  'Seni anlatmaya kelimeler bulamıyorum. Nasıl anlatacağımı bilemediğim için seni kimselere anlatamıyorum.',
  'Gözlerinle baharı getirdin garip gönlüme.',
  'Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.',
  'Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın.',
  'Sen bu  dünyadaki bütün şarkıların tek sahibisin. Sana yazılıyor bütün şarkılar ve şiirler. Adın geçiyor bütün namelerde.',
  'Seni yüreğimde taşıyorum ben, sırtımda taşımak ne kelime. Ömrüm boyunca çekmeye hazırım her anlamda senin yükünü.',
  'Hayatıma gelerek hayatımdaki bütün önemli şeylerin önemsiz olmasını sağladın. Artık sensin tek önem verdiğim şu hayatta.',
  'Sen benim bu hayattaki en büyük duamsın.  Gözlerin adeta bir ay parçası. Işık oluyorsun karanlık gecelerime.',
  'Aynı zaman diliminde yaşamak benim için büyük ödüldür.',
  'Biraz Çevrendeki İnsanları Takarmısın ?',
  'Hayatına soksana beni',
  'Kalbime giden yolu aydınlatıyor gözlerin.  Sadece sen görebilirsin kalbimi. Ve sadece ben hissedebilirim bana karşı olan hislerini.',
  'Onu Bunu Boşver de bize gel 2 bira içelim.',
  'Taş gibi kızsın ama okey taşı… Elden elde gidiyorsun farkında değilsin.',
  'Tanrısız seni çok sevdi...',
  'Mucizelerden bahsediyordum.',
];

client.on("message", async message => {
  if(message.channel.id !== "848126459443675137") return;
  let Knavedev = db.get('chatiltifat');
  await db.add("chatiltifat", 1);
  if(Knavedev >= 50) {  
    db.delete("chatiltifat");
    const random = Math.floor(Math.random() * ((knaveqwe ).length - 1) + 1);
    message.reply(`${(knaveqwe )[random]}`);
  };
});


client.on('voiceStateUpdate', async (oldState, newState) => {
  if (!oldState.channelID && newState.channelID) return newState.guild.channels.cache.get('848180706412199966').send(`${newState.guild.members.cache.get(newState.id).displayName} üyesi \`${newState.guild.channels.cache.get(newState.channelID).name}\` adlı sesli kanala girdi!`);
  if (oldState.channelID && !newState.channelID) return newState.guild.channels.cache.get('848180706412199966').send(`${newState.guild.members.cache.get(newState.id).displayName} üyesi \`${newState.guild.channels.cache.get(oldState.channelID).name}\` adlı sesli kanaldan ayrıldı!`);
  if (oldState.channelID && newState.channelID && oldState.channelID != newState.channelID) return newState.guild.channels.cache.get('848180706412199966').send(`${newState.guild.members.cache.get(newState.id).displayName} üyesi ses kanalını değiştirdi! (\`${newState.guild.channels.cache.get(oldState.channelID).name}\` => \`${newState.guild.channels.cache.get(newState.channelID).name}\`)`);
  if (oldState.channelID && oldState.selfMute && !newState.selfMute) return newState.guild.channels.cache.get('848180706412199966').send(`${newState.guild.members.cache.get(newState.id).displayName} üyesi \`${newState.guild.channels.cache.get(newState.channelID).name}\` adlı sesli kanalda kendi susturmasını kaldırdı!`);
  if (oldState.channelID && !oldState.selfMute && newState.selfMute) return newState.guild.channels.cache.get('848180706412199966').send(`${newState.guild.members.cache.get(newState.id).displayName} üyesi \`${newState.guild.channels.cache.get(newState.channelID).name}\` adlı sesli kanalda kendini susturdu!`);
  if (oldState.channelID && oldState.selfDeaf && !newState.selfDeaf) return newState.guild.channels.cache.get('848180706412199966').send(`${newState.guild.members.cache.get(newState.id).displayName} üyesi \`${newState.guild.channels.cache.get(newState.channelID).name}\` adlı sesli kanalda kendi sağırlaştırmasını kaldırdı!`);
  if (oldState.channelID && !oldState.selfDeaf && newState.selfDeaf) return newState.guild.channels.cache.get('848180706412199966').send(`${newState.guild.members.cache.get(newState.id).displayName} üyesi \`${newState.guild.channels.cache.get(newState.channelID).name}\` adlı sesli kanalda kendini sağırlaştırdı!`);
});


const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()

      .setColor("GREEN")
      .setDescription(`${message.author} kullanıcısı \`Afk\` Modundan Ayrıldı.`);
    message.channel.send(embed);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

    const afk = new Discord.MessageEmbed()

      .setColor("RED")
      .setAuthor(USER.tag, USER.displayAvatarURL({ dynamic: true }))
      .setDescription(`**${USER.tag}**\n ${USER} kullanıcısı \`${REASON}\` sebebiyle **${timeObj.hours}saat** **${timeObj.minutes}dakika** **${timeObj.seconds}saniye** süredir \`AFK\``);

    message.channel.send(afk);
  }
});


// snipe 
client.on("messageDelete", async message => {
  const cdb = require("croxydb")
      if (message.author.bot) return;
      if (message.content.length > "200") {
          cdb.push(`snipe.${message.guild.id}`, {
              authors: message.author.username,
              contents: "Silinen mesaj 200 karakteri aşıyor!",
              tarih: Date.now()
          })
      } else {
          cdb.push(`snipe.${message.guild.id}`, {
              authors: message.author.username,
              contents: message.content,
              tarih: Date.now()
          })
      }
  })

  //küfür engel

  client.on("message", msg => {
    const küfür =  ["oç", "orospu çocuğu", "orospu cocu", "orspucocu", "OÇ", "OROSPU ÇOCUĞU",  "yarrak", "sikik", "aq", "sik", "amk", "amına kodum", "Oç"];
    if (küfür.some(shi => msg.content.includes(shi))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
              msg.delete();
                return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Public sunucuda küfür edemezsin.`)).then(x => x.delete({timeout: 5000}));
  msg.delete(3000);                              
        }              
      } catch(err) {
        console.log(err);
      }
    }
  });

  //yasklı tag//

  client.on("guildMemberAdd", async wmember => {

    let wytag = [""]; //yasaklı taglar birden fazla eklenebilri
  
    if (wytag.some(y => wmember.user.username.includes(y))) {
  
      await wmember.roles.set(["yasaklı tag rol id"]).catch(e => console.error(e));
  
    } else {
  
      await wmember.roles.set(["kayıtsız rol id"]).catch(e => console.error(e));
  
    }
  
  });
 
  // bot dm log

  client.on("message", async message => {
    if(message.author.id === client.user.id) return;
    if(message.guild) return;
    client.channels.cache.get('Dm lod ıdsi').send(new Discord.MessageEmbed().setAuthor("Bir Dm Geldi", client.user.avatarURL()).setFooter(message.author.tag, message.author.avatarURL()).setDescription(`**Gönderenin ID:** ${message.author.id}`).setTimestamp().addField("Mesaj", message.content).setColor("RANDOM"))
  })


  // sunucu aylık üye permleri
setInterval(() => {
  let GuildID = "sunucuID"
  let OneMonth = "1 aylık üye rol ID"
  let ThreeMonth = "3 aylık üye rol ID"
  let SixMonth = "6 aylık üye rol ID"
  let NineMonth = "9 aylık üye rol ID"
  let OneYear = "1 YILLIK"
  const mercy = client.guilds.cache.get(GuildID); 
  mercy.members.cache.forEach(async member => {
if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 30) {await member.roles.add(OneMonth)}

if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 90) {await member.roles.remove(OneMonth)
  await member.roles.add(ThreeMonth)}

if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 180) {await member.roles.remove(ThreeMonth)
await member.roles.add(SixMonth)}

if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 270) {await member.roles.remove(SixMonth)
  await member.roles.add(NineMonth)}

  if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 365) {await member.roles.remove(NineMonth)
    await member.roles.add(OneYear)}

        })
  }, 1000 * 60 * 60 * 24 * 7)

  client.on("message", (message) => {

    if (message.content !== "!buton" || message.author.bot) return;
  
  let EtkinlikKatılımcısı = new disbut.MessageButton()
    .setStyle('red') 
    .setLabel('Etkinlik Duyuru 🎉') 
    .setID('EtkinlikKatılımcısı'); 

  let ÇekilişKatılımcısı = new disbut.MessageButton()
    .setStyle('green') 
    .setLabel('Çekiliş Katılımcısı 🎁') 
    .setID('ÇekilişKatılımcısı');
  
  message.channel.send(`
 Çekiliş Katılımcısı alarak **<a:1940ntro:918813298110103562> nitro, <:1940spo:918813296805683250> spotify, <:1940netflx:918813296105238529> netflix ve benzeri çekilişlere katılıp ödül sahibi** olabilirsiniz.

Aşağıda bulunan butonlardan **Etkinlik Katılımcısı alarak konserlerimizden, oyunlarımızdan, ve etkinliklerimizden** faydalanabilirsiniz.

\`NOT:\` Kayıtlı , kayıtsız olarak hepiniz bu kanalı görebilmektesiniz. Bu sunucumuzda everyone here atılmayacağından dolayı kesinlikle rollerinizi almayı unutmayın.
`, { 
    buttons: [ EtkinlikKatılımcısı, ÇekilişKatılımcısı]
});
});
  
client.on('clickButton', async (button) => {

    if (button.id === 'EtkinlikKatılımcısı') {
        if (button.clicker.member.roles.cache.get((ayarlar.EtkinlikKatılımcısı))) {
            await button.clicker.member.roles.remove((ayarlar.EtkinlikKatılımcısı))
            await button.reply.think(true);
            await button.reply.edit("Etkinlik Katılımcısı rolü başarıyla üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(((ayarlar.EtkinlikKatılımcısı)))
            await button.reply.think(true);
            await button.reply.edit("Etkinlik Katılımcısı rolünü başarıyla aldınız.")
        }
    }


    if (button.id === 'ÇekilişKatılımcısı') {
        if (button.clicker.member.roles.cache.get((ayarlar.ÇekilişKatılımcısı))) {
            await button.clicker.member.roles.remove((ayarlar.ÇekilişKatılımcısı))
            await button.reply.think(true);
            await button.reply.edit(`Çekiliş Katılımcısı rolü başarıyla üzerinizden alındı.`)
        } else {
            await button.clicker.member.roles.add((ayarlar.ÇekilişKatılımcısı))
            await button.reply.think(true);
            await button.reply.edit(`Çekiliş Katılımcısı rolünü başarıyla aldınız.`)
        }

    }
  });


client.on('guildMemberAdd', async(member) => {
    member.roles.add("849339783816675398")
    }) // sunucuya girene oto rol verir.


    client.on("message", msg => {
      if(!db.has(`reklam_${msg.guild.id}`)) return;
             const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
             if (reklam.some(word => msg.content.includes(word))) {
               try {
                 if (!msg.member.hasPermission("BAN_MEMBERS")) {
                       msg.delete();
                         return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Bu sunucuda reklam filtresi etkin.`).setColor('0x800d0d').setAuthor(msg.member.displayName, msg.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
       
      
       msg.delete(3000);                              
      
                 }              
               } catch(err) {
                 console.log(err);
               }
             }
         });