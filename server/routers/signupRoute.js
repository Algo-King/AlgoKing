const express = require('express');
const authController = require('../controllers/authController.js');

const router = express.Router();

router.post('/', authController.register, (req, res) => {
	res.status(200).send('register success');
});

module.exports = router;
