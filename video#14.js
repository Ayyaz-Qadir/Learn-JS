/****** Objects in depth in javascript ******/ 

// singleton

// object with literals not singleton
// object with constractor will be singleton

/*----- object literals -----*/

const mySymbol = Symbol("key"); // simply declear symbol

const JsUser = {
    name: "Ayyaz",
    "full name": "Ayyaz Qadir",
    [mySymbol]: "mySymbolkey", // in this way we can declear symbol in the object
    age: 18,
    location: "Lohare",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}
// two method of call object values
// console.log(JsUser.name);  // first is with dot(.) mehtod 
// console.log(JsUser["email"]);  // second is with braket[] method
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);

JsUser.email = "abc@yahoo.com";  // change the value of object email

// Object.freeze(JsUser); // it will freeze the values and will not change

JsUser.age = 20;  // it is not changed
// console.log(JsUser.age);

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User, ${this.name}`);
}

// console.log(JsUser.greeting()); // when we wil freeze JsUser then it will not work
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 

//note: we will access value of object with dot 