module.exports = async (client, guild) => {
  const settings = await client.getGuild(guild);
  
  const toDeleteGuild = {
    _id: settings._id,
    guildID: guild.id,
    guildName: guild.name
};
  
await client.deleteGuild(toDeleteGuild);
  
};