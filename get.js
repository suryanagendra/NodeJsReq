"use strict"
const express = require('express');

const cors = require('cors');

const server = express();

server.use(cors());

server.get('/api/users/get', (req, resp) => {

    resp.send('Data fetched');
});

server.post('/api/users/post', (req, resp) => {

    resp.send('Data Inserted');
});

server.put('/api/users/put', (req, resp) => {

    resp.send('Data Updated');
});

server.delete('/api/users/delete', (req, resp) => {

    resp.send('Data Deleted');
});


server.listen(3030, () => {
    console.log("server started with port number 3030")
})