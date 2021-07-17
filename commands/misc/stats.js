const fs = require('fs');
let raw = fs.readFileSync('./package.json');
let pkage = JSON.parse(raw);

module.exports = {
	name: 'stats',
	aliases: ['status'],
	description: 'Informações como status do websocket e outras coisas',
	code: `
	$thumbnail[https://media.discordapp.net/attachments/854522935527473173/865744181418524672/Info.png]
	$addField[<:npm:863982999087743016> Dependências;Aoi.js: $packageVersion\nExpress: $replaceText[${pkage.dependencies.express};^;]\nNode: $replaceText[$nodeVersion;v;];yes]
	$addField[☕ Tempo Ativo:;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[ $djsEval[Math.floor(client.uptime / 86400000);;yes] dias, $djsEval[Math.floor(client.uptime / 3600000) % 24;;yes] horas, $djsEval[Math.floor(client.uptime / 60000) % 60;;yes] minutos e $djsEval[Math.floor(client.uptime / 1000) % 60;;yes] segundos; 1 dias; 1 dia]; 1 horas; 1 hora]; 1 minutos; 1 minuto]; 1 segundos; 1 segundo]; 0 dias,;]; 0 horas,;]; 0 minutos,;];e 0 segundos;];yes]
	$addField[💻 Latências:; Websocket: $pingms\nDatabase: $dbPingms;yes]
	$color[#A5B0B3]
	$addTimestamp
	`
};