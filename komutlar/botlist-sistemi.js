const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
  .setTitle("Laury Bot List Sistemi")
  .setColor("RANDOM")
  .addField("**-botlist-ayar botekle-kanal #kanal**", "** <a:yrnex_tiks:798275047047168041> `Bot Ekleme Kanalı Ayarlar!`**",)
  .addField("**-botlist-ayar botlog-kanal #kanal**", "** <a:yrnex_tiks:798275047047168041> `Bot Log Kanalı Ayarlar!`**",)
  .addField("**-botlist-ayar başvurugiden-kanal #kanal**", "** <a:yrnex_tiks:798275047047168041> `Başvuru kanalı Ayarlar!`**",)
  .addField("**-botlist-ayar yetkili @rol**", "** <a:yrnex_tiks:798275047047168041> `Bot List Yetkilisi Ayarlar!`**",)
  .addField("**-bot-onayla**", "** <a:yrnex_tiks:798275047047168041> `Bot Onaylarsınız.`**",)
  .addField("**-bot-reddet**", "** <a:yrnex_tiks:798275047047168041> `Bot Reddedersiniz.`**",)

  
  
  .setFooter('Laury ©️ 2021 Tüm Hakları Saklıdır.')
  .setImage("https://cdn.discordapp.com/attachments/797163310776320001/827545007270789170/standard_2.gif")

  if (!params[0]) {
    const rexuscommand = Array.from(client.commands.keys());
    const longest = rexuscommand.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(rexusyardım);
  } else {
    let rexuscommands = params[0];
    if (client.commands.has(rexuscommands)) {
      rexuscommands = client.commands.get(rexuscommands);
      message.author.send('Laury', `= ${rexuscommands.help.name} = \n${rexuscommands.help.description}\nDoğru kullanım: ` + prefix + `${rexuscommands.help.usage}`);
    }
  }
};

exports.conf = {                             
  enabled: true,                             
  guildOnly: false,
  aliases: ['botlist-sistemi',],
  permLevel: 0
};

exports.help = {
  name: 'botlist-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'botlist-sistemi [komut]'
};