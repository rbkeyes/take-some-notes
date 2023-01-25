const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./routes/index');

// assign PORT
const PORT = process.env.PORT || 3002;

// express app
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// GET route for notes html page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
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
