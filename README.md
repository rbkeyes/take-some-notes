# take-some-notes

![license badge](https://img.shields.io/github/license/rbkeyes/take-some-notes)

## Description

As a busy boot-camp student, I want an application in which I can write and save notes so that I can organize my ideas and keep track of tasks that need to be completed. 

I used express.js to build this app. In order to properly parse 

I used this project as an opportunity to practice modular routing. I organized my files into separate directories and used module.export and const/require as needed to access necessary files. I ran into some challenges getting my router to function properly, but after some debugging discovered the typos that were the source of my errors and corrected them. 

I also looked up and used an npm that generates a unique identifier for each object in the db. It was excellent practice figuring out how to install and use just by reading the documentation provided. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

No installation required for this application.

## Usage

When you first navigate to the application, you will be directed to a page with a "get started" button. Click the button to navigate to the notes-taking page. Existing notes will display in the column on the lefthand side of the screen, and the righthand column is where you will type to add new notes. 

If the placeholder text "Note Title" and "Note Text" are displayed in the righthand column, click on the placeholder title to begin entering your note.  A save icon in the shape of a floppy disk will display in the upper righthand corner of the page once you have entered some text into the note text area. When you have finished adding text, click the save icon to add your new note.



## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests




pseudocode for project
- add db.json file (to store and retrieve notes)
- code to store/retrieve will be in routes


## Resources
Auto-refresh changes in browser with livereload and nodemon:
https://bytearcher.com/articles/refresh-changes-browser-express-livereload-nodemon/

Very basic expressjs tutorial:
https://www.tutorialsteacher.com/nodejs/expressjs-web-application

mdn web docs - array.prototype.filter():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

util.promisify() mdn web docs:
https://www.geeksforgeeks.org/node-js-util-promisify-method/

https://medium.com/@zachcaceres/child-routers-in-express-56f904597b1b