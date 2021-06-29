const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings) =>
{
    const bool = settings.banWordListActivation;
    message.delete();

    switch (bool) {
        case true: {
            await client.updateGuild(message.guild, { banWordListActivation: false });
            message.channel.send("Ban Word List Disabled !");
            break;
           
        }
        case false: {
            await client.updateGuild(message.guild, { banWordListActivation: true });
                message.channel.send("Ban Word List Enabled !");
            break;
        }

    }
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.BANWORD;