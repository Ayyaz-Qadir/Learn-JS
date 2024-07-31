/*****  
Stack and Heap memory in javascript *****/

// stack memory use at Primitive (when we use we will get a copy)
// heap memory use at Non-Premitive (when we use it we will get a refrence)

// stack memory use at Primitive (when we use we will get a copy)

let myName = "Ayyaz";
// myAnotherName = myName;
myAnotherName = "Qadir";

// console.log(myName);
// console.log(myAnotherName);

// heap memory use at Non-Premitive (when we use it we will get a refrence)

let userOne = {
    email: "abc@gmail.com",
    up: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "def@google.com";

console.log(userOne);
console.log(userTwo);