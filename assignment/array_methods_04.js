const users = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 19 },
];

const adult = users.find(user => user.age > 18);

console.log(adult);
