const { MESSAGES } = require("../../util/constants");
 
module.exports.run = async (client, message, args, settings) => {
    const getSetting = args[0];
    const newSetting = args.slice(1).join(" ");
    message.delete();
    
    switch(getSetting) {
        case "prefix": {
            if(newSetting) {
                await client.updateGuild(message.guild, { prefix: newSetting });
                return message.channel.send(`Prefix mis à jour: \`${settings.prefix}\` -> \`${newSetting}\``);
            }
            message.channel.send(`Prefix actuel: \`${settings.prefix}\``);
            break;
        }
        case "banWordListActivation": {
            if(newSetting) {
                await client.updateGuild(message.guild, { banWordListActivation: newSetting });
                return message.channel.send(`banWordListActivation mis à jour: \`${settings.banWordListActivation}\` -> \`${newSetting}\``);
            }
            message.channel.send(`banWordListActivation state: \`${settings.banWordListActivation}\``);
            break;
        }
        case "logChannel": {
            if(newSetting) {
                await client.updateGuild(message.guild, { logChannel: newSetting });
                return message.channel.send(`logChannel mis à jour: \`${settings.logChannel}\` -> \`${newSetting}\``);
            }
            message.channel.send(`logChannel actuel: \`${settings.logChannel}\``);
            break;
        }
        case "welcomeMessage": {
            if(newSetting) {
                await client.updateGuild(message.guild, { welcomeMessage: newSetting });
                return message.channel.send(`welcomeMessage mis à jour: \`${settings.welcomeMessage}\` -> \`${newSetting}\``);
            }
            message.channel.send(`welcomeMessage actuel: \`${settings.welcomeMessage}\``);
            break;
        }
        case "accesChannel": {
            if(newSetting) {
                await client.updateGuild(message.guild, { accesChannel: newSetting });
                return message.channel.send(`accesChannel mis à jour: \`${settings.accesChannel}\` -> \`${newSetting}\``);
            }
            message.channel.send(`accesChannel actuel: \`${settings.accesChannel}\``);
            break;
        }
        case "welcomeChannel": {
            if(newSetting) {
                await client.updateGuild(message.guild, { welcomeChannel: newSetting });
                return message.channel.send(`welcomeChannel mis à jour: \`${settings.welcomeChannel}\` -> \`${newSetting}\``);
            }
            message.channel.send(`welcomeChannel actuel: \`${settings.welcomeChannel}\``);
            break;
        }
        case "reportChannel": {
            if(newSetting) {
                await client.updateGuild(message.guild, { reportChannel: newSetting });
                return message.channel.send(`reportChannel mis à jour: \`${settings.reportChannel}\` -> \`${newSetting}\``);
            }
            message.channel.send(`roleChannel actuel: \`${settings.roleChannel}\``);
            break;
        }
        case "roleChannel": {
            if(newSetting) {
                await client.updateGuild(message.guild, { roleChannel: newSetting });
                return message.channel.send(`roleChannel mis à jour: \`${settings.roleChannel}\` -> \`${newSetting}\``);
            }
            message.channel.send(`roleChannel actuel: \`${settings.roleChannel}\``);
            break;
        }
        case "auditlogChannel": {
            if(newSetting) {
                await client.updateGuild(message.guild, { auditlogChannel: newSetting });
                return message.channel.send(`auditlogChannel mis à jour: \`${settings.auditlogChannel}\` -> \`${newSetting}\``);
            }
            message.channel.send(`auditlogChannel actuel: \`${settings.auditlogChannel}\``);
            break;
        }
        case "musicChannel": {
            if(newSetting) {
                await client.updateGuild(message.guild, { musicChannel: newSetting });
                return message.channel.send(`musicChannel mis à jour: \`${settings.musicChannel}\` -> \`${newSetting}\``);
            }
            message.channel.send(`musicChannel actuel: \`${settings.musicChannel}\``);
            break;
        }
        case "memberCountChannel": {
            if(newSetting) {
                await client.updateGuild(message.guild, { memberCountChannel: newSetting });
                return message.channel.send(`memberCountChannel mis à jour: \`${settings.memberCountChannel}\` -> \`${newSetting}\``);
            }
            message.channel.send(`memberCountChannel actuel: \`${settings.memberCountChannel}\``);
            break;
        }
        
    }
};
 
module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIG;