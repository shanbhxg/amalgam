var mongojs = require("mongojs");
var db = mongojs('localhost:27017/myGame', ['account','progress']);

var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/index.html');
});
app.use('/',express.static(__dirname + '/'));

serv.listen(process.env.PORT || 2000);
console.log("Server started.");

var SOCKET_LIST = {};
app.use(express.static(__dirname + '/'));
