var http = require('http');
var bl = require('bl');

function testFunc(callback01, callback02, callback03) {
    setTimeout(function() {
        setTimeout(function() {
            setTimeout(function() {
                callback01;
            }, 1000),
            callback02;
        }, 1000),
        callback03;
    }, 1000)
};

function callback(target) {http.get(target, function(response) {
    response.pipe(bl(function(err, data){
        console.log(data.toString());
    }));
})};

testFunc(callback(process.argv[2]), callback(process.argv[3]), callback(process.argv[4]));