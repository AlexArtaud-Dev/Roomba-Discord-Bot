module.exports = async (client, messageReaction, user) =>
{
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;

    const settings = await client.getGuild(message.guild);

    try {

        if (member.user.bot) return;

        if (messageReaction.partial) {
            await messageReaction.fetch();
            return;
        }

        if (emoji && message.channel.id === settings.accesChannel) {
            const defaultRole = message.guild.roles.cache.get(settings.defaultRole);
            if (!isNaN(settings.accessEmote)) {
                const customEmojis = message.guild.emojis.cache.get(settings.accessEmote);
                if (emoji === customEmojis.name) {
                    member.roles.remove(defaultRole);
                    member.send(`Le rôle ${defaultRole.name} vous a été retiré avec succès !`);
                }
            } else {
                if (emoji === settings.accessEmote) {
                    member.roles.remove(defaultRole);
                    member.send(`Le rôle ${defaultRole.name} vous a été retiré avec succès !`);
                }
            }
        }

        if (emoji && message.channel.id === settings.roleChannel) {
            const roleArrayMapper = settings.roleArray;
            roleArrayMapper.map((role) =>
            {
                const roleToAdd = message.guild.roles.cache.get(role.roleID);
                if (!isNaN(role.roleEmote)) {
                    const customEmojis = message.guild.emojis.cache.get(role.roleEmote);
                    if (emoji === customEmojis.name) {
                        member.roles.remove(roleToAdd);
                        member.send(`Le rôle ${roleToAdd.name} vous a été retiré avec succès !`);
                    }
                } else {
                    if (emoji === role.roleEmote) {
                        member.roles.remove(roleToAdd);
                        member.send(`Le rôle ${roleToAdd.name} vous a été retiré avec succès !`);
                    }
                }
            })
        }



    } catch (err) {
        
    }


}