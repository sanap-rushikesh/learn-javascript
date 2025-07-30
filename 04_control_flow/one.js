// if

// if(true){
  // console.log("executed");
// }

// const  isUserLoggedIn = true;
// if(isUserLoggedIn){
//   console.log("executed");
// }

// if(2 === "2"){
//   console.log("executed");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;
// if(score > 100){
//   // var power = "fly";
//   let power = "fly";
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 100;
// if(balance < 500) console.log("test"), console.log("test 2");

// const balance = 1000;

// if(balance < 500){
//   console.log("Less than 500");
// }
// else if(balance < 750){
//   console.log("Less than 750");
// }
// else if(balance < 1000){
//   console.log("Less than 1000");
// }
// else if(balance < 1200){
//   console.log("Less than 1200");
// }

// const userLoggedIn = true;
// const debitCard = true;

// if(userLoggedIn && debitCard && 2==2){
//   console.log(`Allow to buy a course`);
// }

const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if(loggedInFromGoogle || loggedInFromEmail){
  console.log("User logged in");
}