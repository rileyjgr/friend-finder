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


    const keyWords = Data.scores;

    const Url ='/api/friends';

    axios.post(Url, Data, {
    })
        .then(function(response){
            console.log(response);

        })
        .catch(function (error) {
           console.log(error);
        });

    axios.get(Url, {
        data: {
            name: name,
            photo: photo
        }
    })
        .then(function(response){

            // have to do something with this to find a match

            const match = response.data[];

            console.log(response.data[0]);

            // 0s are how i enter the json file, 0s will end up being match
            $("#match-name").text(response.data[0].name);
            $("#match-img").attr("src", response.data[0].photo);

            // Show the modal with the best match
            $("#results-modal").modal("toggle");
        })
        .catch(function (error) {
            console.log(error);
        });
};


