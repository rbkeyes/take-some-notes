// const notes = require('express').Router();
// const { v4: uuidv4 } = require('uuid');

// const db = require('../db/db.json')

// // GET route to retrieve notes
// notes.get('/api/notes', (req, res) => { 
//     res.json(saved);
//     console.info(saved)
//   });

// // POST route to add a note
// // notes.post('/notes', (req, res) => {
// //     const { title, text } = req.body;

// //     console.info(`${req.method} request add a note was received`);
// //     console.log(req.body);

// //     if (req.body) {
// //         const newNote = {
// //             title,
// //             text,
// //             id: uuidv4(),
// //         };

// //         readAndAppend(newNote, notesDb);
// //         res.json(`New note added 📝`);
// //     } else {
// //         res.errored('Unable to add note ❌');
// //     };
// // });


// module.exports = notes;