'use strict';

const getNaPic = () => {
    const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').value;

    const person = [name, photo];
    const whoIs = person.value;
    console.log(whoIs);
};


const getAnswers = () => {
    const q1 = document.getElementById('q1');
    const q2 = document.getElementById('q2');
    const q3 = document.getElementById('q3');
    const q4 = document.getElementById('q4');
    const q5 = document.getElementById('q5');
    const q6 = document.getElementById('q6');
    const q7 = document.getElementById('q7');
    const q8 = document.getElementById('q8');
    const q9 = document.getElementById('q9');
    const q10 = document.getElementById('q10');

    const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    const value = questions.options[questions.selectedIndex].value;
    console.log(value);

};



const goSubmit = () => {

    const submitButton = document.getElementById('submit');

    const data = [getNaPic(), getAnswers()];

    console.log(data);

    submitButton.addEventListener('click', function(){

   });

};


