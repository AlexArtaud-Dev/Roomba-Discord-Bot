const {MESSAGES} = require("../../util/constants");
const  { MessageEmbed , MessageAttachment } = require("discord.js");
const unbanImg = new MessageAttachment('./assets/img/unban.png');

module.exports.run = async (client, message, args, settings) => {
    const user = await client.users.fetch(args[0]);
    let logsChannel = client.channels.cache.get(settings.logChannel);

    if(!user) return message.reply("L'utilisateur n'existe pas.");
    message.guild.members.unban(user);

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
        .setColor("#35f092")
        .setDescription(`**Action**: unban\n**ID**: ${args[0]}`)
        .attachFiles(unbanImg)
        .setThumbnail('attachment://unban.png')
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    message.delete();
    logsChannel.send(embed);


};
module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;