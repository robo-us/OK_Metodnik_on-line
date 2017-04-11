var express	= require('express');
var path = require('path');
var app = express();

app.use(express.static('klient'));
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + './index.html'));
});

app.use('serwer', express.static('serwer'));
app.get('/serwer', function(req, res) {
	res.sendFile(path.join(__dirname + '/serwer/index.html'));
});

app.listen(3000, function() {
	console.log('Serwer działa prawidłowo');
});