exports.render = function (req, res) {

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