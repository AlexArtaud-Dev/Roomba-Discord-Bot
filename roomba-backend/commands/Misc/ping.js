const {MESSAGES} = require("../../util/constants");
const Discord = require("discord.js");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const pingImg = new MessageAttachment('./assets/img/ping.png');
module.exports.run = (client, message, args) => {
 
     message.channel.send("Pinging...").then(m =>{
         
          var ping = m.createdTimestamp - message.createdTimestamp;

         
          var embed = new MessageEmbed()
          .setAuthor("PING")
          .setColor("#00e8ff")
          .attachFiles(pingImg)
          .setThumbnail('attachment://ping.png')
          .addFields(
            { name : 'Votre Ping ', value : `${ping} ms`, inline : false}
          );
          // Then It Edits the message with the ping variable embed that you created

          message.delete()
          message.channel.send(embed)
      });

}
module.exports.help = MESSAGES.COMMANDS.MISC.PING;