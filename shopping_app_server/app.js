var express = require('express');

var images  = require('./controllers/images');

var app     = express();
var router  = express.Router();

app.use('/',              router);
app.use('/api/v1/images', images);

module.exports = app;