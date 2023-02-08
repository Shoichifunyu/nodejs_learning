var http = require('http');

var server = http.createServer(function(request, response) {
    var parsed = require('url').parse(request.url, true);
    var strftime = require('strftime');
    var date = new Date(parsed.query.iso);
    var hour = parseInt(strftime('%H', date),10);
    var minute = parseInt(strftime('%M', date),10);
    var second = parseInt(strftime('%S', date),10);
    var unixtime = date.getTime();
    response.writeHead(200, {'content-type' : 'application/json'})
    if (parsed.pathname === "/api/parsetime") {
        response.end(JSON.stringify({hour: hour, minute: minute, second: second}) + '\n');
        return;
    } else if (parsed.pathname === "/api/unixtime") {
        response.end(JSON.stringify({unixtime: unixtime}) + '\n');
        return;
    } else {
        response.end('Can`t find contents');
        return;
    }
});

server.listen(parseInt(process.argv[2]),10);