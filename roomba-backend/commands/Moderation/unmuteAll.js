const {MESSAGES} = require("../../util/constants");
const ms = require("ms")
module.exports.run = async (client, message, args) => {
    let users = message.guild.members.cache;
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

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



    const messageID = await message.channel.send(`Tout le monde est demute.`).then(data =>
    {
        return data;
    })
        users.forEach( (user)  => {
            user.roles.remove(muteRole.id);
        });

};
module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTEALL;