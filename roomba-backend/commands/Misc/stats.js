const {MESSAGES} = require("../../util/constants");
const { Presence } = require("discord.js");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const statsImg = new MessageAttachment('./assets/img/stats.png');


module.exports.run = (client, message, args) =>
{
    message.delete();
    message.guild.members.fetch().then(fetchAll => {
        const offline = fetchAll.filter(m => m.presence.status === 'offline');
        const nooffline = fetchAll.size - offline.size;
        const online = fetchAll.filter(m => m.presence.status === 'online');
        const absent = fetchAll.filter(m => m.presence.status === 'idle');
        const dnd = fetchAll.filter(m => m.presence.status === 'dnd');


        const embed = new MessageEmbed()
        .setTitle("Statistiques Serveur")
        .setColor("#ffe500")
        .attachFiles(statsImg)
        .setThumbnail('attachment://stats.png')
        .setDescription(`Nombre de membre total : ${fetchAll.size}\n Connecté(e.s) : ${nooffline}\n Hors-Ligne(s) : ${offline.size}`)
        .addFields(
            { name : 'Présent', value : `🟢  ${online.size}`, inline : true},
            { name : 'NPD', value : `🔴  ${dnd.size}`, inline : true},
            { name : 'Absent', value : ` 🟡  ${absent.size}`, inline : true},
        );

         message.channel.send(embed);

    })
    
}
module.exports.help = MESSAGES.COMMANDS.MISC.STATS;
