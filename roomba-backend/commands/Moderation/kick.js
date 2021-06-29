const {MESSAGES} = require("../../util/constants");
const  { MessageEmbed , MessageAttachment } = require("discord.js");
const kickImg = new MessageAttachment('./assets/img/kick.png');

module.exports.run = (client, message, args, settings) => {
    const user = message.mentions.users.first();
    const reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
    user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas !");
    let logsChannel = client.channels.cache.get(settings.logChannel);

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
        .setColor("#ffa500")
        .setDescription(`**Action**: kick\n**Raison**: ${reason}`)
        .attachFiles(kickImg)
        .setThumbnail('attachment://kick.png')
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());
        
    message.delete();
    logsChannel.send(embed);


};
module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;