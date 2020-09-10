const express = require('express');
const router = express.Router();
const config = require('config');

// getting our user model
const Submission = require('../../models/Submission');

// create post request to add a challenge
router.post('/', async (req, res) => {
	const { name, challengeName, time, score } = req.body;

	// try catch block, make in database
	try {
		let challenge = new Submission({
			name,
			challengeName,
			time,
			score,
		});
		await challenge.save();
		res.send('success');
	} catch {
		console.log('error');
	}
});

// get request, get the question of the day -- pic the one that was posted longest ago
router.get('/all', async (req, res) => {
	// try catch to get one challenge -- pass through req here
	try {
		const challenge = await Submission.find();
		res.json(challenge);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('error');
	}
});

module.exports = router;
