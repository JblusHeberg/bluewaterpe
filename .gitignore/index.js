const Discord = require('discord.js');

const client = new Discord.Client()

var prefix = "b!";

client.login("NDkyMzgxMTgyMjk4ODE2NTIy.DpaM1g.gZ671gR3cdtsGfuiJ9rJaoixoNg");

client.on("ready", () => {
	console.log("[JblusCode] You have Enable");
	client.user.setGame("use b!help pour voir toute les commands");
});

client.on('message', message => {
	if (message.content === "hey") {
		message.reply("hey !");
		console.log('Une command a bien était effectuer !!');
	}
