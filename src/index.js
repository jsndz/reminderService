const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const {PORT} = require('./config/serverconfig')
const {sendBasicEmail} = require('./services/email-service')

const setUpServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`);

        sendBasicEmail(
            'helloJaison@gmail.com',
            'jaisondz9360@gmail.com',
            'testing mail',
            'hello'
        );
        cron.schedule('* * * * *', () => {
            console.log('running a task every minute');
          });


    })
}

setUpServer();