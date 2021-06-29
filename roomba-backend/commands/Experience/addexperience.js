const {MESSAGES} = require("../../util/constants");
const Discord = require("discord.js");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const addexpImg = new MessageAttachment('./assets/img/addexp.png');
module.exports.run = (client, message, args) => {
    message.delete();
    const user = message.guild.member(message.mentions.users.first());
    const expToAdd = parseInt(args[1]);

    if(isNaN(expToAdd)) return message.reply("Il faut entrer un nombre dumbass !");
    client.addExp(client, user, expToAdd);
  //  message.channel.send(`Vous avez ajouté avec succès ${expToAdd} points d'expérience à l'utilisateur ${user} !`)

    const embed = new MessageEmbed()
            .setTitle("Ajout Expérience")
            .setColor("#56ff00")
            .attachFiles(addexpImg)
            .setThumbnail('attachment://addexp.png')
            .setDescription(`${expToAdd} pour Nintendor !`)
     
   message.channel.send(embed);
}
module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.ADDEXPERIENCE;