const express = require("express");
const router = express.Router();
const config = require("config");

// getting our user model
const OldChallenge = require("../../models/OldChallenge");

// create post request to add a challenge
router.post("/", async (req, res) => {
  const { name, problem, example1, example2 } = req.body;
  // try catch block, make in database
  try {
    let challenge = new OldChallenge({
      name,
      problem,
      example1,
      example2,
    });
    await challenge.save();
    res.send("success");
  } catch {
    console.log("error");
  }
});

// get request, get the question of the day -- pick the one that was posted longest ago
router.get("/all", async (req, res) => {
  // try catch to get one challenge -- pass through req here
  try {
    const challenge = await OldChallenge.find();
    res.json(challenge);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("error");
  }
});

module.exports = router;
