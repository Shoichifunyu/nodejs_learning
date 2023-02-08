var strftime = require('strftime')
var net = require('net')
let now = new Date();
server = net.createServer(function (socket) {
    socket.end(strftime('%Y-%m-%d %H:%M', now)+'\n');
});

server.listen(process.argv[2]);