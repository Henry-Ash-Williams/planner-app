const express = require('express');
const app = express();
const PORT = 3001;

// server.use('', express.static('../build'));
// server.listen(PORT);

app.use('/', express.static('build'));
app.listen(PORT);

console.log(`Server is listening on http://localhost:${PORT}`);

