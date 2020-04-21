const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

	// User essentials
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	birthdate: {
		type: Date,
		required: true
	},
	gender: {
		type: String,
		required: true
	},

	// Categories
	categories: {
		type: [String],
		default: []
	},

	// Brands
	brands: {
		type: [String],
		default: []
	}

});

module.exports = User = mongoose.model('user', userSchema); 