const router = require('express').Router();
const crypto = require('crypto');

// User model
const User = require('../models/User');

// User register endpoint
router.post('/register', (req, res) => {
	const {
		name,
		email,
		password
	} = req.body;
	if (name && email && password) {
		// Check if email is free
		User.findOne({ email }, (err, user) => {
			if (!user) {
				const hashedPassword = crypto.createHash('sha256').update(password).digest('base64');
				User.create({
					name,
					email,
					password: hashedPassword
				}).then(user => {
					user.password = null;
					res.json(user);
				});
			} else {
				res.statusCode = 400;
				res.json({
					message: "User with this e-mail exists"
				})

			}
		});

	} else {
		res.statusCode = 400;
		res.json({
			message: "All fields are required (name, email, password)"
		})
	}
});

module.exports = router;