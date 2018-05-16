"use strict"

const express = require('express');

const cors = require('cors');

const str2json = require('string-to-json');

const server = express();

var obj = [
    {name: 'surya', age: 22},
    {name: 'bhanu', age: 25},
    {name: 'anil', age: 17},
    {name: 'bharath', age: 20},
];

server.use(cors());
var body = '';
server.get('/api/users',(req, resp) => {

    resp.send(obj);
});

server.listen(3030, () => {
    console.log("server started with port number 3030")
})