const {MESSAGES} = require("../../util/constants");
const Discord = require("discord.js");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const rmexpImg = new MessageAttachment('./assets/img/rmexp.png');
module.exports.run = (client, message, args) => {
    message.delete();
    const user = message.guild.member(message.mentions.users.first());
    const expToRemove = parseInt(args[1]);

    if(isNaN(expToRemove)) return message.reply("Il faut entrer un nombre dumbass !");
    client.removeExp(client, user, expToRemove);
    //message.channel.send(`Vous avez ajouté avec succès ${expToRemove} points d'expérience à l'utilisateur ${user} !`)



    const embed = new MessageEmbed()
    .setTitle("Suppression Expérience")
    .setColor("#56ff00")
    .attachFiles(rmexpImg)
    .setThumbnail('attachment://rmexp.png')
    .setDescription(`Dit aurevoir a tes ${expToRemove} points !`)

message.channel.send(embed);
}
module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.REMOVEEXPERIENCE;