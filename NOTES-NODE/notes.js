const fs = require('fs');


console.log('starting notes.js');
// console.log(module);

module.exports.age = 27;

var addNote = (title, body) => {
    var notes = fs.existsSync('notes-data.json') ? (JSON.parse(fs.readFileSync('notes-data.json')) || []) : [];
    var note = {
        title,
        body
    };

    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
var getAll = () => {
    console.log('gettiing all notes');
}

var getNote = (title) => {
    console.log('Getting Notes ', title);
}

var removeNote = (title) => {
    console.log('Removing Notes ', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};