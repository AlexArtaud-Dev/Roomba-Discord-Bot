const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");



module.exports.run = (client, message, args) => {
    const guild = message.guild;

    const embed = new MessageEmbed()
        .setColor("#C016FF")
        .setThumbnail(guild.iconURL())
        .addField(`Plus d'information sur le serveur`,
            `
            ● Nom : \`${guild.name}\`
            ● ID : \`${guild.id}\`
            ● Région : \`${guild.region}\`
            ● Crée le : \`${moment(guild.createdAt).format('DD/MM/YYYY')}\`

            ● Owner : \`${guild.owner.user.tag}\`
            ● OwnerID : \`${guild.ownerID}\`
            
            ● Nombre Membre : \`${guild.memberCount -1}\`
            ● Roles : \`${guild.roles.cache.size}\`
            ● Salons Textuels : \`${guild.channels.cache.filter(ch => ch.type === "text").size}\`
            ● Salons Vocaux : \`${guild.channels.cache.filter(ch => ch.type === "voice").size}\`
            `
        );

    message.delete();
    message.channel.send(embed);


}
module.exports.help = MESSAGES.COMMANDS.MISC.SERVERINFO;