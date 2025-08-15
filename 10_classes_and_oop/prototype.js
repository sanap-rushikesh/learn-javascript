// let myName = "rushikesh      ";
// let myChannel = "chai      ";

// console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}

Object.prototype.rushikesh = function(){
  console.log(`rushikesh is present in all objects`);
}

Array.prototype.heyRushikesh = function(){
  console.log(`Rushikesh says hello`);
  
}

// heroPower.rushikesh();
// myHeros.rushikesh();
// myHeros.heyRushikesh();
// heroPower.heyRushikesh();


// inheritance

const user = {
  username: "chai",
  email: "chai@google.com"
}

const teacher = {
  makeVideo: true
}

const teachingSupport = {
  isAvailable: false
}

const taSupport = {
  makeAssignment: 'JS Assignment',
  fullTime: true,
  __proto__: teachingSupport
}

teacher.__proto__ = user

// modern syntex
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUsername = "chaiAurCode     ";

String.prototype.trueLength = function(){
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"rushikesh".trueLength();
"chai".trueLength();