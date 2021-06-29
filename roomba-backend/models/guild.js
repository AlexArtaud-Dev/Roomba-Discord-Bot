const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    prefix: {
        "type": String,
        "default": defaults.prefix
    },
    accesChannel: {
        "type": String,
        "default": defaults.accesChannel
    },
    auditlogChannel: {
        "type": String,
        "default": defaults.auditlogChannel
    },
    logChannel: {
        "type": String,
        "default": defaults.logChannel
    },
    memberCountChannel: {
        "type": String,
        "default": defaults.memberCountChannel
    },
    musicChannel: {
        "type": String,
        "default": defaults.musicChannel
    },
    reportChannel: {
        "type": String,
        "default": defaults.reportChannel
    },
    roleChannel: {
        "type": String,
        "default": defaults.roleChannel
    },
    welcomeChannel: {
        "type": String,
        "default": defaults.welcomeChannel
    },
    welcomeMessage: {
        "type": String,
        "default": defaults.welcomeMessage
    },
    toDelete: {
        "type": Boolean,
        "default": false
    },
    banWordList: {
        "type": String,
        "default": ""
    },
    defaultRole: {
        "type": String,
        "default": ""
    },
    roleArray: {
        "type": Array,
    },
    banWordListActivation: {
        "type": Boolean,
        "default": false
    },
    accessEmote: {
        "type": String,
        "default": ""
    },





})

module.exports = mongoose.model("Guild", guildSchema);