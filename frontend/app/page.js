import Link from 'next/link';

async function getHomeData() {
	const res = await fetch('http://localhost:3000/home', {
		cache: 'force-cache',
		next: {
			tags: ['home'],
		},
	});

	return res.json();
}

export default async function HomePage() {
	const data = await getHomeData();

	return (
		<main style={{ padding: 20 }}>
			<h1>Dashboard</h1>

			<p>Products: {data.counts.products}</p>
			<p>Orders: {data.counts.orders}</p>

			<br />

			<Link href='/products'>Go to Products →</Link>
		</main>
	);
}
