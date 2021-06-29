const {MESSAGES} = require("../../util/constants");
const Discord = require("discord.js");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const clearImg = new MessageAttachment('./assets/img/bin.png');

module.exports.run = (client, message, args, settings) => {
  
   if(isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.delete(), message.reply('Il faut spécifier un ***nombre*** de message entre 1 et 100!') 
   let logsChannel = client.channels.cache.get(settings.logChannel);

    const embed = new MessageEmbed()
    .setColor("#287db5")
    .setTitle("Cleanup")
    .attachFiles(clearImg)
    .setThumbnail('attachment://bin.png')
    .addFields(
        { name : 'Nombre de message supprimés ', value : args[0], inline : false},
        { name : 'Nom du channel ', value : message.channel.name, inline : false}
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

    
    message.channel.bulkDelete(args[0]);
    logsChannel.send(embed);
}
module.exports.help = MESSAGES.COMMANDS.UTILS.CLEAR;