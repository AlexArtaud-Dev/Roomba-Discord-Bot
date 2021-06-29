const {MESSAGES} = require("../../util/constants");


module.exports.run = async (client, message, args, settings) => {
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
    let user = message.guild.member(message.mentions.users.first());
    if (user && author.hasPermission('ADMINISTRATOR')){
        user.roles.remove(followRole);
        message.reply("Unfollowed")
    }else{
        author.roles.remove(followRole);
        message.reply("Unfollowed")
    }


};
module.exports.help = MESSAGES.COMMANDS.MODERATION.UNFOLLOW;