const {MESSAGES} = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const weather = require('weather-js');


module.exports.run = (client, message, args) => {
    message.delete();
  
  if (!args.length) {
    return message.channel.send("Veuillez fournir une localisation pour la météo !")
  }


  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
    
   
  //  console.log(JSON.stringify(result, null, 2));
    
try {

    let embed = new MessageEmbed()
      .setTitle(`Météo - ${result[0].location.name}`)
      .setColor("2C75FF")
      .setDescription("La température peut ne pas être très précise parfois")
      .addField("Temperature", `${result[0].current.temperature}°C`, true)
      .addField("T° Ressentie", `${result[0].current.feelslike}°C`, true)
      .addField("Ciel", `${result[0].current.skytext}`, true)
      .addField("Humidité", `${result[0].current.humidity}%`, true)
      .addField("Vent", `${result[0].current.windspeed}`, true)
      .addField("Jour", `${result[0].current.day}`, true)
      .setThumbnail(result[0].current.imageUrl);

      message.channel.send(embed);
}catch(err) {
  return message.channel.send("Impossible de trouver les informations de cette localisation !")
}
  });

};

module.exports.help = MESSAGES.COMMANDS.MISC.WEATHER;
