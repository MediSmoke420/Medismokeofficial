const products = [
  {
    id: "B07Y2GKVLH",
    title: "Electric Herb Grinder",
    price: "£19.99",
    image: "https://via.placeholder.com/250x250?text=Electric+Herb+Grinder"
  },
  {
    id: "B07W5G2G6T",
    title: "Glass Bong with Ice Catcher",
    price: "£29.95",
    image: "https://via.placeholder.com/250x250?text=Glass+Bong"
  },
  {
    id: "B09FZ8Z3RG",
    title: "Rolling Tray - Metal",
    price: "£7.49",
    image: "https://via.placeholder.com/250x250?text=Rolling+Tray"
  },
  {
    id: "B08S38J7V3",
    title: "Smell Proof Storage Bag",
    price: "£22.99",
    image: "https://via.placeholder.com/250x250?text=Smell+Proof+Bag"
  },
  {
    id: "B08L9R9R8W",
    title: "Portable Vaporizer - Dry Herb",
    price: "£59.99",
    image: "https://via.placeholder.com/250x250?text=Vaporizer"
  }
];

const grid = document.getElementById('product-grid');
products.forEach(product => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h2>${product.title}</h2>
    <p>${product.price}</p>
    <a href="https://www.amazon.co.uk/dp/${product.id}/?tag=amazon06014-21" target="_blank">Buy on Amazon</a>
  `;
  grid.appendChild(div);
});
