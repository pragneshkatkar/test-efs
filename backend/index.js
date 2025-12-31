import express from 'express';

const app = express();
const PORT = 3000;

/**
 * GET /home
 */
app.get('/home', (req, res) => {
	console.log('===============Home route accessed===================');
	res.json({
		counts: {
			products: 10,
			orders: 20,
		},
	});
});

/**
 * GET /products
 */
app.get('/products', (req, res) => {
	console.log('===============Products route accessed===================');
	const products = [
		{ name: 'Laptop', price: 75000 },
		{ name: 'Phone', price: 35000 },
		{ name: 'Headphones', price: 3000 },
	];

	res.json(products);
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
