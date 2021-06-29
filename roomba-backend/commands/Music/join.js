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
    message.delete();
    if (channelID === musicChannelID) {

        if (voiceChannel) {
            const player = client.music.players.spawn({
                guild: message.guild,
                voiceChannel: voiceChannel,
                textChannel: message.channel,
            });
            // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":join,"channelID":${voiceChannel.id},"channelName":${voiceChannel.name},"result":"Success : Bot Joined!"}`, function(err) {
            //     if (err) throw err;
            // });

            if (!client.musicPlayer.get(message.guild.id)) client.musicPlayer.set(message.guild.id, player);
        } else {
            musicChannel.send("Veuillez rejoindre un salon vocal!")
            // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":join,"result":"Error : Not in a vocal channel!"}`, function(err) {
            //     if (err) throw err;
            // });
            setTimeout(function() { musicChannel.bulkDelete(1) }, 1500);
        };

    } else {
        message.reply("Vous devez être dans le channel musique pour effectuer cette commande !")
        // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":join,"result":"Error : Command used out of a music channel(text)!"}`, function(err) {
        //     if (err) throw err;
        // });

        setTimeout(function() { message.channel.bulkDelete(1) }, 2000);

    };

    //client.emit('ready', client);

};
module.exports.help = MESSAGES.COMMANDS.MUSIC.JOIN;