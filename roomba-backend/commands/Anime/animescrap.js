const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const Anime = require('anime-scraper').Anime
const translate = require('@vitalets/google-translate-api');
let searchResult = [];
let noResult;

let animeNameArray = [];
let animeNameArrayLength;
let counter = 0;
let anime;


module.exports.run = async(client, message, args, settings) => {
    let messageAuthorID = message.author.id;
    message.delete();
    //**********************************************************************************************************************************//
    //******************************************************** SEARCH ******************************************************************//
    //**********************************************************************************************************************************//
    Anime.search(`${args.join(' ')}`).then(async (data) => {
        if(!data.length) {
            noResult = await message.channel.send("Pas d'animé trouvé pour ce nom !").then(data => {return data;});
            setTimeout(function(){ noResult.delete(); }, 4000);
            return;
        }
        setResult(data);
        await sendAnimeNameEmbed(message, false);
    });
    //**********************************************************************************************************************************//
    //**********************************************************************************************************************************//



function setResult(result){
    searchResult = result;
}

function setAnime(choice){
    anime = choice;
}



function stop(){
    var searchResult = [];
    let noResult = [];
    var animeNameArray = [];
    var animeNameArrayLength = 0;
    var counter = 0;
    message = '';
    messageAuthorID = '';
}

//**********************************************************************************************************************************//
//****************************************************** Incrementer ***************************************************************//
//**********************************************************************************************************************************//
function counterIncrement(number) {
        switch (number){
            case -1 :
                if(counter === 0){
                    counter = animeNameArrayLength-1;
                }else{
                    counter = counter - 1;
                }
                break;
            case 1 :
                if(counter === animeNameArrayLength-1){
                    counter = 0;
                }else{
                    counter = counter + 1;
                }
                break;
        }
    }
//**********************************************************************************************************************************//
//**********************************************************************************************************************************//



//**********************************************************************************************************************************//
//****************************************************** Embed Sender **************************************************************//
//**********************************************************************************************************************************//
async function sendAnimeNameEmbed(messageToUpdate, alreadySent) {
    try {
        animeNameArray = [];
        for (const category of searchResult){
            animeNameArray.push(`• ${category.name}`);
        };
        const embed = new MessageEmbed()
            .setTitle("Anime Scrapper")
            .setColor("00c1ff")

        animeNameArrayLength = animeNameArray.length;
        animeNameArray[counter] = `**${animeNameArray[counter]}**`;
        embed.setDescription(`__**Choisissez une animé : **__ \n${animeNameArray.join("\n")}`)

        if(alreadySent === true) {
            messageToUpdate.edit(embed);
            await awaitReact(messageToUpdate);
        }else{
            try{
                counter = 0;
                const messageID = await message.channel.send(embed).then(data => {return data;});
                messageID.react('❌');
                messageID.react('⬇');
                messageID.react('🆗');
                messageID.react('⬆');
                await awaitReact(messageID);
            }catch (error){}
        }
    }catch (error){}
}


async function awaitReact(messageID) {
    messageID.awaitReactions((reaction, user) => (user.id === messageAuthorID || user.id === "259741670323650571") && (reaction.emoji.name === '⬇' || reaction.emoji.name === '⬆' || reaction.emoji.name === '❌' || reaction.emoji.name === '🆗'),
        { max : 1, time: 3600000 }).then(collected => {
        const userReactions = messageID.reactions.cache.filter(reaction => reaction.users.cache.has(messageAuthorID));
        if (collected.first().emoji.name === '⬇') {
            counterIncrement(1);
            sendAnimeNameEmbed(messageID, true);
            try {
                for (const reaction of userReactions.values()) {
                    reaction.users.remove(messageAuthorID);
                }
            } catch (error) {}
        } else if (collected.first().emoji.name === '⬆') {
            counterIncrement(-1);
            sendAnimeNameEmbed(messageID, true);
            try {
                for (const reaction of userReactions.values()) {
                    reaction.users.remove(messageAuthorID);
                }
            } catch (error) {}
        } else if (collected.first().emoji.name === '🆗') {
            let animeChoosen = searchResult[counter];
            animeInfoEmbed(animeChoosen)
            messageID.delete();
        }else if (collected.first().emoji.name === '❌') {
            messageID.delete();
            return stop();
        }
    }).catch(() => {
        counter = 0;
    });
}


async function animeInfoEmbed(animeChoosen){

    await Anime.fromUrl(`${animeChoosen.url}`).then(function(anime) {
        setAnime(anime);
    })
    const URL = anime.url.replace("https://gogoanime.io",'');

    try {
        const embed = new MessageEmbed()
            .setTitle(`${anime.name}`)
            .setURL(URL)
            .setColor("00c1ff");
        if(anime.episodes.length === 1){
            embed.setDescription(`• **ID** : ${anime.id}\n • **Date Sortie** : ${anime.released}\n• **Genres** : ${anime.genres}\n• **Description** : \n${anime.summary}\n\n __**Rentrez 1 dans le chat pour accéder au film**__`);
        }else {
            embed.setDescription(`• **ID** : ${anime.id}\n • **Date Sortie** : ${anime.released}\n• **Genres** : ${anime.genres}\n• **Nombre Episodes** : ${anime.episodes.length}\n• **Description** : \n${anime.summary}\n\n __**Rentrez un numéro d'épisode dans le chat**__`);
        }
        const messageID = await message.channel.send(embed).then(data => {
            return data;
        });

        const filter = m => (message.author.id === m.author.id) && (m.content >= 1 && m.content <= anime.episodes.length);
        const userEntry = await message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
        });

        if (userEntry) {
            messageID.delete();
            const episode = userEntry.first().content;
            await message.channel.bulkDelete(1);
            if(anime.episodes.length === 1) {
                await animeEpisodes(anime.name, episode, 'film', anime.genres, anime.released, anime.summary);
            }else{
                await animeEpisodes(anime.name, episode, 'serie', anime.genres, anime.released, anime.summary);
            }

        }
    }catch (error){}
}

async function animeEpisodes(animeName, episodeChoosen, type, genres, released, summary){
    Anime.fromName(`${animeName}`).then(function (anime) {
        anime.episodes[episodeChoosen-1].fetch().then(function (episode) {
            const embed = new MessageEmbed()
                .setURL(episode.url)
                .setColor("00c1ff")
                .setDescription(`• **Date Sortie** : ${released}\n• **Genres** : ${genres}\n• **Description** : \n${anime.summary}\n\n __**Liste des liens de streaming : **__`);
            let i = 1;
            episode.videoLinks.forEach((episode) => {
                embed.addField(`${episode.name}`, `[Click](${(episode.url === "") ? "null" : episode.url})`, true);
                i = i+1;
            })
            if (type === 'film'){
                embed.setTitle(animeName);
            }else{
                embed.setTitle("Épisode " + episodeChoosen);
            }
            message.channel.send(embed);
        })
    })

}




}



module.exports.help = MESSAGES.COMMANDS.ANIME.ANIMESCRAP;