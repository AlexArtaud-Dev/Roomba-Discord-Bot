const {MESSAGES} = require("../../util/constants");
const Discord = require("discord.js");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const leaderboardImg = new MessageAttachment('./assets/img/leaderboard.png');
module.exports.run = async (client, message) =>
{
    message.delete();
    const embed = new MessageEmbed()
            .setTitle("Leaderboard (TOP 10)")
            .setColor("#56ff00")
            .attachFiles(leaderboardImg)
            .setThumbnail('attachment://leaderboard.png')
            .setDescription(`Classement des utilisateurs du serveur :`)
            .setTimestamp()
            .setFooter("Experience")
   

    await client.getUsers(message.guild).then(p => {
        p.sort( (a, b) => (a.experience < b.experience) ? 1 : -1).splice(0, 10).forEach(e => {
            embed.addField(e.username, `Niveau : \`${e.level}\` |  Expérience : \`${e.experience}\``);
        });
    });
   
    message.channel.send(embed);
    
    
 
     
   
}
module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.LEADERBOARD;