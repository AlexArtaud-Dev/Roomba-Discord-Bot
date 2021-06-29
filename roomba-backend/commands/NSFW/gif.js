const {MESSAGES} = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {
    const anime = await fetch("https://www.reddit.com/r/NSFW_GIF/top.json?sort=top&t=month&limit=500")
        .then(res => res.json())
        .then(json => json.data.children);

    const img = anime[Math.floor(Math.random() * anime.length)].data;

    const embed = new MessageEmbed()
        .setDescription(img.title)
        .setImage(img.url)
        .setFooter("Powered by r/NSFW_GIF");


        if (message.channel.nsfw) {
            message.channel.send(embed);
            } else { 
            message.reply("Vous devez être dans un channel NSFW pour éxécuter cette commande!"); 
            }; 
    
    
           
}
module.exports.help = MESSAGES.COMMANDS.NSFW.GIF;