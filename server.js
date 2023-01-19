// import dependencies
const fs = require('fs'); //fs might need to go in a different file, move if need be
const express = require('express');
const path = require('path');

const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

// express app
const app = express();

// middleward for parsing JSON, urlencoded form data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));
// app.use('/api', api);

// serve all files from public folder
app.use(express.static('public'));

// GET route for homepage (public index.html)
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html')));

// GET route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html')));

// wildcard route directs back to home if no match
app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html')));

// log PORT if listening, else log error
app.listen(PORT, (err) => {
    if(!err) console.log(`App listening on port ${PORT}`)
    else console.log(`error occurred, server can't start`, err);
});