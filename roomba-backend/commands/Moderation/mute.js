const {MESSAGES} = require("../../util/constants");
const  { MessageEmbed , MessageAttachment } = require("discord.js");
const muteImg = new MessageAttachment('./assets/img/mute.png');
const ms = require("ms")
module.exports.run = async (client, message, args, settings) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
    let muteTime = (args[1] || '60s');
    let logsChannel = client.channels.cache.get(settings.logChannel);


    if(!muteRole){
        muteRole = await message.guild.roles.create({
            data: {
                name: 'muted',
                color: '#000',
                permissions: []
            }
        });

        message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(muteRole, {
                SEND_MESSAGES : false,
                ADD_REACTIONS : false,
                CONNECT: false
            });
        });   
    }


    await user.roles.add(muteRole.id);
    message.channel.send(`<@${user.id}> est muté pour ${ms(ms(muteTime))}.`);

    setTimeout(() =>{
        user.roles.remove(muteRole.id);
    },ms(muteTime));

    const embed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
    .setColor("#287db5")
    .setDescription(`**Action**: mute\n**Temps**: ${ms(ms(muteTime))}`)
    .attachFiles(muteImg)
    .setThumbnail('attachment://mute.png')
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
    
    message.delete();
    logsChannel.send(embed);

};
module.exports.help = MESSAGES.COMMANDS.MODERATION.MUTE;