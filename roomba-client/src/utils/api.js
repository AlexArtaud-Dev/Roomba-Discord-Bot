import axios from 'axios';

export function getUserDetails() {
    return axios.get('http://90.112.182.166:3000/api/auth', { withCredentials: true });
}

export function getGuilds() {
    return axios.get('http://90.112.182.166:3000/api/discord/guilds', { withCredentials: true });
}

export function getGuildConfig(guildId) {
    return axios.get(`http://90.112.182.166:3000/api/discord/guilds/${guildId}/config`, { withCredentials: true });
}

export function updateGuildPrefix(guildId, prefix) {
    return axios.put(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/prefix`, {
            prefix
        }, {
            withCredentials: true
        }
    );
}

export function updateToDelete(guildId, toDelete) {
    return axios.put(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/toDelete`, {
            toDelete
        }, {
            withCredentials: true
        }
    );
}

export function updateGuildBannedWordList(guildId, banWordList) {
    return axios.put(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/banWordList`, {
            banWordList
        }, {
            withCredentials: true
        }
    );
}

export function updateDefaultRole(guildId, defaultRole) {
    return axios.put(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/roles/default`, {
            defaultRole
        }, {
            withCredentials: true
        }
    );
}
export function getGuildRoles(guildId) {
    return axios.get(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/roles`, {
            withCredentials: true,
        }

    );
}
export function updateMusicChannel(guildId, musicChannel) {
    return axios.put(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/channels/musicChannel`, {
            musicChannel
        }, {
            withCredentials: true
        }
    );
}
export function updateAccesChannel(guildId, accesChannel) {
    return axios.put(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/channels/accesChannel`, {
            accesChannel
        }, {
            withCredentials: true
        }
    );
}
export function updateAuditlogChannel(guildId, auditlogChannel) {
    return axios.put(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/channels/auditlogChannel`, {
            auditlogChannel
        }, {
            withCredentials: true
        }
    );
}

export function updateLogChannel(guildId, logChannel) {
    return axios.put(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/channels/logChannel`, {
            logChannel
        }, {
            withCredentials: true
        }
    );
}

export function updateMemberCountChannel(guildId, memberCountChannel) {
    return axios.put(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/channels/memberCountChannel`, {
            memberCountChannel
        }, {
            withCredentials: true
        }
    );
}

export function updateReportChannel(guildId, reportChannel) {
    return axios.put(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/channels/reportChannel`, {
            reportChannel
        }, {
            withCredentials: true
        }
    );
}

export function updateRoleChannel(guildId, roleChannel) {
    return axios.put(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/channels/roleChannel`, {
            roleChannel
        }, {
            withCredentials: true
        }
    );
}

export function updateWelcomeChannel(guildId, welcomeChannel) {
    return axios.put(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/channels/welcomeChannel`, {
            welcomeChannel
        }, {
            withCredentials: true
        }
    );
}


export function getGuildChannels(guildId) {
    return axios.get(
        `http://90.112.182.166:3000/api/discord/guilds/${guildId}/channels`, {
            withCredentials: true,
        }

    );
}