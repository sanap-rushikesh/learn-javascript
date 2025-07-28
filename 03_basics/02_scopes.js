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
