let student = {
    fullName: "Harka Bahadur",
    roll: 52,
    marks: 525,
    behaviour: "very worst"
};

let keyArray = Object.keys(student);
let valueArray = Object.values(student);
let entriesArray = Object.entries(student);

// MAP
let keyLengths = keyArray.map(key => key.length);
console.log("Key lengths (map):", keyLengths);

let marksPlusTen = valueArray.map(val => (typeof val === 'number' ? val + 10 : val));
console.log("Values after adding 10 to numbers (map):", marksPlusTen);

// FOREACH
console.log("ForEach on keyArray:");
keyArray.forEach((key, idx) => {
    console.log(`Key #${idx + 1}: ${key}`);
});

console.log("ForEach on valueArray:");
valueArray.forEach((val, idx) => {
    console.log(`Value #${idx + 1}: ${val}`);
});

console.log("ForEach on entriesArray with destructuring:");
entriesArray.forEach(([key, value]) => {
    console.log(`Entry - Key: ${key}, Value: ${value}`);
});

// FIND
let firstStringKey = keyArray.find(key => typeof student[key] === 'string');
console.log("First key with string value (find):", firstStringKey);

let firstHighMark = valueArray.find(val => typeof val === 'number' && val > 100);
console.log("First value > 100 (find):", firstHighMark);

// FILTER
let numberKeys = keyArray.filter(key => typeof student[key] === 'number');
console.log("Keys with number values (filter):", numberKeys);

let stringValues = valueArray.filter(val => typeof val === 'string');
console.log("String values (filter):", stringValues);

let highMarkEntries = entriesArray.filter(([key, value]) => typeof value === 'number' && value > 100);
console.log("Entries with value > 100 (filter):", highMarkEntries);

// REDUCE
let marksSum = valueArray.reduce((acc, val) => typeof val === 'number' ? acc + val : acc, 0);
console.log("Sum of all number values (reduce):", marksSum);

let allBehaviours = entriesArray.reduce((arr, [key, value]) => {
    if (key === 'behaviour') arr.push(value);
    return arr;
}, []);
console.log("All behaviours collected (reduce):", allBehaviours);

// FOR-IN
console.log("For-in loop over student object:");
for (let key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(`For-in: ${key} => ${student[key]}`);
    }
}

// FOR-OF
console.log("For-of loop over keyArray:");
for (let k of keyArray) {
    console.log(`For-of (keyArray): ${k}`);
}

console.log("For-of loop over valueArray:");
for (let v of valueArray) {
    console.log(`For-of (valueArray): ${v}`);
}

console.log("For-of loop over entriesArray with destructuring:");
for (let [key, value] of entriesArray) {
    console.log(`For-of (entriesArray): Key=${key}, Value=${value}`);
}