console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const argv = yargs.argv;

console.log('process', process.argv);
console.log('yargs', argv);


// var command = process.argv[2];
    var command = argv._[0];
debugger;
if (command === 'add') {
   notes.addNote(argv.title, argv.body) // cmd:>  node app --title="TITLE" --body="THIS IS MY TITLE"
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if(command === 'remove'){
    notes.removeNote(argv.title);
} else if (command === 'list') {
   notes.getAll();
} else {
    console.log('Command Not Rrecognized');
}



// fs.appendFile('greetings.txt',` Hello Shashi! and your age is ${notes.age}`, () => {});