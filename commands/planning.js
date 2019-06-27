const Discord = require('discord.js');
// const Pimage = require('../ps.PNG');
exports.run = (client, message) => {

if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 302837596600664065) {

  
let planning = ["**┏╋━━━━━◥◣◆◢◤━━━━━╋┓**",
"              <:TNBD:533366616059281449> **Planning Animation** <:TNBD:533366616059281449>",
"**┗╋━━━━━◥◣◆◢◤━━━━━╋┛**",
" "]






    
   
    var embed1 = new Discord.RichEmbed()
    .setColor('199AD0')
    .setImage("https://imge.to/i/g6RZC")
    .setDescription(planning)

   
    
    

  message.channel.send(embed1)
   };
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'planning',
      description: 'Crée le planning',
      usage: 'planning',
      aliase: ['Aucun aliase n\'est disponible pour cette commande.']
    }
