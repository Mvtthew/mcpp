const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.json({
		message: "mcpp WebAPI works!"
	});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`mcpp WebAPI server started on port :${PORT}`)
});