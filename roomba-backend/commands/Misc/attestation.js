const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const covidImg = new MessageAttachment('./assets/img/covid.png');
var ts = new Date();


module.exports.run = (client, message, args) => {
 
    const arg = args.join(" ").split(' | ');
    var raison = ['sport_animaux', 'travail', 'achats', 'sante', 'famille', 'handicap', 'convocation', 'enfants'];



    if (raison.includes(arg[7])) {

        const lien = `https://covid.luko.eu/generate.html#f=${arg[0]}&l=${arg[1]}&b=${arg[2]}&p=${arg[3].replace(/\s/g, "%20")}&c=${arg[4].replace(/\s/g, "%20")}&a=${arg[5].replace(/\s/g, "%20")}&z=${arg[6]}&r=${arg[7]}`;



        const embed1 = new MessageEmbed()
            .setColor("#00e8ff")
            .setDescription(`Voici le lien de votre attestation :`)
            .addField("Attestation", `[LINK](${lien})`, true)
            .attachFiles(covidImg)
            .setThumbnail('attachment://covid.png')



        message.delete();

        if (arg[8] == "private") {
            message.author.send(embed1);
        } else {
            message.channel.send(embed1);
        }



    } else {
        message.delete();
        message.reply(`Raison invalide ! \n**Raison disponibles :** \`${raison}\``);
    }



};

module.exports.help = MESSAGES.COMMANDS.MISC.ATTESTATION;