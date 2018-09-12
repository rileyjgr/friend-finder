'use strict';

// add html page that has a button that asks the server if it can brew coffee
// but declines because its a teapot '418'

//declares submit button
const submitButton = document.getElementById('submit');

submitButton.onclick = () => {

    const Data = {
        name: document.getElementById('name').value,
        photo: document.getElementById('photo').value,
        scores: [
            document.getElementById('q1').value,
            document.getElementById('q2').value,
            document.getElementById('q3').value,
            document.getElementById('q4').value,
            document.getElementById('q5').value,
            document.getElementById('q6').value,
            document.getElementById('q7').value,
            document.getElementById('q8').value,
            document.getElementById('q9').value,
            document.getElementById('q10').value
        ]
    };

    const Url ='/api/friends';

    axios.post(Url, Data, {
    })
        .then(function(response){
            console.log(response);
        })
        .catch(function (error) {
           console.log(error);
        });
};


