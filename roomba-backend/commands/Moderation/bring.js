const {MESSAGES} = require("../../util/constants");


module.exports.run = async (client, message, args, settings) => {
    let user = message.guild.member(message.mentions.users.first());
    let author = message.guild.member(message.author.id);
    message.delete();
    try {
        user.voice.setChannel(author.voice.channelID);
    }catch (error){message.channel.send("Not in a vocal channel");}

};
module.exports.help = MESSAGES.COMMANDS.MODERATION.BRING;