console.log("Hello World")
let a = 10
const PI = 3.14
var msg = "Hello World"
console.log(a, PI, msg)

//function declaration
function disp(){
    var x = 100
    console.log("inside display:", x)
}
disp()
// console.log("outsite display:", x)

//block scope bariables (let and const)
if(true){
    var test = "Test"
    let price = 100
    console.log("Pric:", price)

}
console.log(test)
// console.log(price)

//arrow funciton

let add = (a,b) => a+b
let res = add(10,51)
console.log("re:", res)

//display
let display = (name)=>{

    console.log("hello", name)
}
display("Hari")