const { Observable } = require('rxjs');

// Product model
const Product = require('../models/Product');
// User model
const User = require('../models/User');

module.exports = class ProductsService {

	getAllProducts(req) {
		return new Observable(subscriber => {

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
							subscriber.next(productsToReturn);
						}
					});
				});
			});

		});
	}

	deleteProduct(req) {
		return new Observable(subscriber => {

			const _id = req.params.id;
			Product.findOneAndDelete({ _id, _uid: req.user._id }).then(product => {
				if (product) {
					subscriber.next({
						message: "Product successfully deleted"
					});
				} else {
					subscriber.next({
						message: "Product does not exist or you are not allowed to remove this product"
					});
				}
			}).catch(() => {
				subscriber.next({
					error: true,
					message: 'Error occured while deleting this product'
				});
			});

		});
	}

	editProduct(req) {
		return new Observable(subscriber => {

			const _id = req.params.id;
			const productToUpdate = req.body;

			if (productToUpdate) {
				Product.findOneAndUpdate({ _id, _uid: req.user._id }, productToUpdate).then(() => {

					Product.findById({ _id }).then(product => {
						subscriber.next(product);
					});

				}).catch(err => {
					subscriber.next({
						error: true,
						message: "Bad updated product object"
					});
				});
			} else {
				subscriber.next({
					error: true,
					message: "Bad updated product object"
				});
			}

		});
	}

	createProduct(req) {
		return new Observable(subscriber => {

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
					subscriber.next(product);
				});

			} else {
				subscriber.next({
					error: true,
					message: 'Not all required fields presented (name, category, brand)'
				});
			}

		});
	}

};