const mongoose = require('mongoose');
const config = require('../config/config');

module.exports = mongoose.connect(config.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
}, () => {
	console.log('MongoDB database connected!');
}).catch(err => {
	console.log(`MongoDB database connection failed err (${err})`);
});