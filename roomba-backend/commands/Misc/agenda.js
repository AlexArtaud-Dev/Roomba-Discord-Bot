const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const fs = require("fs");


module.exports.run = (client, message, args) => {
    // message.delete();
    // fs.readFile(`dashboard/url/url.txt`, 'utf8', function(err, data) {
    //     if (err) throw err;
    //     const link = data;
    //     const embed = new MessageEmbed()
    //         .setTitle(`Agenda S2D`)
    //         .setDescription("Voici un lien direct vers l'agenda des S2D")
    //         .setColor("#2c75ff")
    //         .addField("Cliquez", `[AGENDA](${link}/agenda)`, true);
    //
    //     message.channel.bulkDelete(1);
    //     message.channel.send(embed);
    // });
}

module.exports.help = MESSAGES.COMMANDS.MISC.AGENDA;