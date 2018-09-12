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
        keyWords
    })
        .then(function(response){

            const data = response.data;
            console.log(data);
            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);

            // Show the modal with the best match
            $("#results-modal").modal("toggle");
        })
        .catch(function (error) {
            console.log(error);
        });
};


