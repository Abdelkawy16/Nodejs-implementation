const fs = require('fs');
const chalk = require('chalk');

const getNote = () => {
    return 'Your notes...';
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.yellow.inverse('Your notes'));
    notes.forEach((note) => {
        console.log(note.title);
    });
}

const removeNote = (title) => {
    const notes = loadNotes();
    const dublicateNotes = notes.filter(function (note) {
        return title === note.title;
    });
    if (dublicateNotes.length !== 0) {
        const nonDublicateNotes = notes.filter(function (note) {
            return title !== note.title;
        });
        saveNotes(nonDublicateNotes);
        console.log(chalk.green.inverse("Note removed!"));
    } else {
        console.log(chalk.red.inverse("Note title isn't taken!"));
    }
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const dublicateNotes = notes.filter(function (note) {
        return title === note.title;
    });

    if (dublicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    } else {
        console.log(chalk.red.inverse("Note title is taken!"));
    }

};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataJSON = fs.readFileSync('./notes.json').toString();
        const data = JSON.parse(dataJSON);
        return data;
    } catch (error) {
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};