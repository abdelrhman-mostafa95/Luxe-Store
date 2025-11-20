const { getProducts } = require('./src/lib/db');

async function test() {
    try {
        console.log('Testing getProducts...');
        const products = await getProducts();
        console.log('Products:', products);
    } catch (error) {
        console.error('Error:', error);
    }
}

test();
