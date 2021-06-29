const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
var fs = require('fs');

module.exports.run = (client, message, args) => {
    message.delete();

    const embed = new MessageEmbed()
        .setTitle(`Dashboard Roomba`)
        .setDescription("Le Dashboard vous permet d'intéragir avec le bot sur une page web et de façon simplifiée")
        .setColor("#2c75ff")
        .addField("Cliquez", `[DASHBOARD](http://roomba.live)`, true);

    message.channel.send(embed);


};
module.exports.help = MESSAGES.COMMANDS.BOTINFOS.DASHBOARD;