let obj ={
    price: 567.8,
    "name":"Television",
    status: true,
}
//Accessing value of object with key
//1. Bracket notation
console.log("Price: ", obj["price"])
console.log('status: ', obj["status"])
//2.dot Notation(recommended)
console.log("Price with dot: ", obj.name)
console.log("name: ", obj.name)
console.log("Price: ", obj.price)

// Adding New key:value pair
obj.address = "KTM"
console.log("After adding: ", obj)

//updating existing kay's value
obj.status = false
console.log("After update: ", obj)

//deleting key:value pair
delete obj.price
console.log("after delete:", obj)

