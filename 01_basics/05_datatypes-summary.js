// Primitive

// 7 Types : String, Number, Boolean, null, undefined, dymbol, BigInt

// JavaScript is dynamically typed language
// let x = 5;       // x is a number
// x = "hello";     // now x is a string

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')
// console.log(id === anotherId);

const bigNumber = 34555454343434334734333n
// console.log(typeof bigNumber);




// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "ironman", "naagraj", "doga"];
console.log(typeof heros);


let myObj = {
  name: "rushikesh",
  age: 23
}
console.log(typeof myObj);


const myFunction = function () {
  console.log("Hello world");
}
console.log(typeof myFunction);
