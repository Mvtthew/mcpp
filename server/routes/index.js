const router = require('express').Router();

const userRouter = require('./user');
const productsRouter = require('./products');

router.get('/', (req, res) => {
	res.json({
		message: "Api works!"
	});
});

router.use('/user', userRouter);
router.use('/products', productsRouter);

module.exports = router;