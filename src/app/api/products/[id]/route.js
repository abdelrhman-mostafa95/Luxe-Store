import { NextResponse } from 'next/server';
import { updateProduct, deleteProduct, getProductById } from '@/lib/db';

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const body = await request.json();

        const updated = await updateProduct(id, body);
        if (!updated) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        const success = await deleteProduct(id);

        if (!success) {
            // Note: deleteProduct currently always returns true if it filters, 
            // but logically if ID didn't exist it's still "gone".
            // We could check existence first if strict 404 is needed.
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    const { id } = await params;
    const product = await getProductById(id);
    if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
}
