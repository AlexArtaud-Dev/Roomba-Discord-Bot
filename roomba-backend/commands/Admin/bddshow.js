const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const varImg = new MessageAttachment('./assets/img/var.png');
 
module.exports.run = async (client, message, args, settings) => {
    message.delete();
    const embed = new MessageEmbed()
        .setTitle("Liste variables BDD :")
        .setColor("#79d83a")
        .attachFiles(varImg)
        .setThumbnail('attachment://var.png')
        .addFields(
            { name: 'prefix', value: (settings.prefix === "") ? "null" : settings.prefix, inline: false},
            { name: 'accesChannel', value: (settings.accesChannel === "") ? "null" : settings.accesChannel, inline: false},
            { name: 'auditlogChannel', value: (settings.auditlogChannel === "") ? "null" : settings.auditlogChannel, inline: false},
            { name: 'logChannel', value: (settings.logChannel === "") ? "null" : settings.logChannel, inline: false},
            { name: 'memberCountChannel', value: (settings.memberCountChannel === "") ? "null" : settings.memberCountChannel, inline: false},
            { name: 'musicChannel', value: (settings.musicChannel === "") ? "null" : settings.musicChannel, inline: false},
            { name: 'reportChannel', value: (settings.reportChannel === "") ? "null" : settings.reportChannel, inline: false},
            { name: 'roleChannel', value: (settings.roleChannel === "") ? "null" : settings.roleChannel, inline: false},
            { name: 'welcomeChannel', value: (settings.welcomeChannel === "") ? "null" : settings.welcomeChannel, inline: false},
            { name: 'welcomeMessage', value: (settings.welcomeMessage === "") ? "null" : settings.welcomeMessage, inline: false}
                
        );

       message.channel.send(embed);
      
};
 
module.exports.help = MESSAGES.COMMANDS.ADMIN.BDDSHOW;