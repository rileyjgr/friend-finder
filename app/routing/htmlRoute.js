const express = require('express');

const path = require('path');


const html = (app) => {

// Home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.use('/static', express.static(path.join(__dirname, '../js')));

// Survey Page
    app.get('/survey', function (req, res) {
        // res.sendFile(path.join(__dirname, '../public/assets/js/script.js'));
        // res.sendFile(path.join(__dirname, '../public/assets/js/config.js'));
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};

module.exports = html;
