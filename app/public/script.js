'use strict';

const personArray = [{}];
const answersArray = [{}];

//declares submit button
const submitButton = document.getElementById('submit');

//pushes to person array, on submit button click
const getNaPic = () => {
    const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').value;


    const whoIs = [name, photo];
    personArray.push(whoIs);
};


// pushes answers of form to answerArray

const getAnswers = () => {
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const q4 = document.getElementById('q4').value;
    const q5 = document.getElementById('q5').value;
    const q6 = document.getElementById('q6').value;
    const q7 = document.getElementById('q7').value;
    const q8 = document.getElementById('q8').value;
    const q9 = document.getElementById('q9').value;
    const q10 = document.getElementById('q10').value;

    const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

    answersArray.push(questions);

};

submitButton.addEventListener('click', function(){
    getNaPic();
    getAnswers();
    const data = [personArray, answersArray];

    console.log(data);


});


