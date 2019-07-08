// implement your API here
const express = require('express');

const server = express();
const port = 5000;

const db = require('./data/db.js');

server.listen(port, () => console.log('running on port ${port}'));

