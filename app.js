'strict';

let myContainer = document.querySelector('span');
let myButton = document.querySelector('section + div');

let image1 = document.querySelector('span img:first-child');
let image2 = document.querySelector('span img:nth-child(2)');
let image3 = document.querySelector('span img:nth-child(3)');

let allProducts = [];
let clicks = 0;

let clicksAllowed = 15;

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${this.name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
}

function getRandomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProduct() {
  let product1 = getRandomProduct();
  let product2 = getRandomProduct();
  let product3 = getRandomProduct();
  console.log(product1, product2, product3);
  while (product1 === product2 || product1 === product3 || product2 === product3) {
    product2 = getRandomProduct();
    product3 = getRandomProduct();
  }
  image1.src = allProducts[product1].src;
  image1.atl = allProducts[product1].name;
  allProducts[product1].views++;
  image2.src = allProducts[product2].src;
  image2.alt = allProducts[product2].name;
  allProducts[product2].views++;
  image3.src = allProducts[product3].src;
  image3.alt = allProducts[product3].name;
  allProducts[product3].views++;
  console.log(allProducts);
}

function handleProductClick(event) {
  if (event.target === myContainer) {
    alert('It works');
  }
  clicks++;
}
myContainer.addEventListener('click', handleProductClick);

let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dog = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let pet = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let water = new Product('water-can');
let wine = new Product('wine-glass');

allProducts.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dog, dragon, pen, pet, scissors, shark, sweep, tauntaun, unicorn, water, wine);

console.log(renderProduct());

