// arrayexample
let fruits = ['apple', 'coconut', 'orange', 'mango']
console.log(`fruits at 0: ${fruits[0]}`)
//adding new element
fruits.push("Papaya")
console.log("All fruits: ", fruits)
fruits.pop()
console.log("After pop: ",fruits)
//updating elemt of index 2

fruits[2] = "banana"
console.log("After update at 2: ", fruits)

let indexOfCoconut = fruits.findIndex((ele)=>{
    return ele == "coconot"
})
console.log("index of coconut : ", indexOfCoconut)
//finding element in array
let matchedEle = fruits.find((ele)=>{
return ele == "mango"
})
console.log("matched ele: ", matchedEle)
fruits.splice(2,1)
console.log("after removing of index 2: ", fruits)
