// Singleton Object
const tinderUser = new Object();

// Non-singleton Object
const tinderUser2 = {};

// console.log(tinderUser);
// console.log(tinderUser2);

const tinderUser3 = {};
tinderUser3.id = "123abc";
tinderUser3.name = "Sammy";
tinderUser3.isLoggedIn = false

// console.log(tinderUser3);


const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullname: {
      firtname: "rushikesh",
      lastname: "sanap"
    }
  }
}

// console.log(regularUser.fullName.userfullname.firtname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj7 = {5: "c", 6: "d"};

const obj3 = {obj1, obj2};
const obj4 = Object.assign(obj1, obj2);
const obj5 = Object.assign({}, obj1, obj2, obj3);

// console.log(obj3);
// console.log(obj4);
// console.log(obj5);

const obj8 = {...obj1, ...obj2, ...obj7};
// console.log(obj8);

const users = [
  {
    id: 1,
     email: "h@gmail.com"
  },
  {
    id: 1,
     email: "h@gmail.com"
  },
  {
    id: 1,
     email: "h@gmail.com"
  }
]

users[1].email
console.log(tinderUser3);

console.log(Object.keys(tinderUser3));
console.log(Object.values(tinderUser3));
console.log(Object.entries(tinderUser3));

console.log(tinderUser3.hasOwnProperty('isLoggedIn'));
console.log(tinderUser3.hasOwnProperty('isLogged'));
