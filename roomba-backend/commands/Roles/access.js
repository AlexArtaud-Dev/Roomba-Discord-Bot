const {MESSAGES} = require("../../util/constants");
const  { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, settings) =>
{
    message.delete();
    let accesChannel = client.channels.cache.get(settings.accesChannel);
    const arg = args.join(" ").split(' | ');



    if (settings.accesChannel === "null" || settings.accesChannel === "" || settings.accesChannel === null) {
        message.reply("Vous devez d'abord configurer le channel d'accès (\"accesChannel\") \n ● Depuis le dashboard : http://roomba.live \n ● Ou avec la commande : " + `\`${settings.prefix}config\``);
    } else {
        if (arg[0] === "") {
            if (settings.defaultRole === undefined || settings.defaultRole === null || settings.defaultRole === "null" || settings.defaultRole === "") {
                message.channel.send(`**Les paramètre actuels sont :** \n ● AccesChannel : \`${settings.accesChannel}\` \n ● DefaultRole a définir sur http://roomba.live ou avec la commande : \`${settings.prefix}config\`` + "\n **Pour mettre une emote custom sur l'embed : ** \n ● Mettez un \\ avant l'emote dans le chat puis envoyez le message \n ● Copiez alors les chiffres de l'emoji et placez les dans l'argument emoji de la commande.")
            } else {
                message.channel.send(`**Les paramètre actuels sont :** \n ● AccesChannel : \`${settings.accesChannel}\` \n ● DefaultRole : \`${settings.defaultRole}\`` + "\n **Pour mettre une emote custom sur l'embed : ** \n ● Mettez un \\ avant l'emote dans le chat puis envoyez le message \n ● Copiez alors les chiffres de l'emoji et placez les dans l'argument emoji de la commande.")
            }
            return;
        } else {
            const embed = new MessageEmbed()
                .setTitle(arg[0])
                .setDescription(arg[1])
                .setColor(arg[2])

            accesChannel.send(embed).then(async msg =>
            {
                if (!isNaN(arg[3])) {
                    const customEmojis = message.guild.emojis.cache.get(arg[3]);
                    await msg.react(customEmojis);
                    await client.updateGuild(message.guild, { accessEmote: arg[3] });
                } else {
                    await msg.react(arg[3]);
                    await client.updateGuild(message.guild, { accessEmote: arg[3] });
                }
            })
        }

    }
};
module.exports.help = MESSAGES.COMMANDS.ROLES.ACCESS;