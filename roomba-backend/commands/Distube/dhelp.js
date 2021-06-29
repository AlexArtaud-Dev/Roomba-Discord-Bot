const {MESSAGES} = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const distube = new MessageAttachment('./assets/img/DisTube.png');
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');


module.exports.run = (client, message, args, settings) => {



        if (!args.length) {
            const categ = "distube"
            const category = categ;

            const embed = new MessageEmbed()
                .setTitle(`Distube : `)
                .setColor("#79d83a")
                .attachFiles(distube)
                .setThumbnail('attachment://DisTube.png')
                .setDescription(`Informations sur une commande :\n \`${settings.prefix}dhelp [command_name]\` \nListe des commandes Distube : \n\n ${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => `\`${cmd.help.name}\``).join(', ').replace("`dhelp`","")}`);

            return message.delete(),message.channel.send(embed);

        }else {
            const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
            const embed = new MessageEmbed()
                .setColor("#79d83a")
                .setTitle(`Commande : \`${command.help.name}\``)
                .attachFiles(distube)
                .setThumbnail('attachment://DisTube.png')
                .addField("Description", `${command.help.description}`)
                .addField("Cooldown", `${command.help.cooldowns} secondes`)
                .addField("Utilisation", command.help.usage ? `${settings.prefix}${command.help.name} ${command.help.usage}` :`${settings.prefix}${command.help.name}`, true)

            if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(", ")}`,true)
            return message.delete(),message.channel.send(embed);
        }

};
module.exports.help = MESSAGES.COMMANDS.DISTUBE.DHELP;