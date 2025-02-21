const webCanary = require('./database/web/web.js');
const aoi = require('aoi.js');
const bot = new aoi.Bot({
	prefix: '..',
	token: process.env.TOKEN
});
bot.onMessage();
bot.loadCommands('./commands/');
bot.variables({
	levelChannel: '',
	levelOrder: '1/2/',
	levelRoles: '866355485149495316/866355539005145118/',
	xpNow: '0',
	xpReq: '100',
	level: '0',
	xpRank: '0',
	background: '',
	color: '#FFF'
});
webCanary();