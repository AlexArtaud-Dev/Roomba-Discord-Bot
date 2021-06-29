const fetch = require('node-fetch');
const { TOKEN } = require("../../config");
const DISCORD_API = 'http://discord.com/api/v6';


async function getBotGuilds() {
    const response = await fetch(`${DISCORD_API}/users/@me/guilds`, {
        method: 'GET',
        headers: {
            Authorization: `Bot ${TOKEN}`
        }
    });
    return response.json();
}

async function getGuildRoles(guildId) {
    const response = await fetch(`${DISCORD_API}/guilds/${guildId}/roles`, {
        method: 'GET',
        headers: {
            Authorization: `Bot ${TOKEN}`
        }
    });
    return response.json();
}

async function getGuildChannels(guildId) {
    const response = await fetch(`${DISCORD_API}/guilds/${guildId}/channels`, {
        method: 'GET',
        headers: {
            Authorization: `Bot ${TOKEN}`
        }
    });
    return response.json();
}

module.exports = {getBotGuilds, getGuildRoles, getGuildChannels};