const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/', (request, response) => {
	response.sendFile(__dirname + '/home.html');
});

function webCanary() {
	app.listen(process.env.PORT, () => {
		console.log('Ready serverWeb()');
	});
}
module.exports = webCanary;