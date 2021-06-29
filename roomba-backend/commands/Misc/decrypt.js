const {MESSAGES} = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const aesImg = new MessageAttachment('./assets/img/aes.png');

module.exports.run = (client, message, args) => {
   
    const arg = args.join(" ").split(' | ');
  
    
    const decipher = salt => {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
        return encoded => encoded.match(/.{1,2}/g)
            .map(hex => parseInt(hex, 16))
            .map(applySaltToChar)
            .map(charCode => String.fromCharCode(charCode))
            .join('');
    }
  
    


    const myDecipher = decipher(arg[1]);
    const dec = myDecipher(arg[0]);
    
    
    const embed = new MessageEmbed()
    .setColor("#00e8ff")
    .setTitle("Decryptage AES")
    .setDescription(`Votre message est : \n \`${dec}\``)
    .attachFiles(aesImg)
    .setThumbnail('attachment://aes.png')

    const embed1 = new MessageEmbed()
    .setColor("#00e8ff")
    .setTitle("Decryptage AES")
    .setDescription(`Votre message est : \n \`${dec}\` \n Votre clé de decryptage est : \n \`${arg[1]}\``)
    .attachFiles(aesImg)
    .setThumbnail('attachment://aes.png')
    

    message.delete();
    message.channel.send(embed);
    message.author.send(embed1);

};

module.exports.help = MESSAGES.COMMANDS.MISC.DECRYPT;
