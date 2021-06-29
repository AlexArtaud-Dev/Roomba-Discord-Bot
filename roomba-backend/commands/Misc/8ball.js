const {MESSAGES} = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const eightballImg = new MessageAttachment('./assets/img/8ball.png');

module.exports.run = (client, message, args) =>
{
    message.delete();
    const replies = ["Oui", "Non", "Peut-être"];
    const question = args.join(" ");
    const response = Math.floor(Math.random() * replies.length);

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor("#cb4e41")
        .attachFiles(eightballImg)
        .setThumbnail('attachment://8ball.png')
        .addField(question, replies[response]);
        
    message.channel.send(embed);

};

module.exports.help = MESSAGES.COMMANDS.MISC.EIGHTBALL;
