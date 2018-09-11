const path = require('path');
const request = require('supertest');
const bodyParser = require('body-parser');


const api = (app) => {

    const showApi = require('../data/friends.js');
        showApi(app);
    //this will return json for
    app.get('/api/friends', function(req, res){
        res.json(path.join(showApi()));
    });

    app.use(bodyParser);
    app.use(request);

    app.post('/api/friends', function(req,res){
        console.log(req);
        res.status(200).json(showApi(/*requestbody*/));
    });

    request(app)
        .post('/api/friends')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '30')
        .expect(200)
        .end(function(err, res){
            if(err) throw err;
        });
};

module.exports = api;