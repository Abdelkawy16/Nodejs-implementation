const chalk = require('chalk');
const yargs = require('yargs')
const fs = require('fs');
const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Adding notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            type: 'string',
            demandOption: true,
            describe: 'Note body'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removing notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'listNotes',
    describe: 'listing notes',
    handler() {
        notes.listNotes();
    }
});

yargs.parse();