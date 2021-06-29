const {MESSAGES} = require("../../util/constants");


module.exports.run = async (client, message, args, settings) => {
    let user = message.guild.member(message.mentions.users.first());
    let followRole = message.guild.roles.cache.find(r => r.name === 'following');
    let author = message.guild.member(message.author.id);
    message.delete();


    if(!followRole){
        followRole = await message.guild.roles.create({
            data: {
                name: 'following',
                color: '#000',
                permissions: []
            }
        });
}

    try {


        switch (args[1].toLowerCase()) {
            case "bring": {
                user.roles.add(followRole);
                setInterval(function () {
                    try {
                        if (user.roles.cache.has(followRole.id)) {
                            let author = message.guild.member(message.author.id);
                            user.voice.setChannel(author.voice.channelID);
                        } else {
                            clearInterval();
                        }
                    } catch (error) {
                    }
                }, 1000);
                break;
            }
            case "goto": {
                author.roles.add(followRole);
                setInterval(function () {
                    try {
                        if (user.roles.cache.has(followRole.id)) {
                            let user = message.guild.member(message.mentions.users.first());
                            author.voice.setChannel(user.voice.channelID);
                        } else {
                            clearInterval();
                        }
                    } catch (error) {
                    }
                }, 1000);
                break;
            }


        }

    }catch(error){
        message.reply("You got to give the following type parameter to the command ! (goto/bring)")
    }
};
module.exports.help = MESSAGES.COMMANDS.MODERATION.FOLLOW;