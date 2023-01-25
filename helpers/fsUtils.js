const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) => {
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.info(`\nData written to ${destination}`)
        }
    });
};

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNote = JSON.parse(data);
            parsedNote.push(content);
            writeToFile(file, parsedNote);
        }
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend };