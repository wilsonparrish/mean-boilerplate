/// <reference path="typings/node/node.d.ts"/>
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./core/server/config/express');

var app = express();

app.listen(5000);

module.exports = app;

console.log('server running at http://localhost:5000/');





// var port = process.env.PORT || 5000;
//
// app.listen(port, function () {
//     console.log('listening on ' + port);
// });
