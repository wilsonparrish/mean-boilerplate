// here we handle actions for specific routes and verbs
var User = require('mongoose').model('User');


exports.postUser = function (req, res, next) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) res.send(err);
        else res.json(user);
    });
};


exports.getUsers = function (req, res) {
    User.find(function (err, users) {
        if (err) res.send(err);
        else res.json(users);
    });
};


exports.getUser = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) res.send(err);
        else res.json(user);
    });
};


exports.putUser = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) res.send(err);
        else {
            user.firstName = req.body.firstName;
            user.save(function (err) {
                if (err) res.send(err);
                else res.json({ 'message': 'user updated!' });
            });
        }
    });
};


exports.deleteUser = function (req, res) {
    User.remove({ _id: req.params.user_id }, function (err, user) {
        if (err) res.send(err);
        else res.json({ 'message': 'user deleted!' });
    });
};