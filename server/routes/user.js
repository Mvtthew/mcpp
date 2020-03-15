const router = require('express').Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/config').jwtSecret;

// User model
const User = require('../models/User');

// User login / get token endpoint
router.post('/token', (req, res) => {
	const {
		email,
		password
	} = req.body;
	if (email && password) {
		const hashedPassword = crypto.createHash('sha256').update(password).digest('base64');
		User.findOne({ email, password: hashedPassword }).then(user => {
			if (user) {

				jwt.sign({ _id: user._id }, jwtSecret, { expiresIn: '14d' }, (err, token) => {
					if (err) {
						res.statusCode = 500;
						console.log(err);
					} else {
						res.json({
							tokenType: 'Bearer',
							token
						});
					}
				});

			} else {
				res.statusCode = 401;
				res.json({
					message: "Bad credentials"
				})
			}
		});
	} else {
		res.statusCode = 400;
		res.json({
			message: "All fields are required (email, password)"
		})
	}
});

// User register endpoint
router.post('/register', (req, res) => {
	const {
		name,
		email,
		password
	} = req.body;
	if (name && email && password) {
		// Check if email is free
		User.findOne({ email }).then(user => {
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