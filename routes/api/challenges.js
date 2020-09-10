const express = require("express");
const router = express.Router();
const config = require("config");

// getting our user model
const Challenge = require("../../models/Challenge");

// create post request to add a challenge
router.post("/", async (req, res) => {
  console.log("we are here");
  const { name, problem, example1, example2, tests, callString } = req.body;
  // try catch block, make in database
  try {
    let challenge = new Challenge({
      name,
      problem,
      example1,
      example2,
      tests,
      callString,
    });
    console.log("we are here");
    await challenge.save();
    res.send("success");
  } catch {
    console.log("error");
  }
});

// get request, get the question of the day -- pick the one that was posted longest ago
router.get("/", async (req, res) => {
  // try catch to get one challenge -- pass through req here
  try {
    const challenge = await Challenge.findOne();
    res.json(challenge);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("error");
  }
});

// delete from the database
router.delete("/", async (req, res) => {
  console.log(req.body);
  try {
    await Challenge.findOneAndRemove({ _id: req.body._id });
    res.send("user deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// get request, get the question of the day -- pick the one that was posted longest ago
router.get("/all", async (req, res) => {
  console.log("Waddup");
  // try catch to get one challenge -- pass through req here
  try {
    const challenge = await Challenge.find();
    res.json(challenge);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("error");
  }
});

module.exports = router;
