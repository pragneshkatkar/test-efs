import Link from 'next/link';

async function getProducts() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
		cache: 'force-cache',
		next: {
			tags: ['products'],
		},
	});

	return res.json();
}

export default async function ProductsPage() {
	const products = await getProducts();

	return (
		<main style={{ padding: 20 }}>
			<h1>Products</h1>

			<ul>
				{products.map((product, index) => (
					<li key={index}>
						{product.name} – ₹{product.price}
					</li>
				))}
			</ul>

			<br />

			<Link href='/'>← Back to Home</Link>
		</main>
	);
}
