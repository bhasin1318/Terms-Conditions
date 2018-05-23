var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var path    = require("path");

app.get('/', function (req, res) {
	console.log("")	
});

app.get('/termsAndConditions', function (req, res) {
	res.sendFile(path.join(__dirname+'/public/termsAndConditions/tnc.html'))	
});

app.get('/privacyPolicy', function (req, res) {
	res.sendFile(path.join(__dirname+'/public/privacyPolicy/privacy.html'))	
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});