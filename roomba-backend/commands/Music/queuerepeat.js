const {MESSAGES} = require("../../util/constants");


module.exports.run = async (client, message, args, settings) => {
    let channelID = message.channel.id;
    let musicChannelID = settings.musicChannel;
    let musicChannel = client.channels.cache.get(settings.musicChannel);
    
    const voiceChannel = message.member.voice.channel;
    const musicPlayer = client.musicPlayer.get(message.guild.id);
    
    


    if (channelID === musicChannelID) {
    

        if (!(musicPlayer && voiceChannel) && (musicPlayer.voiceChannel.id === voiceChannel.id)) 
            message.channel.send("Veuillez rejoindre le même salon que le bot !"), 
            setTimeout(function(){ message.channel.bulkDelete(1) }, 2000);

        if (musicPlayer.queueRepeat === false) {
            musicPlayer.setQueueRepeat(true);
            musicChannel.send(`***Queue mis en boucle !***`)
            message.channel.bulkDelete(1)
            
        } else {
            if (musicPlayer.queueRepeat) musicPlayer.setQueueRepeat(false);
            message.channel.bulkDelete(1)
            musicChannel.send(`***Arrêt de la mise en boucle de la queue !***`)
            
        }

            

            





    } else{
        message.reply("Vous devez être dans le channel musique pour effectuer cette commande !")
        setTimeout(function(){ message.channel.bulkDelete(1) }, 2000);
  
    };


};
module.exports.help = MESSAGES.COMMANDS.MUSIC.QUEUEREPEAT;