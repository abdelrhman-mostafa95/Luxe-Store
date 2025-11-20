import { NextResponse } from 'next/server';
import { getProducts, addProduct } from '@/lib/db';

export async function GET() {
    const products = await getProducts();
    return NextResponse.json(products);
}

export async function POST(request) {
    try {
        const body = await request.json();
        // Basic validation
        if (!body.name || !body.price) {
            return NextResponse.json({ error: 'Name and price are required' }, { status: 400 });
        }

        const newProduct = await addProduct(body);
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}
