// Task 10 – Merge and Destructure Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
const { a, d } = merged;
console.log(a); // 1
console.log(d); // 4
