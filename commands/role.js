const Discord = require('discord.js');
exports.run = (client, message) => {



   let p3 = [" Pour la section <@&488084969499918347>, nous vous mettons à disposition __les rôles des ranks ainsi que ceux des postes.__",
"",
"**__Les Ranks :__**",
"  ",
"",
"►  <:Challenger:587387967379603457> => <@&544134165394751498>",
"►  <:GrandMaster:587387867853094916> => <@&544134120721088526>",
"►  <:Master:587387833870843922> => <@&544133722526449665>",
"►  <:Diamond:587387659786125312> => <@&544133870514077716>",
"►  <:Platine:587387620456267816> => <@&544133685683683338>",
"►  <:Gold:587387586771812374> => <@&544133650221105162>",
"►  <:Silver:587387478483271805>  => <@&544133603492233226>",
"►  <:Bronze:587387469800931373> => <@&544133550048542740>",
"►  <:Iron:587387292386328588> => <@&544133256392605717>",
" ",
"**__Les Postes :__**",
" ",
"►  <:Top:544136245576597505> => <@&544136616919433227>",
"►  <:Jungle:544136220100263938> => <@&544136660732870656>",
"►  <:Mid:544136196281073667> => <@&544136696027938832>",
"►  <:Adc:544136146834292776> => <@&544136732082438164>",
"►  <:Support:544136064252772372> => <@&544136774004244530>"]


    let p2 = ["**__Les jeux et rôles divers :__**",
" ",
"► <:LOL:506404910691254274> => <@&488084969499918347>",
"► <:Fortnite:506405195412930560> => <@&488085662613110784>",
"► <:R6S:581206876709191680> => <@&581207422451056640>",
"► <:CSgo:563796110662172692> => <@&556555194851131394>",
"► <:SoireeTNBD:587388382905368597> => <@&523207561655091200>",
"► <:18:506404649255960586> => <@&456535255172513793> **ans** *(pour voir la moyenne d'âge de notre communauté)*",
"► <:182:506404710782074880> => <@&456535515420819456> **ans** *(pour voir la moyenne d'âge de notre communauté)*"]




    var embed2 = new Discord.RichEmbed()
    .setColor('199AD0')
    .setDescription(p2)
   
    var embed1 = new Discord.RichEmbed()
    .setColor('199AD0')
    .setDescription(`Attribuez vous les **rôles**, ce qui vous permettras l'accès aux différents salons vocaux et textuels ! :smiley: 
Il suffit de **cliquer** sur les **icônes** ci-dessous selon le jeux/rang souhaité, et le **rôle** vous sera automatiquement ajouté.
Si vous souhaitez le retirer, il vous suffira de **cliquer** à nouveau sur l'icône !`)

    var embed3 = new Discord.RichEmbed()
    .setColor('199AD0')
    .setDescription(p3)
    
    

  message.channel.send(embed1).then(Message => {
   setTimeout(() => { message.channel.send(" ", {files: ["https://media.discordapp.net/attachments/554002116553998336/587395138267906048/TNBD_gif_esport_barre.gif"]}); ; }, 3000);
   setTimeout(() => { message.channel.send(embed2); }, 15000);
   setTimeout(() => { message.channel.send(" ", {files: ["https://media.discordapp.net/attachments/554002116553998336/587395138267906048/TNBD_gif_esport_barre.gif"]}); ; }, 20000);
   setTimeout(() => { message.channel.send(embed3); }, 30000);


});
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