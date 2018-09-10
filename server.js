// node-modules
const express    = require('express');

const morgan     = require('morgan');

//start the app
const app  = express();
app.use(morgan('dev'));


// my js files
const htmlRoute = require('./app/routing/htmlRoute.js');
    htmlRoute(app);

const apiRoute = require('./app/routing/apiRoute.js');
    apiRoute(app);

const friendsApi = require('./app/data/friends.js');
    friendsApi(app);

const port = process.env.PORT || 3000;

app.listen(port);
console.log('Server listening at: ' + port);
