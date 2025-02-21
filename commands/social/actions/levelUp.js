module.exports = {
	name: '$alwaysExecute',
	description: 'Sistema de Level Up',
	code: `
	$giveRole[$authorID;$advancedTextSplit[$getServerVar[levelRoles];/;$findTextSplitindex[$getUserVar[level]]]]
	$textSplit[$getServerVar[levelOrder];/]
	$setUserVar[level;$sum[$getUserVar[level];1]]
	$setUserVar[xpReq;$truncate[$sum[$getUserVar[xpReq];$math[$getuservar[xpReq]*1/2]]]]
	$setUserVar[xpNow;0]
	$channelSendMessage[$replacetext[$replacetext[$checkcondition[$getservervar[levelChannel]==];true;$channelID];false;$getservervar[levelChannel]];
	{author:$userTag Subiu de Nivel!:$authorAvatar}
	{thumbnail:$userAvatar}
	{description:$username passou para o nível $sum[$getUserVar[level];1]!}
	{timestamp}
	{color:PURPLE}]
	
	$onlyIf[$getUserVar[xpNow]>=$getUserVar[xpReq;]
    `
};
