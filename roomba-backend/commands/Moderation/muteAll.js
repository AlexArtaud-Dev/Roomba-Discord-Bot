const {MESSAGES} = require("../../util/constants");
const ms = require("ms")
module.exports.run = async (client, message, args) => {
    let users = message.guild.members.cache;
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
    let muteTime = (args[0] || '60s');

    message.delete();

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


    users.forEach((user)  => {
        user.roles.add(muteRole.id);
    })

    const messageID = await message.channel.send(`Tout le monde est muté pour ${ms(ms(muteTime))}.`).then(data =>
    {
        return data;
    })

    setTimeout(() =>{
        try{
            users.forEach( (user)  => {
                user.roles.remove(muteRole.id);
            })
        }catch (error){}
        messageID.delete();
    },ms(muteTime));


};
module.exports.help = MESSAGES.COMMANDS.MODERATION.MUTEALL;