const mongoose = require("mongoose");
const submissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  challengeName: {
    type: String,
  },
  time: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Submission = mongoose.model("submission", submissionSchema);
