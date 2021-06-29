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
    message.channel.bulkDelete(1)
    if (channelID === musicChannelID) {

        if ((musicPlayer && voiceChannel) && !(musicPlayer.voiceChannel.id === voiceChannel.id)) {
            message.channel.send("Veuillez rejoindre le même salon que le bot !");
            setTimeout(function() { message.channel.bulkDelete(1) }, 2000);
            // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":forceskip,"channelID":${voiceChannel.id},"channelName":${voiceChannel.name}"result":"Error : Not in the same vocal channel as the bot!"}`, function(err) {
            //     if (err) throw err;
            // });
        } else {
            musicPlayer.stop();
            musicChannel.send(`***Skip*** : ${musicPlayer.queue[0].title}`);
            // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":forceskip,"channelID":${voiceChannel.id},"channelName":${voiceChannel.name},"skippedMusic":${musicPlayer.queue[0].title},"result":"Success : Music Skipped!"}`, function(err) {
            //     if (err) throw err;
            // });
        }


    } else {
        message.reply("Vous devez être dans le channel musique pour effectuer cette commande !")
        setTimeout(function() { message.channel.bulkDelete(1) }, 1000);
        // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":forceskip,"result":"Error : Command used out of a music channel(text)!"}`, function(err) {
        //     if (err) throw err;
        // });

    };

    //client.emit('ready', client);

};
module.exports.help = MESSAGES.COMMANDS.MUSIC.FORCESKIP;