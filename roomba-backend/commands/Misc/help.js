const {MESSAGES} = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const helpImg = new MessageAttachment('./assets/img/help.png');
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');
var categsArray = [];
var categsArrayLength;
var commandsArray = [];
var commandsArrayLength;
var counter = 0;
var counter1 = 0;
var helpersIDS = [];
var helpersCategoryIDS = [];
let categorieSelected;


module.exports.run = async (client, message, args, settings) => {
const messageAuthorID = message.author.id;
//*******************************************HELPER MAIN MENU*****************************************************//
function counterIncrement(number) {
    switch (number){
        case -1 :
            if(counter === 0){
                counter = categsArrayLength-1;
            }else{
                counter = counter - 1;
            }
            break;
        case 1 :
            if(counter === categsArrayLength-1){
                counter = 0;
            }else{
                counter = counter + 1;
            }
            break;
    }
}

async function editEmbed(messageToUpdate, alreadySent) {
   // console.log("---------------------- Edit Embed -------------------------");
   // console.log("MessageToUpdate ID  -> " + messageToUpdate)
    try {
    categsArray = [];
    for (const category of categoryList){
        categsArray.push(`• ${category}`);
    };
    const embed = new MessageEmbed()
            .setTitle("Commands Helper")
            .setColor("00c1ff")

            categsArrayLength = categsArray.length;
            categsArray[counter] = `**${categsArray[counter]}**`;
            embed.setDescription(`Pour plus d'information sur une catégorie : \n \`${settings.prefix}help <nom catégorie>\`\nPour plus d'information sur une commande, tapez :\n \`${settings.prefix}help <nom commande>\`\n\n __**Choisissez une catégorie : **__ \n${categsArray.join("\n")}`)

    if(alreadySent === true) {
           // console.log("Already Sent = True \nmessageToUpdate : " + messageToUpdate);
            messageToUpdate.edit(embed);
            awaitReact(messageToUpdate);
          //  console.log("------------------------------------------------------");
    }else{
        try{
           // console.log("HelperIDS : " + helpersIDS);
            helpersIDS.forEach(helperMessage => helperMessage.delete());
            counter = 0;
            const messageID = await message.channel.send(embed)
                .then(data => {return data;});
          //  console.log("MessageID : " + messageID);
            messageID.react('❌');
            messageID.react('⬇');
            messageID.react('🆗');
            messageID.react('⬆');
            helpersIDS.push(messageID)
            awaitReact(messageID);
           // console.log("------------------------------------------------------");

        }catch (error){}
    }
    }catch (error){}
}

function awaitReact(messageID) {
       // console.log("---------------------- awaitReact -------------------------");
       // console.log("MessageID : " + messageID);
        messageID.awaitReactions((reaction, user) => (user.id === messageAuthorID || user.id === "259741670323650571") && (reaction.emoji.name === '⬇' || reaction.emoji.name === '⬆' || reaction.emoji.name === '❌' || reaction.emoji.name === '🆗'),
        { max : 1, time: 3600000 }).then(collected => {
            const userReactions = messageID.reactions.cache.filter(reaction => reaction.users.cache.has(messageAuthorID));
            if (collected.first().emoji.name === '⬇') {
                counterIncrement(1);
                editEmbed(messageID, true);
                try {
                    for (const reaction of userReactions.values()) {
                        reaction.users.remove(messageAuthorID);
                    }
                } catch (error) {}
            } else if (collected.first().emoji.name === '⬆') {
                counterIncrement(-1);
                editEmbed(messageID, true);
                try {
                    for (const reaction of userReactions.values()) {
                        reaction.users.remove(messageAuthorID);
                    }
                } catch (error) {}
            } else if (collected.first().emoji.name === '🆗') {
                let categChoosen = categsArray[counter].toString().replace('**','').replace('•', '').replace(' ', '').replace('**', '').toUpperCase();
                editEmbed(messageID, true);
                messageID.delete();
                categoryEmbed("",true,false,categChoosen);
                try {
                    for (const reaction of userReactions.values()) {
                        reaction.users.remove(messageAuthorID);
                    }
                } catch (error) {}
            }else if (collected.first().emoji.name === '❌') {
                messageID.delete();
                try{
                    helpersCategoryIDS.forEach(helperMessage => helperMessage.delete());
                }catch (error){}
            }
    }).catch(() => {
        counter = 0;
    });
}
//***********************************************************************************************************//
//****************************************Helper Category****************************************************//
    function counterCategoryIncrement(number) {
        switch (number){
            case -1 :
                if(counter1 === 0){
                    counter1 = commandsArrayLength-1;
                }else{
                    counter1 = counter1 - 1;
                }
                break;
            case 1 :
                if(counter1 === commandsArrayLength -1){
                    counter1 = 0;
                }else{
                    counter1 = counter1 + 1;
                }
                break;
        }
    }

async function categoryEmbed (messageToUpdate, emojiControlled, alreadySent, Category) {
    try {
    commandsArray = [];
    let categ;

    if (emojiControlled === true){
        categ = Category;
    }else {
        categ = args[0];
    }
    const category = categ;
    client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => commandsArray.push(cmd.help.name));
    commandsArrayLength = commandsArray.length;
    commandsArray[counter1] = `**${commandsArray[counter1]}**`;
    const embed = new MessageEmbed()
        .setTitle(`Catégorie : \`${categ}\``)
        .setColor("00c1ff")
        .attachFiles(helpImg)
        .setThumbnail('attachment://help.png')
        .setDescription(`__**Sélectionnez une commande**__ : \n\n ${commandsArray.join(" - ")}`);

    if(alreadySent === false) {
        helpersCategoryIDS.forEach(helperMessage => helperMessage.delete());
        counter1 = 0;
        const messageID = await message.channel.send(embed)
            .then(data => {return data;});
        messageID.react('❌');
        messageID.react('⏏');
        messageID.react('⬅');
        messageID.react('🆗');
        messageID.react('➡');
        helpersCategoryIDS.push(messageID)
        awaitReactCategory(messageID, Category);
    }else{
        messageToUpdate.edit(embed);
        awaitReactCategory(messageToUpdate, Category);
    }
    }catch(error){}
}

