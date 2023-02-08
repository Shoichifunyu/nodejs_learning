var fs = require('fs');
const { userInfo } = require('os');
var path = require('path');
dir = process.argv[2];
var extname = process.argv[3];
function dirreading(dir) {
    if (fs.stat( dir,  function(err, lists) {
        if (err) {
            //console.log(err);
            }
        fs.readdir(dir, function(err, lists) { 
        if (err) {
            //console.log(err);
            }
        lists.forEach(function (item) {
                if (path.extname(item) === '.' + extname) {
                    console.log(item);
                } else if (path.extname(item) === "") {
                    dir = path.join(dir, item);
                    dirreading(dir);
                    dir = path.join(dir, "../");
                } else {
                    ;
                }
            })
        })
        }));
    }
dirreading(dir);
return;