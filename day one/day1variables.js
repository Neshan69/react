console.log("Hello World")
let a = 10
const PI = 3.14
var msg = "Hello World"
console.log(a, PI, msg)

//function declaration
function disp() {
    var x = 100
    console.log("inside display:", x)
}
disp()
// console.log("outsite display:", x)

//block scope bariables (let and const)
if (true) {
    var test = "Test"
    let price = 100
    console.log("Pric:", price)

}
console.log(test)
// console.log(price)

//arrow funciton

let add = (a, b) => a + b
let res = add(10, 51)
console.log("re:", res)

//display
let display = (name) => {

    console.log("hello", name)
}
display("Hari")

//first day js practice

let message = "Welcome to first dau js practice"
let name = "Pradip Shrestha"
let role = "Director"
let salary = 40000
//using template literals to combine all these variables value

let combineMsg = `${message}, My full name is ${name.toUpperCase()} and my role is ${role}. My salary is ${salary}`
console.log(combineMsg)
//without usign template literals or traditional way
let traditionalMsg = message + ".My full name is " + name.toUpperCase() + " and my role is " + role + ". My salary is " + salary
console.log(traditionalMsg)


//defailt parameters

let divide = (a, b) => {
    let divideRes = a / b
    console.log(`Divide result is = ${divideRes}`)
}
divide()
divide(32, 12)
divide(32)