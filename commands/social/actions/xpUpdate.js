module.exports = {
	name: '$alwaysExecute',
	description: 'Sistema de Xp Up',
	code: `
	$setUserVar[xpNow;$sum[$getUserVar[xpNow];$random[4;8]]]
	$setUserVar[xpRank;$sum[$getUserVar[xpRank];$random[4;8]]]
	$cooldown[7s]
	$onlyIf[$isBot[$authorID]!=true;]
	`
};