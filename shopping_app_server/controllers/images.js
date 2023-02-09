var express = require('express');
var router  = express.Router();

var fs       = require('fs');
var multer   = require('multer');
var imageDir = 'uploads/';
var upload   = multer({"dest": imageDir});

router.get('/', function(req, res) {
    fs.readdir(imageDir, function(err, files) {
      if(err) {
        res.status(500).send();
      } else {
        res.json({"files": files});
      }
    });
});

router.post('/', upload.single('file'), function(req, res) {
    var image = req.file;
    if(!image) {
      res.status(400).send();
    } else {
      res.send();
    }
});

module.exports = router;