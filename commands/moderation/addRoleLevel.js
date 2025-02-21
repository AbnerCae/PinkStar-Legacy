module.exports = {
	name: 'addrole',
	aliases: ['addRole'],
	usage: 'addRole adicionar/remover <level> <role>',
	description: 'Adicione um cargo para subir de nível!',
	code: `
	$if[$message[1]==adicionar]
	$setservervar[levelOrder;$getservervar[levelOrder]$message[2]/]
	$setservervar[levelRoles;$getservervar[levelRoles]$findrole[$messageslice[2]]/]
	Adicionado com sucesso $rolename[$findrole[$messageslice[2]]] ao nível \`$message[2]\`
	$argscheck[>2;Insira pelo menos 3 argumentos! lrole <add/remove> <level> <role>]
	
	$elseif[$message[1]==remover]
	
	$setservervar[levelOrder;$replacetext[$getservervar[levelOrder];$message[2]/;;1]]
	$setservervar[levelRoles;$replacetext[$getservervar[levelRoles];$splittext[$findtextsplitindex]/;;1]]
	Removido com sucesso a função do nível \`$message[2]\`
	$onlyif[$findtextsplitindex[$message[2]]!=0;Não foi possível encontrar a função!]
	$textsplit[$getservervar[levelOrder];/]
	$endelseif
	$else
	Use \`adicionar\` ou \`remover\`!
	$endif
	$onlyif[$isnumber[$message[2]]==true;Não é um número válido!]
	$onlyperms[manageserver;Permissões insuficientes!]`
};
