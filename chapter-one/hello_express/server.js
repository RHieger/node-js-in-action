// server.js

// This module contains an express-based server with
// NodeJS dependency.

// Robrt Hieger
// July 31, 2019

const express = require('express');    // Import ExpressJS

const app = express();  // Instantiate an Express object

// Set route:

app.get('/', (req, res) => {

    // Send message to browser:

    res.send('Hello World!');

});   // end app.get('/')

// Set listening port and invoke server:

app.listen(3000, () => {

    console.log(`Express web app on localhost:3000`);

});   // end app.listen(3000)
