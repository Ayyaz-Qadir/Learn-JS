// promise one
const promiseOne = new Promise(function (resole, reject) {
  // do an async task
  // DB calls, crytography, network
  setTimeout(() => {
    console.log("Async Task is Complete");
    resole();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

// promise two
new Promise(function (resole, reject) {
  setTimeout(() => {
    console.log("Async Task 2");
    resole();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});

// promise three
const promiseThree = new Promise(function name(resole, reject) {
  setTimeout(() => {
    resole({ username: "Ayyaz", email: "abc@gamil.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// promise four
const promiseFour = new Promise(function (resole, reject) {
  setTimeout(() => {
    let error = true;
    //  error = false;
    if (!error) {
      resole({ username: "Ayyaz", email: "abc@gamil.com", password: "12345" });
    } else {
      reject("ERROR Something went wrong!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("the pormise is either resolved or rejectet"));

// promise five
const promiseFive = new Promise((resole, reject)=>{
    setTimeout(() => {
      let error = true;
      //  error = false;
      if (!error) {
        resole({
          username: "JavaScript",
          email: "abc@js.com",
          password: "54321",
        });
      } else {
        reject("ERROR JS went wrong!");
      }
    }, 1000);
});


async function consumePomiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePomiseFive();


// this code is for next class

// async function getAllUser() {
//     try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         const data = await response.json();
//         console.log(data);  
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUser();


fetch("https://api.github.com/users/Ayyaz-Qadir")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));