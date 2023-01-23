const express = require('express');

// pulled from notes.js route
const notesDb = require('../db/notes.json')
const { v4: uuidv4 } = require('uuid');

// // initialize express()
const app = express();

app.get('/api/notes', (req, res) => {
    res.json(notesDb);
    console.info(notesDb);
});

module.exports = app;