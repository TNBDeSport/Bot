const Discord = require('discord.js');
exports.run = (client, message) => {



   let planning = ["",
"**┏╋━━━━━◥◣◆◢◤━━━━━╋┓**",
"        <:TNBD:533366616059281449> **Planning Animation** <:TNBD:533366616059281449>",
"**┗╋━━━━━◥◣◆◢◤━━━━━╋┛**"
"",
"**Mercredi :**",
"   ╠══► 21H",
"   ╠══► Loups Garous",
"",
"**Samedi :**",
"   ╠══► 21H",
"   ╠══► Blind Test (Voix de champions)",
"",
"<:TNBD:533366616059281449>  **𝐓𝐍𝐁𝐃 𝐄𝐒𝐏𝐎𝐑𝐓**  <:TNBD:533366616059281449>"]






    
   
    var embed1 = new Discord.RichEmbed()
    .setColor('199AD0')
    .setDescription(planning)

   
    
    

  message.channel.send(embed1)
};

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'role',
      description: 'Crée le salon #rôle',
      usage: 'role',
      aliase: ['Aucun aliase n\'est disponible pour cette commande.']
    }