let friends = require('../data/friends.js');
const bodyParser = require('body-parser');


module.exports = function(app){

    //this will return json for
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });
    const urlencodedParser = bodyParser.urlencoded({extended: false});
    const parseJson = bodyParser.json();

    app.post('/api/friends', urlencodedParser, parseJson, function(req,res){
        friends.push(req.body);

        let difference = 40;
        let matchName = '';
        let matchPhoto = '';

        friends.forEach(function(friend){
           const matchedScores = [];
           let totalDifference;

           const add = (total, num) => {
               return total + num;
           };

           add();

           for (let i=0; i< friend.scores.length; i++) {
               matchedScores.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));
           }

           totalDifference = matchedScores.reduce(add, 0);

           if(totalDifference < difference){
               difference = totalDifference;

               matchName = friend.name;
               matchPhoto = friend.photo;

           }
        });

        res.json({
            name: matchName,
            photo: matchPhoto
        });

    });

};
