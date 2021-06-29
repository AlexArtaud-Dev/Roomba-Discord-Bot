const mongoose = require("mongoose");


const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    prefix: {
        "type": String,
    },
    accesChannel: {
        "type": String,
    },
    auditlogChannel: {
        "type": String,
    },
    logChannel: {
        "type": String,
    },
    memberCountChannel: {
        "type": String,
    },
    musicChannel: {
        "type": String,
    },
    reportChannel: {
        "type": String,
    },
    roleChannel: {
        "type": String,
    },
    welcomeChannel: {
        "type": String,
    },
    welcomeMessage: {
        "type": String,

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