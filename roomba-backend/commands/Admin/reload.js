const { MESSAGES } = require("../../util/constants");
const fs = require('fs');

module.exports.run = async(client, message, args, settings) => {
    message.delete();
    const creatorID = "259741670323650571";

    if (message.author.id === creatorID) {
        let logsChannel = client.channels.cache.get(settings.logChannel);
        await message.delete();
        await logsChannel.send("Le bot redémarre...");
        process.exit();
    } else {
        message.author.send("Vous n'êtes pas mon créateur, je ne peux vous laisser me redémarrer !")
    }

};

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;