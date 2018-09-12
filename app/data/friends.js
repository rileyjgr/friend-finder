const bodyParser = require('body-parser');

const dataArray = [];

const throwJson = (app) => {

    // sets the url
    app.get('/api/friends', function(req, res){
        res.send(dataArray);
    });

    // parses the data into a json object
    const urlencodedParser = bodyParser.urlencoded({ extended: true });
    const parseJson = bodyParser.json();

    // sends the data to dataArray
    app.post('/api/friends', urlencodedParser, parseJson, function (req, res) {
        if(!req.body) return res.sendStatus(400);
        res.send(req.body);
        console.log('sent');
        dataArray.push(req.body);
    });

};

module.exports = throwJson;

