const path = require('path');


const api = (app) => {
    // Router to api
    const showApi = require('../data/friends.js');
        showApi(app);
    //this will return json for
    app.get('/api/friends', function(req, res){
        res.json(path.join(showApi));
    });


};

module.exports = api;