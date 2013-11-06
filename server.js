var http = require('http');
var ecstatic = require('ecstatic');

var server = http.createServer(ecstatic({
    root: __dirname,
    autoIndex: true,
    gzip: true
}));
var io = require('socket.io').listen(server);

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

io.sockets.on('connection', function (socket) {
    setInterval(function () {
        socket.emit("vote", "alt" + getRandomInt(1, 3));
    }, 2000);
});


server.listen(process.env.PORT || 3000);