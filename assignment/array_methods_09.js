const users = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 19 },
];

const adultNames = users
  .filter(user => user.age >= 18)
  .map(user => user.name.toUpperCase());

console.log(adultNames);
