const numbers = [5, 12, 8, 130, 44];

const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);

console.log(max);
