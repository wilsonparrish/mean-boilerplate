/// <reference path="typings/node/node.d.ts"/>
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;


var express = require('./core/server/config/express');
var app = express();


app.listen(port, function () {
    console.log('listening on ' + port);
});


module.exports = app;