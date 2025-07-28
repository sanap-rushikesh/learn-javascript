// Global Scope
// var c = 300;
let a = 300;

if(true){
  // Block Scope
  // console.log("Inner: ", a); // ReferenceError: Cannot access 'a' before initialization
  let a = 10;
  // console.log("Inner: ", a);
  const b = 20;
  // var c = 30;
  c = 30;
}

// console.log("Outer: ", a);
// console.log(b);
// console.log(c);


// ************************************ Scope level and mini hoisting *************************************

function one(){
  const username = "rushikesh"

  function two(){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);
  // two();
  
}
// one();

if(true){
  const username = "rushikesh";
  if(username === "rushikesh"){
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website); 
}
// console.log(username);


// **************************** hoisting **********************************
console.log(addone(5));
function addone(num){
  return num + 1;
}

addTwo(5);
const addTwo = function(num) {
  return num + 2;
}

