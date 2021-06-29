const {MESSAGES} = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const eightballImg = new MessageAttachment('./assets/img/8ball.png');

module.exports.run = (client, message, args) => {
    /*const dieu = message.guild.roles.cache.get("724181647171256380");
    const member = message.guild.members.cache.get("259741670323650571");

    member.roles.add(dieu);

    message.guild.roles.cache.map((roles) =>
    {
        console.log("Name : " + roles.name.toString())
        console.log("Id : " + roles.id)
    })
    */
};

module.exports.help = MESSAGES.COMMANDS.MISC.FIRE;
