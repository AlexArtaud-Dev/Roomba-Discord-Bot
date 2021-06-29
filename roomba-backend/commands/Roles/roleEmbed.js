const {MESSAGES} = require("../../util/constants");
const  { MessageEmbed } = require("discord.js");
const { errors } = require("puppeteer");

module.exports.run = async (client, message, args, settings) =>
{
    message.delete();

    var toDeleteOne = false;
    var toDeleteTwo = false;
    var toDeleteThree = false;
    const titleArray = [];
    const descriptionArray = [];
    const ColorArray = [];

    const embed = new MessageEmbed();



    const messageID = await message.reply("**Donnez le titre de l'embed**").then(data =>
    {
        return data;
    })
    var interval = setInterval(function ()
    {
        if (toDeleteOne === true) {
            messageID.delete();
            clearInterval(interval);
        }
    }, 100);

    const filter = m => (message.author.id === m.author.id);
    const userEntry = await message.channel.awaitMessages(filter, {
        max: 1,
        time: 120000,
        errors: ['time']
    })



    if (userEntry) {
        message.channel.bulkDelete(1);
        var toDeleteOne = true;
        userEntry.map((entry) =>
        {
            titleArray.push(entry.content);
        })
        embed.setTitle(titleArray[0].toString())  
    }

    const messageID2 = await message.reply("**Donnez la description de l'embed**").then(data =>
    {
        return data;
    })
    var interval = setInterval(function ()
    {
        if (toDeleteTwo === true) {
            messageID2.delete();
            clearInterval(interval);
        }
    }, 100);

    const filter2 = m => (message.author.id === m.author.id);
    const userEntry2 = await message.channel.awaitMessages(filter2, {
        max: 1,
        time: 120000,
        errors: ['time']
    });


    if (userEntry2) {
        message.channel.bulkDelete(1);
        var toDeleteTwo = true;
        userEntry2.map((entry) =>
        {
            descriptionArray.push(entry.content);
        })
        embed.setDescription(descriptionArray[0].toString())
    }

    const messageID3 = await message.reply("**Donnez la couleur de l'embed (Hexadecimal)**").then(data =>
    {
        return data;
    })
    var interval = setInterval(function ()
    {
        if (toDeleteThree === true) {
            messageID3.delete();
            clearInterval(interval);
        }
    }, 100);

    const filter3 = m => (message.author.id === m.author.id);
    const userEntry3 = await message.channel.awaitMessages(filter3, {
        max: 1,
        time: 120000,
        errors: ['time']
    });


    if (userEntry3) {
        message.channel.bulkDelete(1);
        var toDeleteThree = true;
        userEntry3.map((entry) =>
        {
            ColorArray.push(entry.content);
        })
        embed.setColor(ColorArray[0].toString())
    } 








    const globalArray = [];
    const globalRoleIDArray = [];
    const globalRoleEmojisArray = [];
    var looperBoolean = ["y"];

    for (loop = 0; loop < 30; loop++) {


        switch (looperBoolean[0]) {
            case "y": {
                const roleId = [];
                const roleEmote = [];
                var toDeleteOne = false;
                var toDeleteTwo = false;

                const messageID = await message.reply("**Donnez l'ID du role** (mode developpeur : clique droit sur le role -> Copier Identifiant)").then(data =>
                {
                    return data;
                })
                var interval = setInterval(function ()
                {
                    if (toDeleteOne === true) {
                        messageID.delete();
                        clearInterval(interval);
                    }
                }, 100);

                const filter = m => (message.author.id === m.author.id);
                const userEntry = await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 120000,
                    errors: ['time']
                })


                if (userEntry) {
                    message.channel.bulkDelete(1);
                    var toDeleteOne = true;
                    userEntry.map((entry) =>
                    {
                        roleId.push(entry.content);
                    })
                }

                const messageID2 = await message.reply("**Donnez l'émojis du rôle** \n ● Emote Custom : Mettez un \\ avant l'emote, envoyez le message et récupérez le code (<:name:__**code**__>) \n ● Emote Discord : Mettez un \\ avant l'emojis, envoyez le message et copiez collez l'emojis").then(data =>
                {
                    return data;
                })
                var interval = setInterval(function ()
                {
                    if (toDeleteTwo === true) {
                        messageID2.delete();
                        clearInterval(interval);
                    }
                }, 100);

                const filter2 = m => (message.author.id === m.author.id);
                const userEntry2 = await message.channel.awaitMessages(filter2, {
                    max: 1,
                    time: 120000,
                    errors: ['time']
                })


                if (userEntry2) {
                    message.channel.bulkDelete(1);
                    var toDeleteTwo = true;
                    userEntry2.map((entry) =>
                    {
                        roleEmote.push(entry.content);
                    })
                }

                const object = { roleID: roleId[0].toString(), roleEmote: roleEmote[0].toString() };
                client.addToArray(message.guild, object);
                globalArray.push({ id: roleId[0].toString(), emojis: roleEmote[0].toString() });

                

                var toDeleteThree = false;
                const messageID3 = await message.reply("**Voulez vous ajouter un autre role ? (Y/N)**").then(data =>
                {
                    return data;
                })
                var interval = setInterval(function ()
                {
                    if (toDeleteThree === true) {
                        messageID3.delete();
                        clearInterval(interval);
                    }
                }, 100);

                const filter3 = m => (message.author.id === m.author.id);
                const userEntry3 = await message.channel.awaitMessages(filter3, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                })


                if (userEntry3) {
                    message.channel.bulkDelete(1);
                    var toDeleteThree = true;
                    userEntry3.map((entry) =>
                    {
                        if (entry === "y" || entry === "Y" || entry === "yes" || entry === "oui") {
                            return;
                        } else {
                            looperBoolean.shift();
                            looperBoolean.push(entry.content);
                        }
                    })
                }


                break;
            }
            case "n": {
                loop = 30;
                break;
            }
        }


      



            
        

       


        
    } 

    
    
    globalArray.map((role) =>
    {
        try {
            const roleEmbed = message.guild.roles.cache.get(role.id);
            
            if (!isNaN(role.emojis)) {
                const roleEmojis = message.guild.emojis.cache.get(role.emojis);
                embed.addField('⠀',`${roleEmojis} - ${roleEmbed.toString()} `);
            } else {
                embed.addField('⠀',`${role.emojis} - ${roleEmbed.toString()} `);
            }
                


        } catch {
            message.channel.send("Un ou plusieurs rôles n'existent pas !")
        }
        
    })


    message.channel.send(embed).then(msg =>
    {
        globalArray.map(async (role) =>
        {
                const roleEmbed = message.guild.roles.cache.get(role.id);

                if (!isNaN(role.emojis)) {
                    const roleEmojis = message.guild.emojis.cache.get(role.emojis);
                    await msg.react(roleEmojis);
                } else {
                    await msg.react(role.emojis);
                }


        })
    })












    

   /* const objectOne = { test: "54168465", bite: "516541" };
    const objectTwo = { test: "50008465", bite: "51141" };
    const objectThree = { test: "5416875", bite: "516541" };
    const objectFour = { test: "543338465", bite: "587941" };

    globalArray.push(objectOne);
    globalArray.push(objectTwo);
    globalArray.push(objectThree);
    globalArray.push(objectFour);

    globalArray.map((object) =>
    {
        client.addToArray(message.guild, object);
    })*/
  

    /*
    const s1dRole = message.guild.roles.cache.get("738042782660427817");
    const s2dRole = message.guild.roles.cache.get("738042812574204026");
    const s3dRole = message.guild.roles.cache.get("738042815195381800");
    const s4dRole = message.guild.roles.cache.get("738042821512003674");


    
    const s1dEmoji = message.guild.emojis.cache.get("738040526162362380");
    const s2dEmoji = message.guild.emojis.cache.get("738041851973599282");
    const s3dEmoji = message.guild.emojis.cache.get("738041851692449944");
    const s4dEmoji = message.guild.emojis.cache.get("738041851906621540");



    let rolesChannel = client.channels.cache.get(settings.roleChannel);

 
    const embed = new MessageEmbed()
        .setTitle("Auto-Attribution des rôles")
        .setDescription("Cliquez sur les émojis ci-dessous pour obtenir les rôles (années décalées) :")
        .setColor("#dc143c")
        .addField(
            "Les Roles disponibles :",
            `
            ${s1dEmoji} - ${s1dRole.toString()}
            
            ${s2dEmoji} - ${s2dRole.toString()}
            
            ${s3dEmoji} - ${s3dRole.toString()}
           
            ${s4dEmoji} - ${s4dRole.toString()}
                        
            `
        );
        message.channel.bulkDelete(1);
        rolesChannel.send(embed).then(async msg =>{
            await msg.react(s1dEmoji);
            await msg.react(s2dEmoji);
            await msg.react(s3dEmoji);
            await msg.react(s4dEmoji);
        })*/
};
module.exports.help = MESSAGES.COMMANDS.ROLES.ROLEEMBED;