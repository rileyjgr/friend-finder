const bodyParser = require('body-parser');

const dataArray = [{}];

const throwJson = (app) => {
    //confirm app is what we want to push

    app.get('/api/friends', function(req, res){
        res.send(dataArray);
    });

    const jsonParse = bodyParser.json();
    const urlencodedParser = bodyParser.urlencoded({ extended: true });

    app.post('/api/friends', urlencodedParser, function (req, res) {
        if(!req.body) return res.sendStatus(400);
        res.send(req.body);
        console.log('sent');
        dataArray.push(req.body);
    });

    app.post('/api/friends', jsonParse, function(req,res){
        if(!req.body) return res.sendStatus(400);
        res.send(req.body);
        console.log('sent');
        dataArray.push(req.body);
    });


};

module.exports = throwJson;

