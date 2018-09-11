const bodyParser = require('body-parser');
const dataArray = [];

const throwJson = (app) => {
    //confirm app is what we want to push

    dataArray.push(app);

    app.get('/api/friends', function(req, res){
        res.send(dataArray);
    });


};

module.exports = throwJson;

