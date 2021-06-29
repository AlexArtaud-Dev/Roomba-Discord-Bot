const {MESSAGES} = require("../../util/constants");
const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args, settings) => {
    let channelID = message.channel.id;
    let musicChannelID = settings.musicChannel;
    let musicChannel = client.channels.cache.get(settings.musicChannel);
    const voiceChannel = message.member.voice.channel;
    const musicPlayer = client.musicPlayer.get(message.guild.id);

    if (channelID === musicChannelID) {
    


        const embed = new MessageEmbed()
        .setTitle("Liste des 5 prochaines musiques:")
        .setDescription(`Actuelle: [${musicPlayer.queue[0].title}](${musicPlayer.queue[0].uri})`);

        const queueEmbed = queue => {
            for (let i = 0; i < queue.length; i++) {
                const nextTracks = queue.slice((i + 1), 6);
                nextTracks.map(t => embed.addField(`${++i}. ${t.title}`, `${t.uri}`));
            }
            return musicChannel.send(embed);
        }

        (musicPlayer && voiceChannel) && (musicPlayer.voiceChannel.id === voiceChannel.id) ? queueEmbed(musicPlayer.queue) : message.channel.send("Vous n'êtes pas dans le même channel vocal que le bot !");


    } else{
        message.reply("Vous devez être dans le channel musique pour effectuer cette commande !")
        setTimeout(function(){ message.channel.bulkDelete(1) }, 1000);
  
    };

//client.emit('ready', client);

};
module.exports.help = MESSAGES.COMMANDS.MUSIC.QUEUE;