const {MESSAGES} = require("../../util/constants");
const Discord = require("discord.js");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const clearImg = new MessageAttachment('./assets/img/bin.png');


module.exports.run = async (client, message, args, settings) => {
   let logsChannel = client.channels.cache.get(settings.logChannel);
   let user = message.guild.member(message.mentions.users.first());

   if(isNaN(args[1])) return message.reply('Votre deuxième argument n\'est pas un nombre !');
 
   if (args[1] < 1 || args[1] > 100) return message.reply('Il faut spécifier un ***nombre*** de message entre 1 et 100 !'); 

    const messages = (await message.channel.messages.fetch({
        limit: 100,
        before: message.id,
    })).filter(a => a.author.id === user.id).array();

    messages.length = Math.min(args[1], messages.length);
    console.log(messages.length);

    if(messages.length === 0 || !user) return message.reply('Aucun message à supprimer pour cet utilisateur (ou cet utilisateur n\'existe pas).')

    if(messages.length === 1) await messages[0].delete();
    else await message.channel.bulkDelete(messages);

    message.delete();


    const embed = new MessageEmbed()
    .setColor("#287db5")
    .setTitle("Cleanup ID")
    .attachFiles(clearImg)
    .setThumbnail('attachment://bin.png')
    .addFields(
        { name : 'Nombre de message supprimés ', value : args[1] || 'all', inline : false},
        { name : 'Nom de l\'utilisateur purgé ', value : args[0] , inline : false},
        { name : 'Nom du channel ', value : message.channel.name, inline : false}
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

    
    logsChannel.send(embed);
}
module.exports.help = MESSAGES.COMMANDS.UTILS.PRUNE;