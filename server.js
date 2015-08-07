var express = require('express');
var app = express();

app.use('/', function (req, res) {
    res.send('Hello, World!');
});

app.listen(5000);
console.log('server running at http://localhost:5000/');

module.exports = app;
