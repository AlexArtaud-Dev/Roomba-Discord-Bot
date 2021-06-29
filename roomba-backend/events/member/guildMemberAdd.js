const { MessageEmbed, MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const { now, min } = require("moment");

module.exports = async(client, member) => {

    const settings = await client.getGuild(member.guild);
    let msg = settings.welcomeMessage;
    let welcomeChannel = settings.welcomeChannel;

    const date = new Date;
    const minutes = date.getMinutes();
    const hour = date.getHours();

    const canvas = Canvas.createCanvas(1000, 500);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage("https://media.discordapp.net/attachments/727870530040102968/742859455011749928/Capture.PNG");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    if (hour < 10) {
        var timehour = "0" + hour;
        if (minutes < 10) {
            var timeminute = "0" + minutes;
            var heure = timehour + "h" + timeminute;
            var joined = heure;
            ctx.font = 'bold 40px Verdana';
            ctx.fillStyle = '#a97dc4';
            ctx.textAlign = 'center';
            ctx.shadowBlur = 10;
            ctx.fillText(joined, 90, 75);
        } else {
            var timeminute = minutes;
            var heure = timehour + "h" + timeminute;
            var joined = heure;
            ctx.font = 'bold 40px Verdana';
            ctx.fillStyle = '#a97dc4';
            ctx.textAlign = 'center';
            ctx.shadowBlur = 10;
            ctx.fillText(joined, 90, 75);
        }
    } else {
        var timehour = hour;
        if (minutes < 10) {
            var timeminute = "0" + minutes;
            var heure = timehour + "h" + timeminute;
            var joined = heure;
            ctx.font = 'bold 40px Verdana';
            ctx.fillStyle = '#a97dc4';
            ctx.textAlign = 'center';
            ctx.shadowBlur = 10;
            ctx.fillText(joined, 90, 75);
        } else {
            var timeminute = minutes;
            var heure = timehour + "h" + timeminute;
            var joined = heure;
            ctx.font = 'bold 40px Verdana';
            ctx.fillStyle = '#a97dc4';
            ctx.textAlign = 'center';
            ctx.shadowBlur = 10;
            ctx.fillText(joined, 90, 75);
        }
    }

    ctx.beginPath();
    ctx.moveTo(0, 110);
    ctx.lineTo(190, 110);
    ctx.lineWidth = 9;
    ctx.strokeStyle = '#a97dc4';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(190, 0);
    ctx.lineTo(190, 114);
    ctx.lineWidth = 9;
    ctx.strokeStyle = '#a97dc4';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1000, 110);
    ctx.lineTo(810, 110);
    ctx.lineWidth = 9;
    ctx.strokeStyle = '#a97dc4';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(810, 0);
    ctx.lineTo(810, 114);
    ctx.lineWidth = 9;
    ctx.strokeStyle = '#a97dc4';
    ctx.stroke();

    var test = "MEMBRE";
    ctx.font = 'bold 35px Verdana';
    ctx.fillStyle = '#a97dc4';
    ctx.textAlign = 'center';
    ctx.shadowBlur = 10;
    ctx.fillText(test, 905, 44);

    var memberCount = "+1";
    ctx.font = 'bold 35px Verdana';
    ctx.fillStyle = '#a97dc4';
    ctx.textAlign = 'center';
    ctx.shadowBlur = 10;
    ctx.fillText(memberCount, 905, 84);

    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 12;
    ctx.strokeStyle = '#a97dc4';
    ctx.stroke();

    var welcome = "BIENVENUE";
    ctx.font = 'bold 80px Verdana';
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.fillStyle = '#a97dc4';
    ctx.textAlign = 'center';
    ctx.fillText(welcome, 500, 360);

    var name = member.user.tag;
    ctx.font = 'bold 50px Verdana';
    ctx.fillStyle = '#a97dc4';
    ctx.textAlign = 'center';
    ctx.shadowBlur = 10;
    ctx.fillText(name, 500, 410);

    ctx.beginPath();
    ctx.arc(500, 150, 120, 0, Math.PI * 2, true);
    ctx.lineWidth = 12;
    ctx.strokeStyle = "#a97dc4";
    ctx.stroke();
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 380, 30, 250, 250);

    const final = new MessageAttachment(canvas.toBuffer(), "image.png");



    // Version Embed //

    /* if (msg.includes("{{user}}")) msg = msg.replace("{{user}}", member);

   // let logChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'porte-entrée');

    const tag = member.user.tag;
    const embed = new MessageEmbed()
        .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
        .setColor("#35f092")
        .setDescription(`${msg}`)
        .addField("TAG", tag, true)
        .addField("NB MEMBRE", `${member.guild.memberCount} (+1)`, true)
        .setFooter("Server Join")
        .setTimestamp();*/


    client.channels.cache.get(welcomeChannel).send(final);

    await client.createUser({
        guildID: member.guild.id,
        guildName: member.guild.name,
        userID: member.id,
        username: member.user.tag,
        warnCount: 0,
    });

}