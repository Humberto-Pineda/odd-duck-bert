'use strict';

let myContainer = document.querySelector('span');
// let myButton = document.getElementById('button');

let image1 = document.querySelector('span img:first-child');
let image2 = document.querySelector('span img:nth-child(2)');
let image3 = document.querySelector('span img:nth-child(3)');

let allProducts = [];
// let indexArray = [];
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

  while (product1 === product2 || product1 === product3 || product2 === product3) {
    product2 = getRandomProduct();
    product3 = getRandomProduct();
  }

  // while (indexArray.length < 6) {
  //   let randomNum = getRandomProduct();
  //   if (!indexArray.includes(randomNum)) {
  //     indexArray.push(randomNum);
  //   }
  // }
  // let product1 = indexArray[0];
  // let product2 = indexArray[1];
  // let product3 = indexArray[2];

  image1.src = allProducts[product1].src;
  image1.alt = allProducts[product1].name;
  allProducts[product1].views++;
  image2.src = allProducts[product2].src;
  image2.alt = allProducts[product2].name;
  allProducts[product2].views++;
  image3.src = allProducts[product3].src;
  image3.alt = allProducts[product3].name;
  allProducts[product3].views++;
  // console.log(allProducts);
}

function handleProductClick(event) {
  if (event.target === myContainer) {
    alert('It works');
  }
  clicks++;
  let clickedProduct = event.target.alt;

  for (let i = 0; i < allProducts.length; i++) {
    if (clickedProduct === allProducts[i].name) {
      allProducts[i].clicks++;
      break;
    }
  }
  renderProduct();
  if (clicks === clicksAllowed) {
    // myButton.className = 'clicks-allowed';
    myContainer.removeEventListener('click', handleProductClick);
    // myButton.addEventListener('click', handleButtonClick);
    renderChart();
  }
}

// function handleButtonClick(event) {
//   if(clicks === clicksAllowed) {
//     renderResults();
//   }
// }

let ul = document.querySelector('ul');

// function renderResults() {
//   for (let i=0; i < allProducts.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${allProducts[i].name} had ${allProducts[i].views} and was clicked on ${allProducts[i].clicks} times`;
//     ul.appendChild(li);
//   }
// }

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

function renderChart() {
  let productNames = [];
  let productViews = [];
  let productVotes = [];
  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
    productViews.push(allProducts[i].views);
    productVotes.push(allProducts[i].clicks);
  }
  console.log(productNames);

  const labels = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

  const data = {
    labels: productNames,
    datasets: [
      {
        label: 'Views',
        data: productViews,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      },
      {
        label: 'Votes',
        data: productVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}