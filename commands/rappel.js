const Discord = require('discord.js');
exports.run = (client, message, args) => {
message.delete()

    const embed = new Discord.RichEmbed()

        .setColor("199AD0")
      .setTitle("⏰ | t!rappel <message>")
      .setDescription(` __Rappel :__ ${args.join(' ')}`)
     .setFooter(message.author, 'https://cdn.discordapp.com/emojis/533366616059281449.png?v=1')


    message.channel.send(embed);

};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['rmd'],
      permLevel: 0
    };

    exports.help = {
      name: 'rappel',
      description: 'Envoi un rappel dans le salon',
      usage: 'rappel <message>',
      aliase: ['rmd']
}
