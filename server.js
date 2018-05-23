var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var path    = require("path");

app.get('/', function (req, res) {
	console.log("")	
});

app.get('/about', function (req, res) {
	res.sendFile(path.join(__dirname+'/public/index.html'))	
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});