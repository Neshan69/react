// Task 8 – Rest Operator (Sum of Numbers)
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
const result = sumAll(1, 2, 3, 4);
console.log(result); // 10
