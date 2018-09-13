

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
        const match = '';
        const getMatch = (match) => {
            const scores = [];

            for (let i=0; i<1; i++ ) {
                const userName  = req.body.name;
                const userScore = req.body.scores;

                // function to add the scores together
                const total = (userScore) => {

                    let sum = 0;
                    userScore.forEach((value) => {
                        sum += parseInt(value);
                    });

                    return sum;
                };

                scores.push({"name": userName, "score": total(userScore)});
            }



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

