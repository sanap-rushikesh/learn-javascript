// Singleton
Object.create

// Object.create

const mySym = Symbol("key1");

const JsUser = {
  name: "Rushikesh",
  "full name": "Rushikesh Sanap",
  [mySym]: "mykey1",
  age: 23,
  location: "Pathardi",
  email: "sanaprushikesh18@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "rushikesh@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "rushikesh@microsoft.com";
// console.log(JsUser);

JsUser.greetings = function () {
  console.log("Hello Js User");
}

JsUser.greetingsTwo = function () {
  console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
