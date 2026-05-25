let numbers = [23,32,423,41]

console.log("without spread: ", numbers)
console.log("with spread operator: ", ...numbers)

//rest and spread operator(...)
//merging two arrays
let maxNums =[982,512]
let mergedArr = [...numbers, ...maxNums]
console.log("merged arra: ", mergedArr)

//rest example
let add = (...values)=>{
    let res = values.reduce(
       ( accumulator, ele)=>{
            return accumulator + ele
        },
        0 //initial value of accumulator
    )
    console.log("add result: ", res)
}
add(...numbers)
add(234,423,525,251,51,1,2,4,5)
