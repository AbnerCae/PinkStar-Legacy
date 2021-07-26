module.exports = {
	name: 'rank',
	aliases: [],
	description: 'Mostra informações do rank',
	code: `
	$attachment[https://api.avux.ga/rankcard?avatar=$replaceText[$userAvatar[$findMember[$message[1]]];.webp;.png]&username=$username[$findMember[$message[1]]]&discrim=$discriminator[$findMember[$message[1]]]&status=$status[$findMember[$message[1]]]&xpnow=$getUserVar[xpNow;$findMember[$message[1]]]&xpreq=$getUserVar[xpReq;$findMember[$message[1]]]&level=$getUserVar[level;$findMember[$message[1]]]&rank=$getLeaderboardInfo[xpRank;$findMember[$message[1]];user;top]]
	`
};