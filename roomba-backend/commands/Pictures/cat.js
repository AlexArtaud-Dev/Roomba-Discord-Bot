const {MESSAGES} = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {
    const cat = await fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(json => json);

    const img = cat[0];
      
    const embed = new MessageEmbed()

        .setImage(img.url)
        .setFooter("Powered by https://api.thecatapi.com");

    message.channel.send(embed);
    

}
module.exports.help = MESSAGES.COMMANDS.PICTURES.CAT;