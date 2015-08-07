var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');


module.exports = function () {
    // generates the app object
    var app = express();


    // block of added environment dependant middleware
    // not sure if it works with heroku like this
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }
    else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }


    // this middleware will work no matter the environment
    app.use(bodyParser.urlencoded(
        {
            extended: true
        }));
    app.use(bodyParser.json());
    app.use(methodOverride());


    // here we set our templating engine
    // careful! the route is with respect of server.js
    app.set('views', './core/server/views');
    app.set('view engine', 'ejs');


    // aquí configuramos los archivos estáticos
    // OJO que hay que ponerlo después del rendering engine
    // la ruta para enlazar los recursos en las plantillas
    // empieza a partir de la carpeta static
    app.use(express.static('./core/client/static'));


    // we run the router object
    require('../routes/index.server.routes.js')(app);
    return app;
};