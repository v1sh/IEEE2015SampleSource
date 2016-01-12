var exp = require('express');
var app = exp();

var http = require('http').Server(app);
var server = http.listen(3000);

var io = require('socket.io').listen(server);



app.get('/', function (req, res) {
		res.sendFile(__dirname + '/index.html');
		console.log(req.url);
});
app.get('/Index.js', function (req, res) {
		res.sendFile(__dirname + '/index.js');
		console.log(req.url);
});


io.sockets.on('connection', function (socket) {
	console.log("on connection");
    socket.on('send', function (data) {
		console.log("data received from client");
        io.sockets.emit('message', data);
    });
});