const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/config').jwtSecret;

const User = require('../models/User');

module.exports = (req, res, next) => {
	let token = req.headers['authorization'];

	if (token) {

		token = token.split(' ');
		if (token[0] == 'Bearer') {

			jwt.verify(token[1], jwtSecret, (err, data) => {
				if (!err) {

					User.findById(data._id).select({ password: 0 }).then(user => {
						req.user = user;
						next();
					});

				} else {
					res.statusCode = 401;
					res.json({
						message: "Wrong authorization token"
					});
				}
			});

		} else {
			res.statusCode = 401;
			res.json({
				message: "Invalid authorization header type"
			});
		}

	} else {
		res.statusCode = 401;
		res.json({
			message: "Authorization header is missing"
		});
	}
}