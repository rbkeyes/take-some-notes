const fs = require('fs');
const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const notesDb = require('./db/db.json');

// assign PORT
const PORT = process.env.PORT || 3002;

// express app
const app = express();

// serve static files from public folder
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route for notes html page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(notesDb);
    console.info(notesDb);
});

app.post('/api/notes', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            noteId: uuidv4()
        };

        // adds newNote to be displayed immediately on page without needing to restart server
        notesDb.push(newNote);
        console.log(notesDb);

        // read existing db.json file
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                // parse data from db.json
                const parsedNotes = JSON.parse(data);
                // push newNote to parsedNotes
                parsedNotes.push(newNote);

                // write db.json file with parsedNotes array (includes newNote)
                fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 4), (err) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.json('Notes database updated')
                        console.info('Notes database updated')
                    };
                });
            };
        });
    } else {
        res.json('Unable to add note at this time.')
        console.error('Unable to add note at this time.')
    };
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
