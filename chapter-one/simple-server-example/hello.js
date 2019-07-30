// hello.js

// This simple module is a prototypical example  of a simple HTTP
// server written using NodeJS.

// Robert Hieger
// July 30, 2019

// Import http library:

const  http = require('http');

const port = 8080;  // Set listening port.

// Instantiate HTTP server:

const server = http.createServer( (req, res) => {

    res.end('Hello World!');

}); // end server


server.listen( port, () => {

    console.log('Server listening on: http://localhost:%s', port);

});