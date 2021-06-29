const {MESSAGES} = require("../../util/constants");
const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {
    
// 🟥 🟦 🟩

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor("#ad14da")
        .setDescription(args.join(" "))
        .addField("Répondre à la question ci-dessus à l'aide d'une des réactions:",
        `
        🟩 - Pour (Oui)
        🟦 - Neutre
        🟥 - Contre (Non)
        `   
        )
        .setTimestamp()
        .setFooter("Date")
    
    message.delete();  
    const poll = await message.channel.send(embed);
    await poll.react("🟩");
    await poll.react("🟦");
    await poll.react("🟥");

};

module.exports.help = MESSAGES.COMMANDS.MISC.POLL;
