const {MESSAGES} = require("../../util/constants");
const Discord = require("discord.js");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const experienceImg = new MessageAttachment('./assets/img/exp.png');
module.exports.run = async (client, message, args, settings, dbUser) =>
{
    message.delete();
    const user = message.guild.member(message.mentions.users.first());

    if(args[0]) {
        const mentionnedUser = await client.getUser(user);
        const embed = new MessageEmbed()
        .setTitle("Expérience")
        .setColor("#56ff00")
        .attachFiles(experienceImg)
        .setThumbnail('attachment://exp.png')
        .setDescription(`${user} possède actuellement \`${mentionnedUser.experience}\` points d'expérience.\n Son niveau : \`${mentionnedUser.level}\``)
        message.channel.send(embed);
        
    } else {
        const embed = new MessageEmbed()
        .setTitle("Expérience")
        .setColor("#56ff00")
        .attachFiles(experienceImg)
        .setThumbnail('attachment://exp.png')
        .setDescription(`Vous possédez à l'heure actuelle \`${dbUser.experience}\` points d'expérience.\n Votre niveau : \`${dbUser.level}\` `)
        message.channel.send(embed);
    }

   
     
    
}
module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.USEREXPERIENCE;