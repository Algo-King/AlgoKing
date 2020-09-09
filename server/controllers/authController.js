const bcrypt = require('bcrypt');
const model = require('../models/model.js');

const authController = {};

authController.register = async (req, res, next) => {
	const { name, email, password } = req.body;
	const queryText = `INSERT INTO "Users" (name,email,password) VALUES ($1,$2,$3)`;
	// const usersQueryText = `INSERT INTO Users (username, firstname, lastname) VALUES($1,$2,$3)`;
	const hashedPassWord = await bcrypt.hash(password, 10);

	try {
		await model.query(queryText, [name, email, hashedPassWord]);
		// await model.query(usersQueryText, [username, firstname, lastname]);
		return next();
	} catch (err) {
		console.log(err);
		return next({
			log: `error occurred at register middleware. error message is: ${err}`,
			status: 400,
			message: { err: 'An error occurred' },
		});
	}
};

module.exports = authController;
