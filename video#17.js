/******  Functions & Parameter  ******/

function sayMyName() {
    console.log("A");
    console.log("Y");
    console.log("Y");
    console.log("A");
    console.log("Z");    
}

// sayMyName();

// function addTwoNumbers(number1, number2){  // parameters
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 4);
// console.log(result); // it will show undefined



function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
    console.log("ayyaz"); // it will not run because it coming after the return
}

let result = addTwoNumbers(3, 5);
// console.log("Result: ",result);


function logInUserMessage(username){
    // if(username === undefined){
    if(!username){
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`;
}

// console.log(logInUserMessage("Ayyaz Qadir"));
console.log(logInUserMessage());