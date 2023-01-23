# take-some-notes
An application that can be used to write and save notes.


pseudocode for project
- add db.json file (to store and retrieve notes)
- code to store/retrieve will be in routes



// const api = require('./routes/index.js');
const { v4: uuidv4 } = require('uuid');

const { readFromFile, writeToFile, readAndAppend } = require('./helpers/fsUtils')
const notesDb = require('./db/db.json')



// middleware for parsing JSON, urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);





app.get('/api/notes', (req, res) => {
    // readFromFile('notesDb').then((data) => 
    res.json(JSON.parse(notesDb))
    console.info(notesDb);
});

// app.get('/api/notes', (req, res) => res.json('./db/db.json'));



