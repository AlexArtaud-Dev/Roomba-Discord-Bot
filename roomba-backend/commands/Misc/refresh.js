const {MESSAGES} = require("../../util/constants");


module.exports.run = (client, message, args, settings) => {
    message.delete();
    let memberChannel = client.channels.cache.get(settings.memberCountChannel);
    const membres = message.member.guild.memberCount;


    memberChannel.setName(`NB Membres : ${membres}`)
    .then(newChannel => console.log(`Nouveau nom : ${newChannel.name}`))
    .catch(console.error);


};

module.exports.help = MESSAGES.COMMANDS.MISC.REFRESH;
