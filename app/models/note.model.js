const mongoose = require9'mongoose');

const NoteSchema = mongoose.Schema({
	title: String,
	content: String
}, {
	timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);

