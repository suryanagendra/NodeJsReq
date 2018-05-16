"use strict"

const express = require('express');

const cors = require('cors');

const server = express();

var obj = [
    {name: 'surya', age: 22},
    {name: 'bhanu', age: 25},
    {name: 'anil', age: 17},
    {name: 'bharath', age: 20},
]
server.use(cors());

var body = '';

server.put('/api/users',(req, resp) => {

req.on('data', function(chunk) {
    body += chunk;    
});
req.on('end', function() {

console.log('body :' + body);

});
console.log(body);
console.log(typeof body);
});

server.listen(3030, () => {
    console.log("server started with port number 3030")
})