//******************************************* Number ********************************************

const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(2));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


//******************************************* Maths ********************************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(2,4,6,8,10));
// console.log(Math.max(2,4,6,8,10));

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
