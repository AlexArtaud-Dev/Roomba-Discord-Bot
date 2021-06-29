const { Collection } = require('discord.js');



module.exports = async(client, message) => {

    try {
        const settings = await client.getGuild(message.guild);
        const dbUser = await client.getUser(message.member);
        
        const bannedWordsStringUntreated = settings.banWordList;
        const bannedWordsStringUntreatedtoLowerCase = bannedWordsStringUntreated.toLowerCase();
        const bannedWordStringTreated = bannedWordsStringUntreatedtoLowerCase.replace(/\s/g, '');
        const bannedWordStringTreatedSplitted = bannedWordStringTreated.split(",");
        

        if(settings.banWordListActivation === true){
            bannedWordStringTreatedSplitted.map( (word) => {
                if(message.content.toLowerCase().includes(word)){
                    if(word === '') return;
                    if (message.content.startsWith(settings.prefix)) return;
                    if (message.author.bot) return;
                    message.delete();
                    message.reply("Le mot \"" + word + "\" est banni !")
                }
            })
        }
        

        if (message.channel.type === "dm") return client.emit("directMessage", message);

        if (message.author.bot) return;

        if (!dbUser) await client.createUser({
            guildID: message.member.guild.id,
            guildName: message.member.guild.name,
            userID: message.member.id,
            warnCount: 0,
            username: message.member.user.tag,
        });

        const expCd = Math.floor(Math.random() * 19) + 1;
        const expToAdd = Math.floor(Math.random() * 25) + 10;

        if (expCd >= 8 && expCd <= 11) {
            await client.addExp(client, message.member, expToAdd)
        }

        const userLevel = Math.floor(0.1 * Math.sqrt(dbUser.experience));

        if (dbUser.level < userLevel) {
            message.author.send(`Bravo tu viens de monter au niveau ***${userLevel}*** !`);
            client.updateUser(message.member, { level: userLevel });
        };



        if (!message.content.startsWith(settings.prefix)) return;




        const args = message.content.slice(settings.prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
        const user = message.mentions.users.first();


        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
        if (!command) return;


        if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("Tu ne possède pas les permissions pour éxécuter cette commande");

        if (command.help.args && !args.length) {
            let noArgsReply = `Il nous faut des arguments pour cette commande, ${message.author}`;
            if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande : \`${settings.prefix}${command.help.name} ${command.help.usage}\``
            return message.channel.send(noArgsReply);
        }

        if (command.help.isUserAdmin && !user) return message.reply('Il faut mentionner un utilisateur.');


        if (command.help.isUserAdmin && message.guild.member(message.mentions.users.first()).hasPermission('BAN_MEMBERS')) return message.reply("Cet utilisateur est protégé par ses privilèges sociaux");


        if (!client.cooldowns.has(command.help.name)) {
            client.cooldowns.set(command.help.name, new Collection());
        }

        const timeNow = Date.now();
        const tStamps = client.cooldowns.get(command.help.name);
        const cdAmount = (command.help.cooldowns || 3) * 1000;

        if (tStamps.has(message.author.id)) {
            const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

            if (timeNow < cdExpirationTime) {
                timeLeft = (cdExpirationTime - timeNow) / 1000;
                return message.delete(), message.reply(`Merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande \`${command.help.name}\`.`), setTimeout(function() { message.channel.bulkDelete(1); }, 3000);;
            }
        }

        tStamps.set(message.author.id, timeNow);
        setTimeout(() => tStamps.delete(message.author.id), cdAmount);

        command.run(client, message, args, settings, dbUser);
    } catch (err) {
        console.log("erreur message.js")

    }
};