const products = [
  { name: 'Laptop', price: 500, category: 'Electronics' },
  { name: 'Phone', price: 300, category: 'Electronics' },
  { name: 'Book', price: 20, category: 'Education' },
];

const simplified = products.map(({ name, price }) => ({ name, price }));

console.log(simplified);
