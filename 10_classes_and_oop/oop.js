const user = {
  username: "Rushikesh",
  loginCount: 7,
  singnedIn: true,

  getUserDetails: function(){
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
    
  }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise();
// const date = new Date();
// new -------> Constructor

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.grettings = function (){
    console.log(`Welcome ${this.username}`);
  }

  return this;
}

const userOne = new User("rushikesh", 12, true);
const userTwo = new User("ChaiaurCode", 11, false);
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);




// new Keyword :----->
// Step 1 :
// new keyword jaise hi aap use karnege sabse pahale aapke pass empty object ({}) create hota hai. 
// Jisko instance bola jata hai.
// Step 2 :
// aapka ek constructor function call hota hai new keyword ke karan.
// constructor ye karata hai ki jitne bhi aruguments hote hai wo pack kar deta hai aur de deta hai
// Step 3 :
// this keyword ke ander jo bhi aapne arguments likhe hai wo sab inject ho jate hai
// Step 4 :
// aapko mil jate hai function ke ander