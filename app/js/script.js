'use strict';

// add html page that has a button that asks the server if it can brew coffee
// but declines because its a teapot '418'

//declares submit button
const submitButton = document.getElementById('submit');

submitButton.onclick = () => {
    const formName = document.getElementById('name');
    const formPic  = document.getElementById('photo');
    const both     = formName + formPic;
    const questions = document.getElementById('chosen-select');
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

    const validate = () => {
        let isValid = true;


    //encase it breaks again here you go future riley setTimeout(function(){}, 3000);
    // if formName is empty.. alert user they need to fill it in
        // this would look wayyyyyyyyyyyyyy nicer in a switch statement. Do this tomorrow.
        if (formName.value === "") {
            $("#match-name").text('You are missing your name');
            $("#match-img").attr("src", '');
            $("#results-modal").modal("toggle");
            isValid = false;
        }

        // if formPic is empty.. alert user they need to fill it in
        if (formPic.value === "") {
            $("#match-name").text('You are missing your picture');
            $("#match-img").attr("src", '');
            $("#results-modal").modal("toggle");
            isValid = false;
        }

        // this doesnt work
        // if (both.value === "") {
        //     $("#match-name").text('You are missing your name and picture');
        //     $("#match-img").attr("src", '');
        //     $("#results-modal").modal("toggle");
        //     isValid = false;
        // }

        // this doesnt work either
        // // need to fix this.
        // if (questions.value === "") {
        //     $("#match-name").text('You are missing your picture');
        //     $("#match-img").attr("src", '');
        //     $("#results-modal").modal("toggle");
        //     isValid = false;
        // }

    return isValid;
    };

    if (validate()) {
        const Url = '/api/friends';


        axios.post(Url, Data, {})
            .then(function (response) {

                console.log(response);
                $("#match-name").text(response.data.name);
                console.log(response.data.name);
                $("#match-img").attr("src", response.data.photo);

                // Show the modal with the best match
                $("#results-modal").modal("toggle");

            })
            .catch(function (error) {
                console.log(error);
            });
    }
};


