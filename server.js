const fs = require('fs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('./helpers/fsUtils')

// assign PORT
const PORT = process.env.PORT || 3002;

// express app
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// GET route for notes html page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// get notes api
app.get('/api/notes', (req, res) => {
    console.info('GET request for notes received');
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         // parse data from db.json
    //         res.json((JSON.parse(data)));
    //         console.info(`Request to get notes from db received.`)
    //     };
    // });
});

// post note to db
app.post('/api/notes', (req, res) => {
    console.info('POST request to add a note received');
    console.log(req.body);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
        console.error('Note added successfully');
    } else {
        res.error('Error - unable to add tip');
        console.error('Error - unable to add tip');
    }

    // read existing db.json file
    //     fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //         if (err) {
    //             console.error(err);
    //         } else {
    //             // parse data from db.json
    //             const parsedNotes = JSON.parse(data);
    //             // push newNote to parsedNotes
    //             parsedNotes.push(newNote);

    //             // write db.json file with parsedNotes array (includes newNote)
    //             fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 4), (err) => {
    //                 if (err) {
    //                     console.error(err)
    //                 } else {
    //                     res.json('Notes database updated')
    //                     console.info('Notes database updated')
    //                 };
    //             });
    //         };
    //     });
    // } else {
    //     // if unsuccessful
    //     res.json('Unable to add note at this time.')
    //     console.error('Unable to add note at this time.')
    // };
});

// delete note from db
app.delete('/api/notes/:id', (req, res) => {
    const selectedId = req.params.id

    // read db.json & parse data, return json
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data)).then((json) => {

        // filter json to create new array of notes, excluding note with selectedId
        const updatedNotes = json.filter((note) => note.id !== selectedId)

        // write new file containing updated array of notes
        writeToFile('./db/db.json', updatedNotes);

        res.json(`Note successfully deleted`);
        console.info('Note successfully deleted');

    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         // parse data from db.json
    //         const parsedNotes = JSON.parse(data);
    //         // push newNote to parsedNotes
    //         const newDb = parsedNotes.filter((note) => note.id !== selectedId)

    //         fs.writeFile('./db/db.json', JSON.stringify(newDb, null, 4), (err) => {
    //             if (err) {
    //                 console.error(err)
    //             } else {
    //                 res.json(`Note with id of ${selectedId} was successfully deleted`)
    //                 console.info(`Note with id of ${selectedId} was successfully deleted`)
    //             };
    //         });
    //     };
    });
});

// route directs back to public index if no match to specified route
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// log PORT when listening
app.listen(PORT, (err) => {
    if (!err) {
        console.log(`App listening on port ${PORT}`)
    } else {
        console.log(`error occurred, server can't start`, err);
    };
});