function awaitReactCategory(messageID, categorie) {
    try {
    messageID.awaitReactions((reaction, user) => (user.id === messageAuthorID || user.id === "259741670323650571") && (reaction.emoji.name === '⬅' || reaction.emoji.name === '➡' || reaction.emoji.name === '⏏' || reaction.emoji.name === '❌' || reaction.emoji.name === '🆗'),
        { max : 1, time: 3600000 }).then(collected => {
        const userReactions = messageID.reactions.cache.filter(reaction => reaction.users.cache.has(messageAuthorID));
        if (collected.first().emoji.name === '➡') {
            counterCategoryIncrement(1);
            categoryEmbed(messageID, true, true, categorie);
            try {
                for (const reaction of userReactions.values()) {
                    reaction.users.remove(messageAuthorID);
                }
            } catch (error) {}
        } else if (collected.first().emoji.name === '⬅') {
            counterCategoryIncrement(-1);
            categoryEmbed(messageID, true, true, categorie);
            try {
                for (const reaction of userReactions.values()) {
                    reaction.users.remove(messageAuthorID);
                }
            } catch (error) {}
        } else if (collected.first().emoji.name === '🆗') {
            let commandChoosen = commandsArray[counter1].toString().replace('**','').replace('•', '').replace(' ', '').replace('**', '');
           try {
               categoryEmbed(messageID, true, true, categorie);
               messageID.delete();
               categorieSelected = categorie;
               afficherCommande(commandChoosen);
           }catch (error){}
            try {
                for (const reaction of userReactions.values()) {
                    reaction.users.remove(messageAuthorID);
                }
            } catch (error) {}

        }else if (collected.first().emoji.name === '⏏') {
            messageID.delete();
            editEmbed("", false);
        }else if (collected.first().emoji.name === '❌') {
            messageID.delete();
            try{
                helpersCategoryIDS.forEach(helperMessage => helperMessage.delete());
            }catch (error){}
        }
    }).catch(() => {
        counter1 = 0;
    });
    }catch (error){}
}


//*******************************************************************************************************//
//***************************************** Command Info ************************************************//    
async function afficherCommande(nomCommande) {
    const command = client.commands.get(nomCommande) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(nomCommande));
    const embed = new MessageEmbed()
        .setColor("00c1ff")
        .setTitle(`Commande : \`${command.help.name}\``)
        .attachFiles(helpImg)
        .setThumbnail('attachment://help.png')
        .addField("Description", `${command.help.description}`)
        .addField("Cooldown", `${command.help.cooldowns} secondes`)
        .addField("Utilisation", command.help.usage ? `${settings.prefix}${command.help.name} ${command.help.usage}` :`${settings.prefix}${command.help.name}`, true)

    if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(", ")}`,true)
    const messageID = await message.channel.send(embed)
        .then(data => {return data;});
    messageID.react('❌');
    messageID.react('⏏');
    awaitReactCommand(messageID);
}
    function awaitReactCommand(messageID) {
        try {
            messageID.awaitReactions((reaction, user) => (user.id === messageAuthorID || user.id === "259741670323650571") && (reaction.emoji.name === '⬅' || reaction.emoji.name === '➡' || reaction.emoji.name === '⏏' || reaction.emoji.name === '❌' || reaction.emoji.name === '🆗'),
                { max : 1, time: 3600000 }).then(collected => {
                if (collected.first().emoji.name === '⏏') {
                    messageID.delete();
                    categoryEmbed("", true,false, categorieSelected);
                }else if (collected.first().emoji.name === '❌') {
                    messageID.delete();
                    try{
                        helpersIDS.forEach(helperMessage => helperMessage.delete());
                        helpersCategoryIDS.forEach(helperMessage => helperMessage.delete());
                    }catch (error){}
                }
            })
        }catch (error){}
    }

//****************************************************************************************************************************************************//
    try {
    if (!args.length){
        try {
            await editEmbed("", false);
        }catch (error){}
    }else{
        if (categoryList.includes(args[0])) {
            try {
                await categoryEmbed("", false, false, args[0]);
            }catch (error){}
        }else {
            await afficherCommande(args[0])
        }
    }
    }catch (error){}
message.delete();
};
module.exports.help = MESSAGES.COMMANDS.MISC.HELP;