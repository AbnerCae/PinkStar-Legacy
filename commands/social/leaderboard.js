module.exports = {
	name: 'leaderboard',
	aliases: ['lb'],
	description: 'Rankin de Todos',
	code: `
	$userLeaderboard[xpRank;$replaceText[#{top};.;]  - {username}: {value}]
	`
};
