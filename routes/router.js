// const express = require('express');
// const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils')

// // pulled from notes.js route
// const notesDb = require('../db/notes.json')
// const { v4: uuidv4 } = require('uuid');

// // // initialize express()
// const app = express();

// app.get('/api/notes', (req, res) => {
//     readFromFile('notesDb').then((data) => res.json(JSON.parse(data)));
//     console.info(data);
// });

// module.exports = app;