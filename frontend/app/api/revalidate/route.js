import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
	const body = await req.json();
	const { tag } = body;

	if (!tag) {
		return NextResponse.json({ error: 'Tag is required' }, { status: 400 });
	}

	revalidateTag(tag);

	return NextResponse.json({
		revalidated: true,
		tag,
	});
}
