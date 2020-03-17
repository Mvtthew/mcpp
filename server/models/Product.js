const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	_uid: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		default: ''
	},
	category: {
		type: String,
		required: true
	},
	brand: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		default: 0
	},
	pans: {
		type: {
			all: Number,
			used: Number
		},
		default: { all: 0, used: 0 }
	},
	uses: {
		type: Number,
		default: 0
	},
	attributes: {
		type: [{
			name: String,
			value: String
		}],
		default: []
	}
});

module.exports = Product = mongoose.model('product', productSchema);