let student ={
    fullName: "Harka Bahadur",
    roll: 52,
    marks: 525,
    behaviour:"very worst"
}
//converting object (key:value pair)
//loop connot be used directly in object so we have to convert it to array
let keyArr = Object.keys(student)
console.log("only key array: ", keyArr)
let valueArr = Object.values(student)
console.log("only value array: ",valueArr)
//value and key combination is called entries
let entriesArr = Object.entries(student)
console.log("entires array : ", entriesArr)