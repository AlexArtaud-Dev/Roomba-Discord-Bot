const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const { PNGStream } = require("canvas");



module.exports.run = (client, message, args) => {

        let member = message.member;
        if (args[0]) member = message.guild.member(message.mentions.users.first());
        let user = member.user;

        const embed = new MessageEmbed()
            .setColor("#CCE0B4")
            .setThumbnail(user.displayAvatarURL())
            .addField(`Plus d'informations à propos de **${user.username}**`,
                `● Nom : \`${user.tag}\`
            ● Bot : \`${user.bot ? 'true' : 'false'}\`
            ● Crée le : \`${moment(user.createdAt).format('DD/MM/YYYY | hh.mm')}\`
            ● Statut : \`${user.presence.status.toUpperCase()}\`
            ● Image Profil : ${user.avatarURL({format: 'png', dynamic: 'true'})}

            L'utilisateur **${user.username}** ${member.nickname === undefined ? '' : `aka **${member.nickname}**`} a rejoint le \`${moment(message.member.joinedAt).format('DD/MM/YYYY | hh.mm')}\` et possède les rôles suivants : ${member.roles.cache.map(roles => `\`${roles.name}\``).toString().replace(',`@everyone`', '')}.
            `    
        );
    message.delete();
    message.channel.send(embed);

    
}
module.exports.help = MESSAGES.COMMANDS.MISC.USERINFO;