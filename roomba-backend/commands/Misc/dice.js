const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/dice.png');
const randomeDice = () => Math.floor(Math.random() * 6) + 1;

module.exports.run = (client, message, args) =>
{
    message.delete();
    const embed = new MessageEmbed()
        .setColor('#ac2d51')
        .setTitle(`Lancement des dés`)
        .attachFiles(diceImg)
        .setThumbnail('attachment://dice.png')
        .addFields({ name: 'Dés #1', value: randomeDice(), inline: true }, { name: 'Dés #2', value: randomeDice(), inline: true }, { name: 'Dés #3', value: randomeDice(), inline: true }, { name: 'Dés #4', value: randomeDice(), inline: true }, { name: 'Dés #5', value: randomeDice(), inline: true }, { name: 'Dés #6', value: randomeDice(), inline: true }, );
    embed.addField("Total", embed.fields.reduce((total, obj) => parseInt(obj.value) + total, 0), true)
    message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.DICE;