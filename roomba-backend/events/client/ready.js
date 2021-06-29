const { ErelaClient } = require("erela.js");

var ts = new Date();
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
const path = require('path');
const config = require("../../config");
var oldts = new Date();




const express = require('express');
const app = express();
const routes = require("../../dashboard/routes");
require('../../dashboard/strategies/discord')
const passport = require('passport');
const mongoose = require('mongoose');
const { DBCONNECTION, DBCONNECTIONDASHBOARD } = require("../../config");
const session = require('express-session');
const Store = require('connect-mongo')(session);
const cors = require('cors');

module.exports = (client, member) => {

    const timestampLogslash = ts.toLocaleString().split(" ");
    const timestampLog = timestampLogslash[0].replace(/\//g, "-");

    oldts.setDate(oldts.getDate() - 15);
    const oldtimestampLogslash = oldts.toLocaleString().split(" ");
    const oldtimestampLog = oldtimestampLogslash[0].replace(/\//g, "-");


    let logChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'logs');
    setTimeout(function() { console.log(`${ts.toLocaleString()} - ${client.user.tag} est connecté et observe ${client.guilds.cache.map(g => g.memberCount).reduce((a,b) => a + b)} utilisateurs!` + "\n*****************************************************************************\n\n"); }, 4500);
    //logChannel.send("Le bot est opérationnel");

    let activities = [`-help`, `être sur ${client.guilds.cache.size.toString()} serveurs !`, 'roomba.live'],
        i = 0;


    setInterval(() => client.user.setPresence({ activity: { name: `${activities[i++ % activities.length]}`, type: 'PLAYING' }, status: 'dnd' }), 4000);



    // MUSIQUE

    client.music = new ErelaClient(client, [{
        host: client.config.LAVALINK_HOST,
        port: client.config.LAVALINK_PORT,
        password: client.config.LAVALINK_PASSWORD
    }]);
    client.music.on("nodeConnect", node => setTimeout(function() { console.log(ts.toLocaleString() + " - Lien Lavalink -> Erela | Opérationnel"); }, 3000));
    client.music.on("socketClosed", (player, payload) => {
        client.music.players.destroy(player.guild.id);
    });
    client.music.on("nodeError", (node, error) => console.log(`Node error: ${error.message}`));
    client.music.on("trackStart", (player, track) => {
        player.textChannel.send(`***Musique en cours*** : ${track.title}`)

    });
    client.music.on("queueEnd", player => {
        player.textChannel.send("***La queue est terminée*** : Déconnexion.")
        client.music.players.destroy(player.guild.id);
    });





    // Express
    mongoose.connect(DBCONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(cors({
        origin: ['http://90.112.182.166:3001'],
        credentials: true,
    }))


    app.use(session({
        secret: 'radoineleplusbeau',
        cookie: {
            maxAge: 60000 * 60 * 24
        },
        resave: false,
        saveUninitialized: false,
        store: new Store({ mongooseConnection: mongoose.connection })
    }))
    app.use(passport.initialize());
    app.use(passport.session());
    app.use('/api', routes);



    app.listen(process.env.port || 3000);
    setTimeout(function() { console.log(ts.toLocaleString() + ' - Dashboard Connecté sur le port 3000'); }, 3050);





    // Local Tunnel

    /*
        const localtunnel = require('localtunnel');

        (async() => {
            const tunnel = await localtunnel({ port: 3000, subdomain: "roomba-discord-theonlyone-youbitch" });
            tunnel.url;
            setTimeout(function() { console.log(ts.toLocaleString() + " - Tunnel Ouvert : " + tunnel.url + "/api/main"); }, 3100)
            fs.writeFile("dashboard/url/url.txt", tunnel.url, 'utf8', function(err) {
                if (err) {
                    console.log("An error occured when writting URL file");
                    return console.log(err);
                }
                setTimeout(function() { console.log(ts.toLocaleString() + " - Fichier URL UPDATED"); }, 3200);
            });


            tunnel.on('close', () => {
                console.log("Tunnel Closed")
            });
        })();
        (async() => {
            const tunnel = await localtunnel({ port: 3001, subdomain: "roomba-discord-theonlyone-youbitch-dashboard" });
            tunnel.url;
            setTimeout(function() { console.log(ts.toLocaleString() + " - Tunnel Ouvert : " + tunnel.url); }, 3100)
            fs.writeFile("dashboard/url/url1.txt", tunnel.url, 'utf8', function(err) {
                if (err) {
                    console.log("An error occured when writting URL file");
                    return console.log(err);
                }
                setTimeout(function() { console.log(ts.toLocaleString() + " - Fichier URL UPDATED"); }, 3200);
            });


            tunnel.on('close', () => {
                console.log("Tunnel Closed")
            });
        })();
    */
    // setInterval(function() {
    //         try {
    //             if (!fs.existsSync(`dashboard/logs/${timestampLog}.txt`)) {
    //                 fs.writeFile(`dashboard/logs/${timestampLog}.txt`, `Log of ${timestampLog}\n*****************`, 'utf8', function(err) {
    //                     if (err) {
    //                         console.log("An error occured while writing log File.");
    //                         return console.log(err);
    //                     }
    //
    //                     setTimeout(function() { console.log("Fichier log journalier créé."); }, 6000);
    //                     setTimeout(function() {
    //                         try {
    //                             fs.unlinkSync(`dashboard/logs/${oldtimestampLog}.txt`)
    //                             console.log(`Logs du ${oldtimestampLog} supprimé (timestamp - 15)`);
    //                         } catch (err) {
    //                             console.error("An error occured while deleting log File. (n-15)" + err)
    //                         }
    //
    //                     }, 6500);
    //
    //                 });
    //
    //             }
    //         } catch (err) {
    //             setTimeout(function() { console.error(err); }, 6000);
    //
    //         }
    //     },
    //     10000);

    // setInterval(function() {
    //         var servers = client.guilds.cache.size.toString();
    //         var users = client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b);
    //         var channels = client.channels.cache.size;
    //         var jsonData = `{ "servers": ${servers.toString()}, "users": ${users.toString()}, "channels": ${channels.toString()} }`;
    //         var jsonObj = JSON.parse(jsonData);
    //         var jsonContent = JSON.stringify(jsonObj);
    //         fs.writeFile("dashboard/servinfo/output.json", jsonContent, 'utf8', function(err) {
    //             if (err) {
    //                 console.log("An error occured while writing JSON Object to File.");
    //                 return console.log(err);
    //             }
    //             console.log("Web Client Info Updated");
    //         });
    //
    //     },
    //     3600000);


    setInterval(function() {
        client.guilds.cache.map(async(guild) => {
            let settings = await client.getGuild(guild);

            if (settings.toDelete === true) {
                console.log("\n Guild Deleted by Dashboard : " + guild.name + "\n");

                guild.leave();
            }
        })
    }, 30000);

}