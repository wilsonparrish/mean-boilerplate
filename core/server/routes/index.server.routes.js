module.exports = function (app) {
    var controller = require('../controllers/index.server.controller');

    app.route('/')
        .get(controller.angularApp);

    app.route('/test')
        .get(controller.testView);

    app.route('/destroy')
        .get(controller.destroySession);
};