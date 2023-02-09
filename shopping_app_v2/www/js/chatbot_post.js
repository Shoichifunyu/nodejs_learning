var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);
var fs = require('fs');
var url = require('url');

const indexPage = fs.readFileSync('../index.html', 'UTF-8');

app.get("/", function(request, response) {
    // if (request.method === 'GET') {
        var url_parts = url.parse(request.url, true);
        if (url_parts.pathname === '../index.html') {
            response.writeHead(200, {'content-type' : 'text/html'})
            response.write(indexPage);
            response.end();       
        } else {
            response.end('no page found');
        }
});

server.listen(8000);