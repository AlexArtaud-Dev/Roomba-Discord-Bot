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
            // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":resume,"channelID":${voiceChannel.id},"channelName":${voiceChannel.name}"result":"Error : Not in the same vocal channel as the bot!"}`, function(err) {
            //     if (err) throw err;
            // });
        } else {
            if (musicPlayer.playing === false) {
                musicPlayer.pause(false);
                message.channel.bulkDelete(1)
                // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":resume,"channelID":${voiceChannel.id},"channelName":${voiceChannel.name},"resumedMusic":${musicPlayer.queue[0].title},"result":"Success : Music Resumed!"}`, function(err) {
                //     if (err) throw err;
                // });
            } else {
                if (musicPlayer.playing) {
                    message.channel.bulkDelete(1);
                    message.channel.send('Aucune musique n\'a été mis en pause !');
                    // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":pause,"channelID":${voiceChannel.id},"channelName":${voiceChannel.name},"result":"Success : The bot is not playing music"}`, function(err) {
                    //     if (err) throw err;
                    // });
                }

            }
        }

    } else {
        message.reply("Vous devez être dans le channel musique pour effectuer cette commande !")
        setTimeout(function() { message.channel.bulkDelete(1) }, 2000);
        // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":resume,"result":"Error : Command used out of a music channel(text)!"}`, function(err) {
        //     if (err) throw err;
        // });
    };


};
module.exports.help = MESSAGES.COMMANDS.MUSIC.RESUME;