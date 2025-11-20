async function testApi() {
    try {
        console.log('Fetching from http://localhost:3000/api/products...');
        const res = await fetch('http://localhost:3000/api/products');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('API Response:', data);
    } catch (error) {
        console.error('Fetch failed:', error.message);
    }
}

testApi();
