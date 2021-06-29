const { MESSAGES } = require("../../util/constants");


module.exports.run = async(client, message, args, settings) => {
    var ts = new Date();
    var fs = require('fs');
    const timestampLogslash = ts.toLocaleString().split(" ");
    const timestampLog = timestampLogslash[0].replace(/\//g, "-")
    let channelID = message.channel.id;
    let musicChannelID = settings.musicChannel;
    let musicChannel = client.channels.cache.get(settings.musicChannel);
    const voiceChannel = message.member.voice.channel;
    const musicPlayer = client.musicPlayer.get(message.guild.id);
    message.delete();
    const destroyMusicClient = id => {
        client.music.players.destroy(id);
        client.musicPlayer.delete(id);
    }

    if (channelID === musicChannelID) {



        if ((musicPlayer && voiceChannel) && (musicPlayer.voiceChannel.id === voiceChannel.id)) {
            destroyMusicClient(message.guild.id)
            // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":leave,"channelID":${voiceChannel.id},"channelName":${voiceChannel.name}"result":"Success : Bot Left!"}`, function(err) {
            //     if (err) throw err;
            // });
        } else {
            // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":leave,"channelID":${voiceChannel.id},"channelName":${voiceChannel.name}"result":"Error : Not in the same vocal channel as the bot!"}`, function(err) {
            //     if (err) throw err;
            // });
            setTimeout(function() { message.channel.bulkDelete(1) }, 1500);
        }

    } else {
        message.reply("Vous devez être dans le channel musique pour effectuer cette commande !")
        // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":leave,"result":"Error : Command used out of a music channel(text)!"}`, function(err) {
        //     if (err) throw err;
        // });
        setTimeout(function() { message.channel.bulkDelete(1) }, 2000);

    };

    //client.emit('ready', client);

};
module.exports.help = MESSAGES.COMMANDS.MUSIC.LEAVE;