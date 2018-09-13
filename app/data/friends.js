const bodyParser = require('body-parser');

const dataArray = [];
// for keeping track of scores
const scores = [];

const throwJson = (app) => {
    // sets the url
    app.get('/api/friends', function (req, res) {
        res.send(dataArray);
    });

    // parses the data into a json object
    const urlencodedParser = bodyParser.urlencoded({extended: true});
    const parseJson = bodyParser.json();

    // sends the data to dataArray
    app.post('/api/friends', urlencodedParser, parseJson, function (req, res) {
        if (!req.body) return res.sendStatus(400);
        console.log('--Starting the post request--');
        res.send(req.body);
        console.log('Post sent');
        dataArray.push(req.body);
        console.log('Pushed to data Array');
        console.log(dataArray);

        const getSum = () => {
                for (let i = 0; i < 1; i++) {
                    const userName = req.body.name;
                    const userScore = req.body.scores;

                    // function to add the scores together
                    const total = (userScore) => {

                        let sum = 0;
                        userScore.forEach((value) => {
                            sum += parseInt(value);
                        });

                        return sum;
                    };

                    const finalScore = total(userScore);
                    scores.push({"name": userName, "score": finalScore});
                    console.log(scores);

                    const match = [];
                    const findMatch = (finalScore) =>{
                        let result = req.body.name;
                        // x will be scores[x]
                        //results will be scores[x].name
                        match.forEach(function(scores){
                            if(scores.score = finalScore){
                                 result = scores.name;
                            } else {
                                result = ('no match found');
                            }

                        });
                        return result;
                    };
                    const matchName = findMatch(finalScore);
                    match.push({"name": matchName});

                    console.log(match);
                }
            };

        console.log('---ran getSum()---');
        getSum();
    });

};

module.exports = throwJson;


