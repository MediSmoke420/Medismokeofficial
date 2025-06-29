
const products = [
    {
        id: "B08QJCLL9J",
        title: "Herb Grinder - 4 Piece Zinc Alloy",
        price: "£9.99",
        image: "assets/grinder.jpg"
    },
    {
        id: "B07Q5W8K4J",
        title: "Glass Bong with Percolator",
        price: "£24.99",
        image: "assets/bong.jpg"
    },
    {
        id: "B08JCCG8QD",
        title: "Cleaning Brush Set for Pipes",
        price: "£6.50",
        image: "assets/brush.jpg"
    }
];

const grid = document.getElementById('product-grid');
products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
        <img src="\${product.image}" alt="\${product.title}">
        <h2>\${product.title}</h2>
        <p>\${product.price}</p>
        <a href="https://www.amazon.co.uk/dp/\${product.id}/?tag=amazon06014-21" target="_blank">Buy on Amazon</a>
    `;
    grid.appendChild(div);
});
