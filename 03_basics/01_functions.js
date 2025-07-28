function sayMyName(){
  console.log("R");
  console.log("U");
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("K");
  console.log("E");
  console.log("S");
  console.log("H");
}
// sayMyName();

function addTwoNumbers(number1, number2){
  console.log(number1 + number2);
}
// addTwoNumbers(3, 4);
// addTwoNumbers(3, "4");
// addTwoNumbers(3, "a");
// addTwoNumbers(3, null);
// addTwoNumbers(3, undefined);

function addTwoNumbers(number1, number2){
  // const result = number1 + number2;
  // return result;

  return number1 + number2;
}
const ans = addTwoNumbers(5, 3);
// console.log("Final ans is: ", ans);

function loginUserMessage(username = "sam"){
  if(!username){  // username === undefined
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("rushikesh"));


// ********************************** Function and Objects *****************************************

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCartPrice(200, 400, 600, 800, 1000, 5000));

const user = {
  username: "rushikesh",
  // price: 199
  prices: 199
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
// handleObject({
//   username: "sam",
//   price: 199
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([300,600,900,1200,1500]));
