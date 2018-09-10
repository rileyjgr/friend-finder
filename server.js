const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app  = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/public/home.html'));
});


app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname + '/app/public/survey.html'));
});


//not really sure if i need this on this js file
// app.use(morgan('dev'));
// app.use(bodyParser.json());

const port = process.env.PORT || 27017;

app.listen(port);
console.log('Server listening at: ' + port);
