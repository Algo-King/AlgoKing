const mongoose = require("mongoose");
const challengeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Problem: {
    type: String,
    required: true,
  },
  Example1: {
    input: { type: String },
    output: { type: String },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Challenge = mongoose.model("challenge", challengeSchema);
