const products = [
  { name: 'Laptop', price: 50 },
  { name: 'Phone', price: 150 },
  { name: 'Book', price: 25 },
];

const cheapProducts = products.filter(product => product.price < 100);

console.log(cheapProducts);
