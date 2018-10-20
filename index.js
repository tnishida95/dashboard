// Express
var express = require('express');
var app = express();
var port = process.env.PORT || 2000;

var serv = require('http').Server(app);
app.get('/',function(req, res) {
	res.sendFile(__dirname + '/index.html');
});
app.use('/',express.static(__dirname + '/'));
serv.listen(port);
console.log(`Server started listening on port ${port}.`);

//const calendar = require('./calendar');
