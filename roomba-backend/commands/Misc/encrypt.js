const {MESSAGES} = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const aesImg = new MessageAttachment('./assets/img/aes.png');
var ts = new Date();


module.exports.run = (client, message, args) => {
   
    const arg = args.join(" ").split(' | ');
  
    console.log("--------------------------------------------------------------------");
    console.log(`${ts.toLocaleString()} - ${message.author.username} a crypté le message suivant :`);
    console.log(arg[0]);
    console.log(`Avec la clé : ${arg[1]}`);
    console.log("--------------------------------------------------------------------");
    
    const cipher = salt => {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    
        return text => text.split('')
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join('');
    }
  
    
    const myCipher = cipher(arg[1]);
    const enc = myCipher(arg[0]);
    
    
    const embed = new MessageEmbed()
    .setColor("#00e8ff")
    .setTitle("Encryptage AES")
    .setDescription(`Votre message est : \n \`${enc}\``)
    .attachFiles(aesImg)
    .setThumbnail('attachment://aes.png')

    const embed1 = new MessageEmbed()
    .setColor("#00e8ff")
    .setTitle("Encryptage AES")
    .setDescription(`Votre message est : \n \`${enc}\` \n Votre clé de cryptage est : \n \`${arg[1]}\``)
    .attachFiles(aesImg)
    .setThumbnail('attachment://aes.png')
    

    
    message.delete();
    message.channel.send(embed);
    message.author.send(embed1);

};

module.exports.help = MESSAGES.COMMANDS.MISC.ENCRYPT;
