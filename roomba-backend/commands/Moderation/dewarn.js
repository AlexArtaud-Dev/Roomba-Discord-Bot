const {MESSAGES} = require("../../util/constants");
const  { MessageEmbed , MessageAttachment } = require("discord.js");
const warnImg = new MessageAttachment('./assets/img/warn.png');


module.exports.run =  async (client, message, args, settings) => {

    const user = message.guild.member(message.mentions.users.first());
    const warnToRemove = parseInt(args[1]);
    const mentionnedUser = await client.getUser(user);

    let warn1 = message.guild.roles.cache.find(r => r.name === 'Warn LVL 1');
    let warn2 = message.guild.roles.cache.find(r => r.name === 'Warn LVL 2');
    let warn3 = message.guild.roles.cache.find(r => r.name === 'Warn LVL 3');



    if(mentionnedUser.warnCount - warnToRemove < 3 ){
        await user.roles.remove(warn1.id);
        await user.roles.remove(warn2.id);
        await user.roles.remove(warn3.id);
    }else {
        if(mentionnedUser.warnCount - warnToRemove < 6 ){
            await user.roles.add(warn1.id);
            await user.roles.remove(warn3.id);
            await user.roles.remove(warn1.id);
        }else {
            if(mentionnedUser.warnCount - warnToRemove < 9 ){
                await user.roles.add(warn2.id);
                await user.roles.remove(warn3.id);
                await user.roles.remove(warn1.id);
            }else {
                return;
            }
        }
    }





    if(isNaN(warnToRemove)) return message.reply("Il faut entrer un nombre dumbass !");
    
 

    if(mentionnedUser.warnCount <= 0) {
        message.channel.send("Cet utilisateur n'a aucun warn !");
    }else {
        client.removeWarn(client, user, warnToRemove);
        message.channel.send(`${user} s'est vu retirer ${warnToRemove} warns !`);
        
        let userEmbed = message.guild.member(message.mentions.users.first());
        let logsChannel = client.channels.cache.get(settings.logChannel);

        const embed = new MessageEmbed()
        .setAuthor(`${userEmbed.user.username} (${userEmbed.id})`, user.user.avatarURL())
        .setColor("#287db5")
        .setDescription(`**Action**: De-Warn (x${warnToRemove})`)
        .attachFiles(warnImg)
        .setThumbnail('attachment://warn.png')
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

        message.delete();
        logsChannel.send(embed);
    }
};
module.exports.help = MESSAGES.COMMANDS.MODERATION.DEWARN;