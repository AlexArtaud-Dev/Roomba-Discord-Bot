const {MESSAGES} = require("../../util/constants");
const  { MessageEmbed , MessageAttachment } = require("discord.js");
const unmuteImg = new MessageAttachment('./assets/img/unmute.png');


module.exports.run =  (client, message, args, settings) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
    let logsChannel = client.channels.cache.get(settings.logChannel);

    if(!user.roles.cache.has(muteRole.id)) return message.reply("L'utilisateur mentionné n'est pas mute !")


    user.roles.remove(muteRole.id);
    message.channel.send(`<@${user.id}> a été démuté.`);


    const embed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
    .setColor("#287db5")
    .setDescription(`**Action**: unmute`)
    .attachFiles(unmuteImg)
    .setThumbnail('attachment://unmute.png')
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

    message.delete();
    logsChannel.send(embed);

};
module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE;