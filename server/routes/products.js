const router = require('express').Router();

// Middleware
const isAuth = require('../middleware/isAuth');

// Services
const ProductsService = require('../services/ProductsService');
const productService = new ProductsService();

// Get requested user products
router.get('/', isAuth, (req, res) => productService.getAllProducts(req).subscribe(data => res.json(data)));

// Delete a product
router.delete('/:id', isAuth, (req, res) => productService.deleteProduct(req).subscribe(data => res.json(data)));

// Edit product
router.put('/:id', isAuth, (req, res) => productService.editProduct(req).subscribe(data => res.json(data)));

// Create product
router.post('/', isAuth, (req, res) => productService.createProduct(req).subscribe(data => res.json(data)));

module.exports = router;