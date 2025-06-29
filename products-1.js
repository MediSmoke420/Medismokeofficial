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
    image: "https://via.placeholder.com/250x250?text=Glass+Bong+with+Ice+Catcher"
  },
  {
    id: "B09FZ8Z3RG",
    title: "Large Rolling Tray - Metal",
    price: "£7.49",
    image: "https://via.placeholder.com/250x250?text=Large+Rolling+Tray+-+Metal"
  },
  {
    id: "B08S38J7V3",
    title: "Smell Proof Storage Bag",
    price: "£22.99",
    image: "https://via.placeholder.com/250x250?text=Smell+Proof+Storage+Bag"
  },
  {
    id: "B08L9R9R8W",
    title: "Portable Dry Herb Vaporizer",
    price: "£59.99",
    image: "https://via.placeholder.com/250x250?text=Portable+Dry+Herb+Vaporizer"
  },
  {
    id: "B08F2ZQW1C",
    title: "Ashtray with Magnetic Lid",
    price: "£12.49",
    image: "https://via.placeholder.com/250x250?text=Ashtray+with+Magnetic+Lid"
  },
  {
    id: "B01MRZK0GC",
    title: "Pipe Cleaner Brush Set",
    price: "£5.99",
    image: "https://via.placeholder.com/250x250?text=Pipe+Cleaner+Brush+Set"
  },
  {
    id: "B08358ZHRF",
    title: "Stash Jar - UV Glass Airtight",
    price: "£14.95",
    image: "https://via.placeholder.com/250x250?text=Stash+Jar+-+UV+Glass+Airtight"
  },
  {
    id: "B097TNDBNM",
    title: "Dab Tool Kit - Stainless Steel",
    price: "£9.79",
    image: "https://via.placeholder.com/250x250?text=Dab+Tool+Kit+-+Stainless+Steel"
  },
  {
    id: "B08L6X7T6Y",
    title: "Grinder Cleaning Brush",
    price: "£3.95",
    image: "https://via.placeholder.com/250x250?text=Grinder+Cleaning+Brush"
  },
  {
    id: "B00TEST0011",
    title: "Accessory Product 11",
    price: "£20.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+11"
  },
  {
    id: "B00TEST0012",
    title: "Accessory Product 12",
    price: "£21.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+12"
  },
  {
    id: "B00TEST0013",
    title: "Accessory Product 13",
    price: "£22.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+13"
  },
  {
    id: "B00TEST0014",
    title: "Accessory Product 14",
    price: "£23.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+14"
  },
  {
    id: "B00TEST0015",
    title: "Accessory Product 15",
    price: "£24.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+15"
  },
  {
    id: "B00TEST0016",
    title: "Accessory Product 16",
    price: "£25.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+16"
  },
  {
    id: "B00TEST0017",
    title: "Accessory Product 17",
    price: "£26.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+17"
  },
  {
    id: "B00TEST0018",
    title: "Accessory Product 18",
    price: "£27.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+18"
  },
  {
    id: "B00TEST0019",
    title: "Accessory Product 19",
    price: "£28.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+19"
  },
  {
    id: "B00TEST0020",
    title: "Accessory Product 20",
    price: "£29.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+20"
  },
  {
    id: "B00TEST0021",
    title: "Accessory Product 21",
    price: "£30.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+21"
  },
  {
    id: "B00TEST0022",
    title: "Accessory Product 22",
    price: "£31.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+22"
  },
  {
    id: "B00TEST0023",
    title: "Accessory Product 23",
    price: "£32.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+23"
  },
  {
    id: "B00TEST0024",
    title: "Accessory Product 24",
    price: "£33.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+24"
  },
  {
    id: "B00TEST0025",
    title: "Accessory Product 25",
    price: "£34.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+25"
  },
  {
    id: "B00TEST0026",
    title: "Accessory Product 26",
    price: "£35.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+26"
  },
  {
    id: "B00TEST0027",
    title: "Accessory Product 27",
    price: "£36.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+27"
  },
  {
    id: "B00TEST0028",
    title: "Accessory Product 28",
    price: "£37.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+28"
  },
  {
    id: "B00TEST0029",
    title: "Accessory Product 29",
    price: "£38.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+29"
  },
  {
    id: "B00TEST0030",
    title: "Accessory Product 30",
    price: "£39.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+30"
  },
  {
    id: "B00TEST0031",
    title: "Accessory Product 31",
    price: "£40.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+31"
  },
  {
    id: "B00TEST0032",
    title: "Accessory Product 32",
    price: "£41.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+32"
  },
  {
    id: "B00TEST0033",
    title: "Accessory Product 33",
    price: "£42.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+33"
  },
  {
    id: "B00TEST0034",
    title: "Accessory Product 34",
    price: "£43.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+34"
  },
  {
    id: "B00TEST0035",
    title: "Accessory Product 35",
    price: "£44.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+35"
  },
  {
    id: "B00TEST0036",
    title: "Accessory Product 36",
    price: "£45.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+36"
  },
  {
    id: "B00TEST0037",
    title: "Accessory Product 37",
    price: "£46.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+37"
  },
  {
    id: "B00TEST0038",
    title: "Accessory Product 38",
    price: "£47.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+38"
  },
  {
    id: "B00TEST0039",
    title: "Accessory Product 39",
    price: "£48.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+39"
  },
  {
    id: "B00TEST0040",
    title: "Accessory Product 40",
    price: "£49.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+40"
  },
  {
    id: "B00TEST0041",
    title: "Accessory Product 41",
    price: "£50.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+41"
  },
  {
    id: "B00TEST0042",
    title: "Accessory Product 42",
    price: "£51.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+42"
  },
  {
    id: "B00TEST0043",
    title: "Accessory Product 43",
    price: "£52.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+43"
  },
  {
    id: "B00TEST0044",
    title: "Accessory Product 44",
    price: "£53.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+44"
  },
  {
    id: "B00TEST0045",
    title: "Accessory Product 45",
    price: "£54.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+45"
  },
  {
    id: "B00TEST0046",
    title: "Accessory Product 46",
    price: "£55.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+46"
  },
  {
    id: "B00TEST0047",
    title: "Accessory Product 47",
    price: "£56.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+47"
  },
  {
    id: "B00TEST0048",
    title: "Accessory Product 48",
    price: "£57.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+48"
  },
  {
    id: "B00TEST0049",
    title: "Accessory Product 49",
    price: "£58.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+49"
  },
  {
    id: "B00TEST0050",
    title: "Accessory Product 50",
    price: "£59.99",
    image: "https://via.placeholder.com/250x250?text=Accessory+Product+50"
  },
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
