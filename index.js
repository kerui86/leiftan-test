const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", () => {
   console.log("Listo, mi señora!");
});

var prefix = config.prefix;

bot.on("message", (message) => {
  /*if (message.content.startsWith("Nevra" || "nevra")) {
    message.reply("Deja de acosar a mi hermano, ¡¡ladrona!!");
  } else
  if (message.content.startsWith(prefix + "hola")) {
    message.reply("Hola ¿Tienes algún cotilleo nuevo?");  
  }  */
  if (message.content === prefix + "pre") {
    message.channel.send("<@&635788317803151360> Preparaos, pronto llenaremos todo de oscuridad");
  }
  if (message.content === prefix + "ata") {
    message.channel.send("<@&635788317803151360> Adelante, hacer que me sienta orgulloso. No olvides confirmar el ataque a continuación");
  }
});
bot.login(process.env.token);      