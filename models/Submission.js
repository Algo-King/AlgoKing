const mongoose = require('mongoose');
const submissionSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	challengeName: {
		type: String,
	},
	time: {
		type: Number,
	},
	score: {
		type: Number,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Submission = mongoose.model('submission', submissionSchema);
