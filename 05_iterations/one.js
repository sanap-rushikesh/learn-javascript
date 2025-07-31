// for 

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if(i == 5){
//     console.log("5 is best number");
//   }
//   console.log(element);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`Outer loop: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     // console.log(`Inner loop: ${j} & Outer loop: ${i}`);
//     console.log(i + '*' + j + '=' + i*j);
//   }
// }

// let myArray = ["flash", "batman", "superman"];

// for (let index = 0; index <= myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }


// break and continue

// for (let index = 1; index <= 10; index++) {
//   if(index == 5){
//     console.log("5 is detected");
//     break;
//   }
//   console.log(`Value is ${index}`);
// }

for (let index = 1; index <= 10; index++) {
  if(index == 5){
    console.log("5 is detected");
    continue;
  }
  console.log(`Value is ${index}`);
}