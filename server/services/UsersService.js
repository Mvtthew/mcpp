const { Observable } = require('rxjs');

// User model
const User = require('../models/User');

module.exports = class UsersService {

	getUser(req) {
		return new Observable(subscriber => {

			subscriber.next(req.user);

		});
	}

	updateUser(req) {
		return new Observable(subscriber => {

			let userToUpdate = req.body;

			if (userToUpdate.password) {
				userToUpdate.password = crypto.createHash('sha256').update(userToUpdate.password).digest('base64');
			}

			User.findByIdAndUpdate(req.user._id, userToUpdate).then(() => {
				User.findById(req.user._id).select({ password: 0 }).then(newUser => {
					subscriber.next(newUser);
				});
			}).catch(err => {
				subscriber.next({
					error: true,
					message: "Bad updated user object"
				});
			});

		});
	}

	deleteUser(req) {
		return new Observable(subscriber => {

			User.findByIdAndDelete(req.user._id).then(() => {
				subscriber.next({
					message: "User succesfully deleted"
				});
			}).catch(err => {
				subscriber.next(err);
			});

		});
	}

	userGetToken(req) {
		return new Observable(subscriber => {

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
								subscriber.next({
									error: true,
									err
								});
								console.log(err);
							} else {
								subscriber.next({
									tokenType: 'Bearer',
									token
								});
							}
						});

					} else {
						subscriber.next({
							error: true,
							message: "Bad credentials"
						});
					}
				});
			} else {
				subscriber.next({
					error: true,
					message: "Not all required fields presented (email, password)"
				});
			}

		});
	}

	registerUser(req) {
		return new Observable(subscriber => {

			const {
				name,
				email,
				password,
				birthdate,
				gender
			} = req.body;
			if (name && email && password) {
				// Check if email is free
				User.findOne({ email }).then(user => {
					if (!user) {
						const hashedPassword = crypto.createHash('sha256').update(password).digest('base64');
						User.create({
							name,
							email,
							birthdate,
							gender,
							password: hashedPassword
						}).then(user => {
							user.password = null;
							subscriber.next(user);
						});
					} else {
						subscriber.next({
							error: true,
							message: "User with this e-mail exists"
						});

					}
				});

			} else {
				subscriber.next({
					error: true,
					message: "Not all required fields presented (name, email, password)"
				});
			}

		});
	}

};