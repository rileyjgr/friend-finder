

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

        // const match = '';
        const getMatch = () => {
            const scores = [];

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

                    // this will be the part of the algorithm that searches for a similar user.
                    const findMatch = () => {

                        let findName = "";
                        let findScore = "";

                        const find = (scores, name) => {

                            for(name.score in scores) {

                                if(scores.name.score = finalScore.split(',').indexOf(scores.name.score)){

                                    findName = scores.name;
                                    findScore = scores.name.score;

                                    console.log(findName);
                                    return findName + findScore;

                                }
                                return 'not found';

                            }
                            console.log(findName);
                            console.log(findScore);

                        };

                        const matchName = find(findName);
                        const matchScore = find(findScore);

                        // console.log(matchName);
                        // console.log(matchScore);

                        // who we are looking for
                        const match = {

                            "name": matchName,
                            "score": matchScore
                        };

                        console.log('here is your match: ' + match.name + match.score);
                    };

                    findMatch();
                }


            };

            getSum();




            console.log('---start of array---')
            console.log(scores);
            console.log('---end of array---');
        };

        getMatch();

        console.log('--Starting the post request--');
        res.send(req.body);
        console.log('Post sent');
        dataArray.push(req.body);
        console.log('Pushed to data Array')
            //.then(array => {
                //for loop
                //push to datarray
                //variable to store best matcf
                //res.json(bestmatch)
           // });

    });

};



module.exports = throwJson;

