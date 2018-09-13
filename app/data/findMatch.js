// this page is for later for when i want to clean up the getMatch function
// so friends.js doesn't get YUUUUUUUUUUUUUUUUGEEEEEEEEEEEEEEEE

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