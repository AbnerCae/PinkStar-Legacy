const webCanary = require('./database/web/web.js');
const aoi = require('aoi.js');
const bot = new aoi.Bot({
	prefix: '..',
	token: process.env.TOKEN
});
bot.onMessage();
bot.loadCommands('./commands/');
webCanary();