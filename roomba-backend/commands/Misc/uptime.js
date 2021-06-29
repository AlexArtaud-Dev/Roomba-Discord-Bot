const {MESSAGES} = require("../../util/constants");
const Discord = require("discord.js");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const clockImg = new MessageAttachment('./assets/img/clock.png');

module.exports.run = (client, message, args) => {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    const embed = new MessageEmbed()
    .setColor("#00e8ff")
    .setTitle("Uptime")
    .attachFiles(clockImg)
    .setThumbnail('attachment://clock.png')
    .addFields(
        { name : 'Jours ', value : days, inline : true},
        { name : 'Heures ', value : hours, inline : true},
        { name : 'Minutes ', value : minutes, inline : true},
        { name : 'Secondes ', value : seconds, inline : true}
    );

    
   
    message.delete()
    message.channel.send(embed);

}

module.exports.help = MESSAGES.COMMANDS.MISC.UPTIME;