const {MESSAGES} = require("../../util/constants");
const  { MessageEmbed , MessageAttachment } = require("discord.js");
const warnImg = new MessageAttachment('./assets/img/warn.png');


module.exports.run =  async (client, message, args, settings) => {

    const user = message.guild.member(message.mentions.users.first());
    const warnToAdd = parseInt(args[1]);
    const mentionnedUser = await client.getUser(user);
    let warn1 = message.guild.roles.cache.find(r => r.name === 'Warn LVL 1');
    let warn2 = message.guild.roles.cache.find(r => r.name === 'Warn LVL 2');
    let warn3 = message.guild.roles.cache.find(r => r.name === 'Warn LVL 3');


    if(!warn1){
        warn1 = await message.guild.roles.create({
            data: {
                name: 'Warn LVL 1',
                color: '#BB0B0B',
                permissions: []
            }
        });  
    }
    if(!warn2){
        warn2 = await message.guild.roles.create({
            data: {
                name: 'Warn LVL 2',
                color: '#BB0B0B',
                permissions: []
            }
        });  
    }
    if(!warn3){
        warn3 = await message.guild.roles.create({
            data: {
                name: 'Warn LVL 3',
                color: '#BB0B0B',
                permissions: []
            }
        });  
    }


    if(isNaN(warnToAdd)) return message.reply("Il faut entrer un nombre dumbass !");
    
    if(mentionnedUser.warnCount + warnToAdd >= 9 ){
        await user.roles.add(warn3.id);
        await user.roles.remove(warn2.id);
        await user.roles.remove(warn1.id);
    }else{
        if(mentionnedUser.warnCount + warnToAdd >= 6 ){
            await user.roles.add(warn2.id);
            await user.roles.remove(warn3.id);
            await user.roles.remove(warn1.id);
        }else {
            if(mentionnedUser.warnCount + warnToAdd >= 3 ){
                await user.roles.add(warn1.id);
                await user.roles.remove(warn2.id);
                await user.roles.remove(warn3.id);
            }else {
                return;
            }
        }
    }
    
    client.addWarn(client, user, warnToAdd);
    message.channel.send(`${user} s'est mangé ${warnToAdd} warns !`);
    
    let userEmbed = message.guild.member(message.mentions.users.first());
    let logsChannel = client.channels.cache.get(settings.logChannel);

    const embed = new MessageEmbed()
    .setAuthor(`${userEmbed.user.username} (${userEmbed.id})`, user.user.avatarURL())
    .setColor("#287db5")
    .setDescription(`**Action**: Warn (x${warnToAdd})`)
    .attachFiles(warnImg)
    .setThumbnail('attachment://warn.png')
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

    message.delete();
    logsChannel.send(embed);

};
module.exports.help = MESSAGES.COMMANDS.MODERATION.WARN;