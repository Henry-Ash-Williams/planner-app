const express = require('express');
const server = express();
const PORT = 3001;

server.use('', express.static('../build'));
server.listen(PORT);
console.log(`Server is listening on ${PORT}`)