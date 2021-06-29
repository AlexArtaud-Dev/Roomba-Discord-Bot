const {MESSAGES} = require("../../util/constants");
const  { MessageEmbed } = require("discord.js");

const isFirstCharNumeric = c => /\d/.test(c);

module.exports.run = (client, message, args, settings) => {
    let reportChannel = client.channels.cache.get(settings.reportChannel);
    const user = message.mentions.users.first();
    let reason = args[1];

    if(!reason) return message.reply("Indiquez une raison!")

    const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setThumbnail(user.displayAvatarURL())
        .addFields(
            { name: "Reporté", value : user.username, inline: true},
            { name: "Lien du message", value : isFirstCharNumeric(reason.charAt(0)) ? `[Click Me!](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${args[1]})` : 'Aucun lien précisé', inline: true},
            { name: "Raison", value : isFirstCharNumeric(reason.charAt(0)) ? args.slice(args.indexOf(args[2])).join(" ") : args.slice(args.indexOf(args[1])).join(" ")}
        )
        .setTimestamp();

        message.channel.bulkDelete(1);
        reportChannel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.REPORT;