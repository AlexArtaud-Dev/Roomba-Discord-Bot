const {MESSAGES} = require("../../util/constants");
const  { MessageEmbed , MessageAttachment } = require("discord.js");
const banImg = new MessageAttachment('./assets/img/ban.png');

module.exports.run = (client, message, args, settings) => {
    const user = message.mentions.users.first();
    const reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
    user ? message.guild.member(user).ban(reason) : message.channel.send("L'utilisateur n'existe pas !");
    let logsChannel = client.channels.cache.get(settings.logChannel);

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
        .setColor("#dc143c")
        .setDescription(`**Action**: ban\n**Raison**: ${reason}`)
        .attachFiles(banImg)
        .setThumbnail('attachment://ban.png')
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    message.delete();
    logsChannel.send(embed);

};
module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;