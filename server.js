const express = require('express');
const path = require('path');

const notesDb = require('./db/db.json');

// assign PORT
const PORT = process.env.PORT || 3002;

// express app
const app = express();

// serve static files from public folder
app.use(express.static('public'));

// GET route for notes html page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(notesDb);
    console.info(notesDb);
});

// wildcard route directs back to public index if no match
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// log PORT if listening, else log error
app.listen(PORT, (err) => {
    if (!err) {
        console.log(`App listening on port ${PORT}`)
    } else {
        console.log(`error occurred, server can't start`, err);
    };
});