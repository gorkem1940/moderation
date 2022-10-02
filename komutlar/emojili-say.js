const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["850053601941258342"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "850053601585266730"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
  '0': `<a:say0_:842169208048844810>`,
  '1': `<a:say1_:842169215330287626>`,
  '2': `<a:say2_:842169220543545424>`,
  '3': `<a:say3_:842169220216520714>`,
  '4': `<a:say4_:842169219759341610>`,                       
  '5': `<a:say5_:842169220514840597>`,
  '6': `<a:say6_:842169220783276093>`,
  '7': `<a:say7_:842169220304732211>`,
  '8': `<a:say8_:842169529416417300>`,
  '9': `<a:say9_:842169529894830111>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
  '0': `<a:say0_:842169208048844810>`,
  '1': `<a:say1_:842169215330287626>`,
  '2': `<a:say2_:842169220543545424>`,
  '3': `<a:say3_:842169220216520714>`,
  '4': `<a:say4_:842169219759341610>`,                       
  '5': `<a:say5_:842169220514840597>`,
  '6': `<a:say6_:842169220783276093>`,
  '7': `<a:say7_:842169220304732211>`,
  '8': `<a:say8_:842169529416417300>`,
  '9': `<a:say9_:842169529894830111>`}[d];})}

var taglılar = 0;
let tag = "Sênpâî";
let tag2 ="先"
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag2)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
  '0': `<a:say0_:842169208048844810>`,
  '1': `<a:say1_:842169215330287626>`,
  '2': `<a:say2_:842169220543545424>`,
  '3': `<a:say3_:842169220216520714>`,
  '4': `<a:say4_:842169219759341610>`,                       
  '5': `<a:say5_:842169220514840597>`,
  '6': `<a:say6_:842169220783276093>`,
  '7': `<a:say7_:842169220304732211>`,
  '8': `<a:say8_:842169529416417300>`,
  '9': `<a:say9_:842169529894830111>`}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
  '0': `<a:say0_:842169208048844810>`,
  '1': `<a:say1_:842169215330287626>`,
  '2': `<a:say2_:842169220543545424>`,
  '3': `<a:say3_:842169220216520714>`,
  '4': `<a:say4_:842169219759341610>`,                       
  '5': `<a:say5_:842169220514840597>`,
  '6': `<a:say6_:842169220783276093>`,
  '7': `<a:say7_:842169220304732211>`,
  '8': `<a:say8_:842169529416417300>`,
  '9': `<a:say9_:842169529894830111>`}[d];})}

  
  
  
var booster = message.guild.roles.cache.get("850365911914512466").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
  '0': `<a:say0_:842169208048844810>`,
  '1': `<a:say1_:842169215330287626>`,
  '2': `<a:say2_:842169220543545424>`,
  '3': `<a:say3_:842169220216520714>`,
  '4': `<a:say4_:842169219759341610>`,                       
  '5': `<a:say5_:842169220514840597>`,
  '6': `<a:say6_:842169220783276093>`,
  '7': `<a:say7_:842169220304732211>`,
  '8': `<a:say8_:842169529416417300>`,
  '9': `<a:say9_:842169529894830111>`}[d];})}


  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.** 
**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.** 
**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}