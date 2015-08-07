/// <reference path="typings/node/node.d.ts"/>
// setting the correct environmet
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;

// bringing the express object from config
var express = require('./core/server/config/express');
var app = express();


app.listen(port, function () {
    console.log('listening on ' + port);
});


module.exports = app;