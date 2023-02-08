var http = require('http');
var fs = require('fs');
const { Socket } = require('dgram');
var server = http.createServer(function(request, response) {
    response.writeHead(200, {'content-type' : 'text/plain'});
    fs.readFile(process.argv[3], 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        response.end(data);
    })
})

server.listen(process.argv[2]);