/// <reference path="typings/node/node.d.ts"/>
var express = require('express');
var app = express();

app.use('/', function (req, res) {
    res.send('Hello World');
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('listening on ' + port);
});

module.exports = app;
