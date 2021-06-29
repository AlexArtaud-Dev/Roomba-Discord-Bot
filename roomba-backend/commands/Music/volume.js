const { MESSAGES } = require("../../util/constants");


module.exports.run = async(client, message, args, settings) => {
    var ts = new Date();
    var fs = require('fs');
    const timestampLogslash = ts.toLocaleString().split(" ");
    const timestampLog = timestampLogslash[0].replace(/\//g, "-");
    let channelID = message.channel.id;
    let musicChannelID = settings.musicChannel;
    let musicChannel = client.channels.cache.get(settings.musicChannel);

    const voiceChannel = message.member.voice.channel;
    const musicPlayer = client.musicPlayer.get(message.guild.id);



    if (channelID === musicChannelID) {


        if ((musicPlayer && voiceChannel) && !(musicPlayer.voiceChannel.id === voiceChannel.id)) {
            message.channel.send("Veuillez rejoindre le même salon que le bot !");
            setTimeout(function() { message.channel.bulkDelete(1) }, 2000);
            // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":volume,"channelID":${voiceChannel.id},"channelName":${voiceChannel.name}"result":"Error : Not in the same vocal channel as the bot!"}`, function(err) {
            //     if (err) throw err;
            // });
        } else {
            if (args[0]) {
                if (!isNaN(args[0]) && (args[0] > 0 && args[0] <= 100)) {
                    message.delete();
                    musicPlayer.setVolume(args[0]);
                    musicChannel.send(`Le volume est maintenant : ${args[0]}`);
                    // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":volume,"channelID":${voiceChannel.id},"channelName":${voiceChannel.name},"volumeSet":${args[0]},"result":"Success : Volume Set!"}`, function(err) {
                    //     if (err) throw err;
                    // });
                } else {
                    musicChannel.send("Merci de choisir un nombre entre 1 et 100 !");
                    // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":volume,"channelID":${voiceChannel.id},"channelName":${voiceChannel.name},"volumeSet":${args[0]},"result":"Error : Volume set not between 1 and 100!"}`, function(err) {
                    //     if (err) throw err;
                    // });
                }
            } else {
                musicChannel.send(`Le volume est actuellement : ${musicPlayer.volume}`);
                // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":volume,"channelID":${voiceChannel.id},"channelName":${voiceChannel.name},"volume":${musicPlayer.volume},"result":"Success : Volume Shown!"}`, function(err) {
                //     if (err) throw err;
                // });
            }

        }

    } else {
        message.reply("Vous devez être dans le channel musique pour effectuer cette commande !")
        setTimeout(function() { message.channel.bulkDelete(1) }, 2000);
        // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":volume,"result":"Error : Command used out of a music channel(text)!"}`, function(err) {
        //     if (err) throw err;
        // });
    };


};
module.exports.help = MESSAGES.COMMANDS.MUSIC.VOLUME;