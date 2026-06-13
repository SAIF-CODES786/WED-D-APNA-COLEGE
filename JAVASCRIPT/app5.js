function hello() {
    console.log("Hello, World!");
}
hello();


function printMessage(message) {
    console.log("message");
    console.log("Message printed successfully.");
}

printMessage();

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
print1to5();


function isAdult() {
    const age = 20; // You can change this value to test with different ages
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are not an adult.");
    }
}

isAdult();

// practice questons

function printPoem() {
    console.log("Roses are red,");
    console.log("Violets are blue,");
    console.log("Sugar is sweet,");
    console.log("And so are you.");
}
printPoem();


// practice question 2

function torolladice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log("You rolled a " + diceRoll);
}
torolladice();


// function with arguments
function greet(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greet("Alice", 25);
greet("Bob", 30);
greet("Charlie", 35);
    

function sum(a, b) {
    console.log(a + b);
}
sum(5, 10);
sum(20, 30);
sum(15, 25);




// pratice question
function average(num1, num2, num3) {
    let avg = (num1 + num2 + num3) / 3;
    console.log("The average is: " + avg);
}
average(10, 20, 30);
average(5, 15, 25);
average(8, 12, 16);


function multiplicationTable(number) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = number; i <= number * 10; i += number) {
        console.log(i);
    }
}

multiplicationTable(5);
multiplicationTable(7);



// return keyword
function add(a, b) {
    return a + b;
}
const result = add(10, 20);
console.log("The sum is: " + result);



function isAdult(age) {
    if (age >= 18) {
        return "You are an adult.";
    } else {
        return "You are not an adult.";
    }

    console.log("This line will never be executed.");
}


// practice question
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Example usage:
let strr = ["hi", "hello", "welcome"];
 function concat(strr) {
    let result= "";
    for (let i = 0; i < strr.length; i++) {
        result += strr[i];
    }
    return result;
 }


 // scope - it is the area where a variable is defined and can be accessed. There are two types of scope: global scope and local scope.
 // function scope - variables defined inside a function are local to that function and cannot be accessed outside of it. Global scope - variables defined outside of any function are global and can be accessed from anywhere in the code.
let sum = 56; // global scope
function calSum(a, b) {
    let sum = a + b;
    console.log("The sum is: " + sum);
}