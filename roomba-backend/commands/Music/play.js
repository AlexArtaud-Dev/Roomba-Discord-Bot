const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const { cpuUsage } = require("process");

module.exports.run = async(client, message, args, settings) => {
    var ts = new Date();
    var fs = require('fs');
    const timestampLogslash = ts.toLocaleString().split(" ");
    const timestampLog = timestampLogslash[0].replace(/\//g, "-")
    let channelID = message.channel.id;
    let musicChannelID = settings.musicChannel;
    let musicChannel = client.channels.cache.get(settings.musicChannel);

    const voiceChannel = message.member.voice.channel;
    const q = args.join(' ');


    const musicPlayer = client.musicPlayer.get(message.guild.id);


    if (q.startsWith("http")) {

        if (channelID === musicChannelID) {
            if (voiceChannel) {

                const player = client.music.players.spawn({
                    guild: message.guild,
                    voiceChannel: voiceChannel,
                    textChannel: message.channel,
                });
                if (!client.musicPlayer.get(message.guild.id)) client.musicPlayer.set(message.guild.id, player);


                try {
                    let trackNumber = 0;
                    const musicSearchResults = await client.music.search(q, message.author);
                    const MusicPlayer = client.musicPlayer.get(message.guild.id);
                    if (musicSearchResults.loadType === 'PLAYLIST_LOADED') {
                        message.delete();
                        musicSearchResults.playlist.tracks.forEach(element => {
                            MusicPlayer.queue.add(element);
                        });

                        musicChannel.send(`**${message.author.username}** a ajouté une playlist à la queue! [Tracks : ${musicSearchResults.playlist.tracks.length}]`);
                        // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":play,"method":"Direct HTML","channelID":${voiceChannel.id},"channelName":${voiceChannel.name},"playlist":${musicSearchResults.playlist.info.name},"playlistLength":${musicSearchResults.playlist.tracks.length},"result":"Success : Playlist Added!"}`, function(err) {
                        //     if (err) throw err;
                        // });
                    } else {
                        message.delete();
                        const tracks = await musicSearchResults.tracks;
                        const track = tracks[0];
                        await MusicPlayer.queue.add(track);
                        musicChannel.send(`**${message.author.username}** a ajouté une musique à la queue!`);
                        // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":play,"method":"Direct HTML","channelID":${voiceChannel.id},"channelName":${voiceChannel.name},"track":${track.title},"result":"Success : Track Added!"}`, function(err) {
                        //     if (err) throw err;
                        // });
                    }

                    if (!MusicPlayer.playing) MusicPlayer.play();

                } catch (e) {
                    console.log(e);
                    message.channel.send("Problème avec le client, essayer à nouveau!");
                    // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":play,"args":${q},"result": "Error :  Lavalink Client Error!"}`, function(err) {
                    //     if (err) throw err;
                    // });
                }


            } else {
                message.channel.send("Veuillez rejoindre un salon vocal!")
                // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":play,"args":${q},"result":"Error : Not in a voice channel!"}`, function(err) {
                //     if (err) throw err;
                // });
                setTimeout(function() { message.channel.bulkDelete(1) }, 1500);
            };

        } else {
            message.reply("Vous devez être dans le channel musique pour effectuer cette commande !")
            // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":play,"args":${q},"result":"Error : Command used out of a music channel(text)!"}`, function(err) {
            //     if (err) throw err;
            // });
            setTimeout(function() { message.channel.bulkDelete(1) }, 2000);

        };

    } else {

        const embed = new MessageEmbed()
            .setColor("#2c75ff")
            .setDescription(`Voici les 5 premières recherches pour : \`${q}\``);


        if (channelID === musicChannelID) {
            if (voiceChannel) {
                const player = client.music.players.spawn({
                    guild: message.guild,
                    voiceChannel: voiceChannel,
                    textChannel: message.channel,
                });

                try {
                    if ((player.voiceChannel === undefined) && musicPlayer.playing) {
                        musicPlayer.pause(true);
                        client.music.players.destroy(message.guild.id);
                        client.music.players.spawn({
                            guild: message.guild,
                            voiceChannel: voiceChannel,
                            textChannel: message.channel,
                        });
                    }
                } catch (error) {}

                if (!client.musicPlayer.get(message.guild.id)) client.musicPlayer.set(message.guild.id, player);

                try {
                    let trackNumber = 0;
                    const musicSearchResults = await client.music.search(q, message.author);
                    const tracks = await musicSearchResults.tracks.slice(0, 5);
                    tracks.map(r => embed.addField(`${++trackNumber}. ${r.title}`, `${r.uri}`));
                    message.delete();
                    musicChannel.send(embed);
                    const filter = m => (message.author.id === m.author.id) && (m.content >= 1 && m.content <= tracks.length);

                    const userEntry = await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 20000,
                        errors: ['time']
                    });
                    if (userEntry) {
                        const firstUserEntry = userEntry.first().content;
                        const MusicPlayer = client.musicPlayer.get(message.guild.id);
                        const track = tracks[firstUserEntry - 1];
                        await MusicPlayer.queue.add(track);
                        musicChannel.bulkDelete(1);
                        musicChannel.send(`**${message.author.username}** a ajouté une musique à la queue!`);
                        // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":play,"method":"YT SEARCH","channelID":${voiceChannel.id},"channelName":${voiceChannel.name},"track":${track.title},"result":"Success : Track Added!"}`, function(err) {
                        //     if (err) throw err;
                        // });
                        if (!MusicPlayer.playing) MusicPlayer.play();

                    }

                } catch (e) {
                    console.log(e);
                    message.channel.send("Problème avec le client, essayer à nouveau!");
                    // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":play,"args":${q},"result":"Error : Lavalink Client Error!"}`, function(err) {
                    //     if (err) throw err;
                    // });
                }


            } else {
                message.channel.send("Veuillez rejoindre un salon vocal!")
                // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":play,"args":${q},"result":"Error : Not in a voice channel!"}`, function(err) {
                //     if (err) throw err;
                // });

                setTimeout(function() { message.channel.bulkDelete(1) }, 1500);
            };

        } else {
            message.reply("Vous devez être dans le channel musique pour effectuer cette commande !")
            // fs.appendFile(`dashboard/logs/${timestampLog}.txt`, `\n{"date":${ts.toLocaleString()},"guild":${message.guild.name},"userID":${message.author.id},"username":${message.author.username},"command":play,"args":${q},"result":"Error : Command used out of a music channel(text)!"}`, function(err) {
            //     if (err) throw err;
            // });
            setTimeout(function() { message.channel.bulkDelete(1) }, 2000);

        };
    }


};
module.exports.help = MESSAGES.COMMANDS.MUSIC.PLAY;