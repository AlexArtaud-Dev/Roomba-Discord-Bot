const { MESSAGES } = require("../../util/constants");
 
module.exports.run = (client, message, args) => {
    const filter = reaction => reaction.emoji.name === '⭐';
   // const collector = message.createReactionCollector(filter, { time: 10000 });

    message.react('⭐')
        .then(() =>{
            message.awaitReactions(filter, { time: 10000 })
                .then(collected => message.channel.send(`${collected.size} réaction collectée.`));
        });


  //  collector.on('end', collected => {
   //     message.channel.send(`${collected.size} réaction collectée.`)
   // })

    
};
 
module.exports.help = MESSAGES.COMMANDS.COLLECTORS.REACTCOLLECTOR;