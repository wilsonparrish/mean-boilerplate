exports.render = function (req, res) {
    res.render('index', {
        title: 'This is a view!'
    });
};