const router = require('express').Router();

// Product model
const Product = require('../models/Product');
// User model
const User = require('../models/User');
// Middleware
const isAuth = require('../middleware/isAuth');

// Get requested user products
router.get('/', isAuth, (req, res) => {

	let productsToReturn = [];
	User.findById(req.user._id).then(user => {
		let forEachIndex = 0;
		user.categories.forEach(category => {
			Product.find({ _uid: user._id, category }).then(products => {
				productsToReturn.push({
					category: category,
					products: products
				});
				forEachIndex++;
				if (forEachIndex === user.categories.length) {
					res.json(productsToReturn);
				}
			});
		});
	});

});

// Edit product
router.put('/:id', isAuth, (req, res) => {
	const _id = req.param('id');
	const productToUpdate = req.body;

	if (productToUpdate) {
		Product.findOneAndUpdate({ _id, _uid: req.user._id }, productToUpdate).then(() => {

			Product.findById({ _id }).then(product => {
				res.json(product);
			});

		}).catch(err => {
			res.statusCode = 401;
			res.json({
				message: "Bad updated product object"
			});
		});
	} else {
		res.statusCode = 401;
		res.json({
			message: "Bad updated product object"
		});
	}

});

// Create product
router.post('/', isAuth, (req, res) => {

	const {
		name,
		description,
		category,
		brand,
		rating,
		pans,
		uses,
		attributes
	} = req.body;

	if (name && category && brand) {

		Product.create({
			_uid: req.user._id,
			name,
			description,
			category,
			brand,
			rating,
			pans,
			uses,
			attributes
		}).then(product => {
			res.json(product);
		});

	} else {
		res.statusCode = 400;
		res.json({
			message: 'Not all required fields presented (name, category, brand)'
		});
	}

});

module.exports = router;