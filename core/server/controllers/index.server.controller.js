exports.testView = function (req, res) {
    // we are testing our cookies here...
    if (req.session.lastVisit) {
        console.log('last seen...', req.session.lastVisit);
    }
    req.session.lastVisit = new Date();

    // now the serious stuff
    res.render('index', {
        title: 'This is a view!'
    });
};

exports.destroySession = function (req, res) {
    // this will clean the cookie
    req.session.destroy();
    res.send('Session destroyed!');
};

exports.angularApp = function (req, res) {
    // this controller renders the Angular app
    // we need to configure the root of static resources
    // to be this directory as well, in express.js
    res.sendFile('index.html', { root: 'core/client' });
};