const router = require('express').Router();
const { getBotGuilds, getGuildRoles, getGuildChannels } = require('../utils/api')
const User = require('../database/schemas/User');
const { getMutualGuilds} = require('../utils/utils')
const { Guild } = require("../../models/index");


router.get('/guilds', async (req,res) => {
    const guilds = await getBotGuilds();
    const user = await User.findOne( {discordId: req.user.discordId} );
    if (user) {
        const userGuilds = user.get( 'guilds' );
        const mutualGuilds = getMutualGuilds( userGuilds, guilds );
        res.send(mutualGuilds);
    }else{
        return res.status(401).send( { msg: 'Unauthorized' });
    }
});

router.put('/guilds/:guildId/prefix', async(req,res) => {
    const { prefix } = req.body;
    const { guildId } = req.params;
    if (!prefix) return res.status({ msg: 'Prefix Required' });
    const update = await Guild.findOneAndUpdate( { guildID: guildId }, { prefix: prefix}, { new:true });
    return update ? res.send(update) : res.status(400).send({ msg: 'Could not find document' });
    
})

router.put('/guilds/:guildId/banWordList', async(req,res) => {
    const { banWordList } = req.body;
    const { guildId } = req.params;
    if (!banWordList) return res.status({ msg: 'banWordList Required' });
    const update = await Guild.findOneAndUpdate( { guildID: guildId }, { banWordList: banWordList}, { new:true });
    return update ? res.send(update) : res.status(400).send({ msg: 'Could not find document' });
    
})

router.get('/guilds/:guildId/config', async (req,res) => {
    const { guildId } = req.params;
    const config = await Guild.findOne( { guildID: guildId } );
    return config ? res.send(config) : res.status(404).send( { msg: 'Not Found' } );
})



router.get('/guilds/:guildId/roles', async (req,res) => {
    const { guildId } = req.params;
    try {
        const roles = await getGuildRoles(guildId);
        res.send(roles);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
})



router.put('/guilds/:guildId/roles/default', async (req,res) =>{
    const { defaultRole } = req.body;
    if (!defaultRole) return res.status(400).send({ msg: "Bad Request" });
    const { guildId } = req.params;
    try {
        const update = await Guild.findOneAndUpdate({ guildID: guildId }, { defaultRole: defaultRole }, { new:true });
        return update ? res.send(update) : res.status(400).send({ msg: "Badd Request" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }  
})

router.get('/guilds/:guildId/channels', async (req,res) => {
    const { guildId } = req.params;
    try {
        const channels = await getGuildChannels(guildId);
        res.send(channels);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
})
router.put('/guilds/:guildId/channels/accesChannel', async (req,res) =>{
    const { accesChannel } = req.body;
    if (!accesChannel) return res.status(400).send({ msg: "Bad Request" });
    const { guildId } = req.params;
    try {
        const update = await Guild.findOneAndUpdate({ guildID: guildId }, { accesChannel: accesChannel }, { new:true });
        return update ? res.send(update) : res.status(400).send({ msg: "Badd Request" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }  
})

router.put('/guilds/:guildId/channels/auditlogChannel', async (req,res) =>{
    const { auditlogChannel } = req.body;
    if (!auditlogChannel) return res.status(400).send({ msg: "Bad Request" });
    const { guildId } = req.params;
    try {
        const update = await Guild.findOneAndUpdate({ guildID: guildId }, { auditlogChannel: auditlogChannel }, { new:true });
        return update ? res.send(update) : res.status(400).send({ msg: "Badd Request" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }  
})

router.put('/guilds/:guildId/channels/logChannel', async (req,res) =>{
    const { logChannel } = req.body;
    if (!logChannel) return res.status(400).send({ msg: "Bad Request" });
    const { guildId } = req.params;
    try {
        const update = await Guild.findOneAndUpdate({ guildID: guildId }, { logChannel: logChannel }, { new:true });
        return update ? res.send(update) : res.status(400).send({ msg: "Badd Request" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }  
})

router.put('/guilds/:guildId/channels/memberCountChannel', async (req,res) =>{
    const { memberCountChannel } = req.body;
    if (!memberCountChannel) return res.status(400).send({ msg: "Bad Request" });
    const { guildId } = req.params;
    try {
        const update = await Guild.findOneAndUpdate({ guildID: guildId }, { memberCountChannel: memberCountChannel }, { new:true });
        return update ? res.send(update) : res.status(400).send({ msg: "Badd Request" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }  
})

router.put('/guilds/:guildId/channels/reportChannel', async (req,res) =>{
    const { reportChannel } = req.body;
    if (!reportChannel) return res.status(400).send({ msg: "Bad Request" });
    const { guildId } = req.params;
    try {
        const update = await Guild.findOneAndUpdate({ guildID: guildId }, { reportChannel: reportChannel }, { new:true });
        return update ? res.send(update) : res.status(400).send({ msg: "Badd Request" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }  
})

router.put('/guilds/:guildId/channels/roleChannel', async (req,res) =>{
    const { roleChannel } = req.body;
    if (!roleChannel) return res.status(400).send({ msg: "Bad Request" });
    const { guildId } = req.params;
    try {
        const update = await Guild.findOneAndUpdate({ guildID: guildId }, { roleChannel: roleChannel }, { new:true });
        return update ? res.send(update) : res.status(400).send({ msg: "Badd Request" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }  
})
router.put('/guilds/:guildId/channels/welcomeChannel', async (req,res) =>{
    const { welcomeChannel } = req.body;
    if (!welcomeChannel) return res.status(400).send({ msg: "Bad Request" });
    const { guildId } = req.params;
    try {
        const update = await Guild.findOneAndUpdate({ guildID: guildId }, { welcomeChannel: welcomeChannel }, { new:true });
        return update ? res.send(update) : res.status(400).send({ msg: "Badd Request" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }  
})
router.put('/guilds/:guildId/toDelete', async (req,res) =>{
    const { toDelete } = req.body;
    if (!toDelete) return res.status(400).send({ msg: "Bad Request" });
    const { guildId } = req.params;
    try {
        const update = await Guild.findOneAndUpdate({ guildID: guildId }, { toDelete: toDelete }, { new:true });
        return update ? res.send(update) : res.status(400).send({ msg: "Badd Request" });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }  
})


router.put('/guilds/:guildId/channels/musicChannel', async (req,res) =>{
    const { musicChannel } = req.body;
    if (!musicChannel) return res.status(400).send({ msg: "Bad Request" });
    const { guildId } = req.params;
    try {
        const update = await Guild.findOneAndUpdate({ guildID: guildId }, { musicChannel: musicChannel }, { new:true });
        return update ? res.send(update) : res.status(400).send({ msg: "Badd Request" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }  
})



module.exports = router;