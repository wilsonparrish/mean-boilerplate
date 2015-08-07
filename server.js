var express = require('express');
var app = express();

app.use('/', function (req, res) {
    res.send(req.param('name'));
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('listening on ' + port);
});

module.exports = app;
