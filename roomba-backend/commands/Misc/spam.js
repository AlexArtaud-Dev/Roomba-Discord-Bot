const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const spamImg = new MessageAttachment('./assets/img/spam.jpg');

module.exports.run = (client, message, args) => {

    let member = message.member;
    if (args[0]) member = message.guild.member(message.mentions.users.first());
    let user = member.user;



    const embed = new MessageEmbed()
        .setColor("#00e8ff")
        .setTitle("SPAM")
        .setDescription(`TA MERE LA REINE DES PUTES ${message.author.username}`)
        .attachFiles(spamImg)
        .setThumbnail('attachment://spam.jpg');

    if (message.author.id === "259741670323650571") {
        try {
            var interval = setInterval(() =>
            {
                user.send(embed);
            }, 5000);
        } catch (error) {
            clearInterval(interval);
        }
        

    } else {
        message.delete();
        message.reply("Vous n'avez pas les permissions d'emmerder cette personne !")
    }




};

module.exports.help = MESSAGES.COMMANDS.MISC.SPAM;