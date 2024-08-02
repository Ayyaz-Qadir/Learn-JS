/**********  THIS & Arrow function  *********/

const user = {
    username: "Ayyaz",
    price: 399,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`);  // this use in current context. object block is current context hai.
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Haseeb";
// user.welcomeMessage()

// console.log(this); // output:it is show {} brakets but it is show window in browser console


// function chai() {
//     let username = "AQ"
//     // console.log(this.username); // it will show undefine
//     console.log(this);
// }

// chai();

// const chai = function () {
//     let username = "Ayyaz Q";
//     console.log(this.username); // it also show undefine
// }

// chai();

// arrow fucntion ()=>

const chai = ()=> {
  let username = "Ayyaz Q";
//   console.log(this.username); // it also show undefine
  console.log(this); // it also show empty {}
};

// chai();

// basic arrow fucation
// const addTwo = (num1, num2)=> { 
//     return num1 + num2;
// }

// console.log(addTwo(3, 9));

// exmplicit return 
// const addTwo = (num1, num2) =>  num1 + num2; 
// console.log(addTwo(3, 9));

// implicit
// const addTwo = (num1, num2) =>  (num1 + num2); 
// // NOTE: if wrap in parnthesis() the we not use return keyword when we use  curly brakets{} then we will use return

// console.log(addTwo(3, 9));

// if we return object from fuction
const addTwo = (num1, num2) =>  ({username: "Alam"}); // we use both {} () then it will show reuslt otherwise it show an error

// console.log(addTwo(3, 9));

// const myArray = [2, 3, 6, 5, 8];

// myArray.forEach(function() {}) // it is correct syntax
// myArray.forEach(()=> {}) // it is also correct syntax with arrow function
// myArray.forEach(()=> ()) // it is also correct syntax with arrow function

