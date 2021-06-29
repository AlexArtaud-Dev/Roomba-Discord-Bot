const message = require("./message");

const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = (client, message) => {
    let embedChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'ticket');
    const user = message.author;
    
    if(user.bot)return;
    const embed = new MessageEmbed()
        .setAuthor(`${user.tag} (${user.id})`)
        .setColor("#ffa500")
        .setDescription(`**Action**: ouverture ticket\n**Raison**: ${message.content}`)
        .setThumbnail(user.avatarURL())
        .setTimestamp()
        .setFooter(user.username, user.avatarURL());
     
        
    user.send("Nous avons reçu votre ticket, nous vous répondrons dès que possible !");    
    embedChannel.send(embed);
 
}