// higher order function: those functions which has function as a parameter and/or return function


res = (a * b) / (c + d)//

let calculateComplex = (A, B, C, D, multiplyFunc, sumFunc) => {
    return multiplyFunc(A, B) / sumFunc(C, D)
}

let resultComplex = calculateComplex(
    2, 3, 4, 5,
    (a, b) =>{
        console.log("multupley result:", a * b)
return a * b8
    },
    (c, d) =>{
        console.log("sum result: ", c + d)
        return c + d
    }
)