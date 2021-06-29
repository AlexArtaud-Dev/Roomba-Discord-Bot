const {MESSAGES} = require("../../util/constants");
const  { MessageEmbed , MessageAttachment } = require("discord.js");
const warnImg = new MessageAttachment('./assets/img/warn.png');


module.exports.run =  async (client, message, args, settings) => {

    const user = message.guild.member(message.mentions.users.first());
    const mentionnedUser = await client.getUser(user);
        
        let userEmbed = message.guild.member(message.mentions.users.first());
       
        const embed = new MessageEmbed()
        .setAuthor(`${userEmbed.user.username} (${userEmbed.id})`, user.user.avatarURL())
        .setColor("#287db5")
        .setDescription(`**Vous avez à l'heure actuelle :** \n ${mentionnedUser.warnCount} warn(s)`)
        .attachFiles(warnImg)
        .setThumbnail('attachment://warn.png')
        .setTimestamp()

        message.delete();
        message.channel.send(embed);
    
};
module.exports.help = MESSAGES.COMMANDS.MODERATION.WARNLIST;