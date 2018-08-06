const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const server = express();
const PORT = 3001;

server.use('/', express.static('../build'));
server.listen(PORT);
console.log(`Server is listening on http://localhost:${PORT}`);

MongoClient.connect(`mongodb://localhost:27017`, (err, db) => {
    if (err) throw err;
    console.log(`Successfully Connected`)

})
