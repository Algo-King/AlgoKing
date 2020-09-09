const mongoose = require("mongoose");
const challengeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  example1: {
    input: { type: String },
    output: { type: String },
  },
  example2: {
    input: { type: String },
    output: { type: String },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Challenge = mongoose.model("challenge", challengeSchema);
