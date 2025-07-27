const name = "rushikesh";
const repoCount = 50;

// console.log(name + repoCount + " value");

// console.log(`My name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('rushikesh-rs');

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-11, 4);
// console.log(anotherString);

const newStringOne = "     rushikesh     ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

// console.log(url.replace('%20', '-'));
// console.log(url.includes('hitesh'));
// console.log(url.includes('rushikesh'));

console.log(gameName.split('-'));
