const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

// Cors
app.use(cors());

// Connect to DB
require('./database/connect');

// Routes
const router = require('./routes');
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`mcpp WebAPI server started on port :${PORT}`);
});