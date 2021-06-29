const mongoose = require("mongoose");
const { Guild, User } = require("../models/index");



module.exports = async client => {
   try{
    client.createGuild = async guild => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
        const createGuild = await new Guild(merged);
        createGuild.save().then(g => console.log(`Nouveau serveur -> ${g.guildName}`));
    };
    client.deleteGuild = async guild => {
        const merged = Object.assign(guild);
        const deleteGuild = await new Guild(merged);
        deleteGuild.deleteOne().then(g => console.log(`Serveur Supprimé -> ${g.guildName}`));
    };
    
    client.getGuild = async guild => {
        const data = await Guild.findOne({ guildID: guild.id });
        if (data) return data;
        return client.config.DEFAULTSETTINGS;
    };

    client.updateGuild = async (guild, settings) => {
        let data = await client.getGuild(guild);
        if (typeof data !== "object") data = {};
        for (const key in settings) {
            if (data[key] !== settings[key]) data[key] = settings[key];
        }
        return data.updateOne(settings);
       };

   

    client.addToArray = async (guild, object) =>
    {
        let data = await client.getGuild(guild);
        await data.roleArray.addToSet(object);
        data.save();
        
    };

       

//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------



    client.createUser = async user => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
        const createUser = await new User(merged);
        createUser.save().then(u => console.log(`Nouvel Utilisateur -> ${u.username}`));
    };
    
    client.getUser = async user => {
        const data = await User.findOne({ userID: user.id });
        if (data) return data;
        else return ;
    };

    client.getUsers = async guild => {
        const data = await User.find({ guildID: guild.id });
        if (data) return data;
        else return ;
    };


    client.updateUser = async (user, settings) => {
        let data = await client.getUser(user);
        if (typeof data !== "object") data = {};
        for (const key in settings) {
            if (data[key] !== settings[key]) data[key] = settings[key];
        }
        return data.updateOne(settings);
    };

    client.addExp = async (client, member, exp) => {
        const userToUpdate = await client.getUser(member);
        const updatedExp = userToUpdate.experience + exp;
        await client.updateUser(member, { experience : updatedExp });
    };

    client.removeExp = async (client, member, exp) => {
        const userToUpdate = await client.getUser(member);
        const updatedExp = userToUpdate.experience - exp;
        await client.updateUser(member, { experience : updatedExp });
    };
    client.addWarn = async (client, member, warn) => {
        const userToUpdate = await client.getUser(member);
        const updatedWarn = userToUpdate.warnCount + warn;
        await client.updateUser(member, { warnCount : updatedWarn });
    };

    client.removeWarn = async (client, member, warn) => {
        const userToUpdate = await client.getUser(member);
        const updatedWarn = userToUpdate.warnCount - warn;
        await client.updateUser(member, { warnCount : updatedWarn });
    };

} catch(err){
    console.log("Erreur function.js");
}
};