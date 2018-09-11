const path = require('path');

const bodyParser = require('body-parser');
const api = (app) => {
    //this will return json for
    app.use(bodyParser.json());
    app.get('/api/friends', function(req, res){
        res.sendFile(path.join(__dirname, '../data/friends.js'));
    });

    app.post('/api/friends', function(req, res){
        res.send(req.body);
    });
};

module.exports = api;