const {MESSAGES} = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const translate = require('@vitalets/google-translate-api');
const googleImg = new MessageAttachment('./assets/img/google.png');
module.exports.run = (client, message, args) => {
   
    const arg = args.join(" ").split(' | ');
    
    translate(arg[0], {from: arg[1], to: arg[2]}).then(res => {
      
    const embed = new MessageEmbed()
      .setColor("#00e8ff")
      .setTitle("Traduction")
      .attachFiles(googleImg)
      .setThumbnail('attachment://google.png')
      .addField("FROM", arg[1], false)
      .addField("TO", arg[2], false)
      .addField("CORRECTION", res.from.text.autoCorrected, false)
      .addField("INPUT", arg[0], false)
      .addField("MESSAGE TRADUIT", res.text, false);
      
      message.delete();
      message.channel.send(embed)
  }).catch(err => {
      console.error(err);
  });


   /* translate("plane", { from: 'en', to: 'es' }).then(text => {
      console.log(text);
    }); */
     
   
};

module.exports.help = MESSAGES.COMMANDS.MISC.TRANSLATE;
