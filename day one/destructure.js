let animals ={
    name: 'cow',
    color: 'black',
    no_of_legs: 4
}

let {color, name, no_of_legs} = animals
console.log("Name: ", name)
console.log("No of legs: ", no_of_legs)

let myfunc = ({name,color})=>{
    console.log("name and color : ", name, color)
}
myfunc(animals)
// myfunc(color)