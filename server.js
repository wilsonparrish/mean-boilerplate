/// <reference path="typings/node/node.d.ts"/>
var express = require('./core/server/config/express');

var app = express();

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('listening on ' + port);
});
