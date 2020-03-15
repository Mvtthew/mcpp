const router = require('express').Router();

const userRouter = require('./user');

router.get('/', (req, res) => {
	res.json({
		message: "Api works!"
	});
});

router.use('/user', userRouter);

module.exports = router;