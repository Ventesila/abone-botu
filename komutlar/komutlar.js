const Discord = require('discord.js')
let z = `!`
exports.run = function(client, message, args) {
let yardim = new Discord.MessageEmbed()
.setTitle("Abone Botu | Komut Listesi")
.setColor("RANDOM")
.addField("__💰  Ekonomi__",`
**\`${z}yardım ekonomi\`** - *Ekonomi komutları hakkında bilgi edinin!*

\`${z}a\`, \`${z}abonerol\`, \`${z}abonelog\`, \`${z}komutlar\`, \`${z}aboneyetkili\`,
`)

  if(!args[0]) return message.channel.send(yardim) 
};


exports.conf = {
    enabled: true, 
    aliases: ["yardim","help",'komutlar','commands'],
  };
  
  exports.help = {
    name: 'yardım'
  };
