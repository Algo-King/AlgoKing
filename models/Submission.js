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
    type: number,
    required: true,
  },
  score: {
    type: number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Submission = mongoose.model("submission", submissionSchema);
