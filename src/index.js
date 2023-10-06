const express = require('express');
const bodyParser = require('body-parser');

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
    })
}

setUpServer();