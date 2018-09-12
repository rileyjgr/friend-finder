// node-modules
const express    = require('express');

const morgan     = require('morgan');

//start the app
const app  = express();

app.use(morgan('dev'));


// Router for html files
const htmlRoute = require('./app/routing/htmlRoute.js');
    htmlRoute(app);

// Router for api
const apiRoute = require('./app/routing/apiRoute.js');
    apiRoute(app);


const port = process.env.PORT || 3000;

app.listen(port);
console.log('Server listening at: ' + port);
