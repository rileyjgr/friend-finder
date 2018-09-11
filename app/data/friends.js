// const survey = require('../public/survey.html');
const request = require('request');

const friends = (app) => {
    app.use(request), options = {
        uri: 'https://find-friends-or-not.herokuapp.com',
        json: true,
        method: 'POST',
        href: '',
        pathname: '/api/friends'
    };

    request(options, function(err, res, body){
        console.log(err, res, body);
    });

};

module.exports = friends;