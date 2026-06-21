// original fruits array

let fruits = ['apple', 'banana']
console.log("FRUITS: ", fruits)
// all array and object are mutable initially

let tempFruits = fruits
tempFruits.push('orange')
console.log("TEMP FRUITS: ", tempFruits)
console.log("Original fruits arr: ", fruits)
//immutability principle:origin\l array or object should never be chnaged i.e must be immutable forever
//fir tgus yse soread operator

let newFruits = [...fruits]
newFruits.push('mango')
console.log("NEW FRUITS: ", newFruits)
console.log("[...fruits]: ", [...fruits])   