const Discord = require('discord.js');
// const Pimage = require('../ps.PNG');
exports.run = (client, message) => {

if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 302837596600664065) {

  







    
   
    var embed1 = new Discord.RichEmbed()
    .setColor('199AD0')
    .setImage("https://imgshare.io/image/SKHQd")
   

   
    
    

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
