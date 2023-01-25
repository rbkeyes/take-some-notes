// dependencies
const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('./helpers/fsUtils');

const app = express();

// get notes api
app.get('/api/notes', (req, res) => {
    console.info('GET request for notes received');
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
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
    });
});

module.exports = notes;