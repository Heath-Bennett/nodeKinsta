const http = require('http'); //allows us to grab the http package
const fs = require('fs'); //allows us to connect the server with html pages
const express = require('express')//allows us to use express in the dode
const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('notFound.html');
const server = http.createServer( //creates server using the callback function
    (request, response) =>{
        if (request.url === '/about'){
            response.end(aboutPage);
        }
        else if (request.url === '/contact'){
            response.end(contactPage);
        }
        else if (request.url === '/'){
            response.end(homePage);
        }
        else {
            response.writeHead(404);
            response.end(notFoundPage);
        }
    });

server.listen(8080)//Starts the server on the specified port.  You can use any port but 1.
console.log("Listening on port 8080");
