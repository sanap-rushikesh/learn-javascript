const promiseOne = new Promise(function(resolve, reject){
  // Do an async task
  // DB Calls, cryptography, network
  setTimeout(function(){
    console.log('Async task is complete');
    resolve();
  }, 1000)
})

promiseOne.then(function(){
  console.log('Promise Consumed');
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Async task 2 is complete');
  }, 1000)
  resolve();
}).then(function(){
  console.log('Async 2 resolved');
})


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({
      userName: "chai",
      email: "chai@example.com"
    })
  }, 1000);
})

promiseThree.then(function(user){
  console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({username: "rushikesh", passoword: "12345"});
    }
    else{
      reject('ERROR: Something Went Wrong');
    }
  }, 1000)
})

promiseFour.then((user) => {
  console.log(user);
  return user.username;
}).then((username) => {
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(() => console.log('The promise is already resolved or rejected'));


const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    // let error = false;
    let error = true;
    if(!error){
      resolve({username: "JavaScript", password: "123"});
    }
    else{
      reject('ERROR: JS went worong');
    }
  }, 1000)
})

async function consumePromiseFive(){
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();


// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response);
    
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
    
//   }
// }

// getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error)
)