// routes of our RESTful API
var usersController = require('../controllers/users.server.controller');

module.exports = function (app) {
    app.route('/api/users')
        .post(usersController.postUser)
        .get(usersController.getUsers);

    app.route('/api/users/:user_id')
        .get(usersController.getUser)
        .put(usersController.putUser)
        .delete(usersController.deleteUser);
};