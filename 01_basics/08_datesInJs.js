//****************************************** Dates and Time *************************************************

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate3 = new Date("2023-01-14");
let myCreatedDate4 = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toLocaleString());
// console.log(myCreatedDate4.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`)

newDate.toLocaleString('default', {
  weekday: "long"
})