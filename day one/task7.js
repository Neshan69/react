// Task 7 – Default Parameters
function sayHello(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
sayHello("Alice"); // Hello, Alice!
sayHello();       // Hello, Guest!
