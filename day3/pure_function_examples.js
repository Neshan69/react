// pure function: those functions which donot have side effects that means external variable doesn't effect the result of the function.

const PI = 3.24
//pure function
let calculate = (x,y) => {
console.log("Sum of x and y: ", x+y)
}

//impure function
let calculateArea = (radius) => {
    console.log("Area of circle: ", PI*radius*radius)
}
calculate(2,3)
calculateArea(5)
