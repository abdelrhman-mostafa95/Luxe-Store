import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'products.json');

export async function getProducts() {
    try {
        const data = await fs.readFile(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist, return empty array
        return [];
    }
}

export async function getProductById(id) {
    const products = await getProducts();
    return products.find((p) => p.id === id);
}

export async function addProduct(product) {
    const products = await getProducts();
    const newProduct = { ...product, id: Date.now().toString() };
    products.push(newProduct);
    await fs.writeFile(dataFilePath, JSON.stringify(products, null, 2));
    return newProduct;
}

export async function updateProduct(id, updates) {
    const products = await getProducts();
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;

    products[index] = { ...products[index], ...updates };
    await fs.writeFile(dataFilePath, JSON.stringify(products, null, 2));
    return products[index];
}

export async function deleteProduct(id) {
    const products = await getProducts();
    const filteredProducts = products.filter((p) => p.id !== id);
    await fs.writeFile(dataFilePath, JSON.stringify(filteredProducts, null, 2));
    return true;
}
