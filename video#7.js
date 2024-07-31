/***** Data types of javascript summary *****/


// Primitive Datatypes

//   7-types : 1.String, 2.Number, 3.Boolean, 4.null, 5.undefined, 6.Symbol, 7.BigInt

const score = 100; // number
const scoreValue = 100.5; // number 
// console.log(typeof score);  // output number
// console.log(typeof scoreValue);  // output number

const islLoggedIn = false; // boolean
// console.log(typeof islLoggedIn);  // output boolean

const outSideTemp = null; // null
// console.log(typeof outSideTemp);  // output object

let userEmail; // undefined
// console.log(typeof userEmail);  // output undefined

const id = Symbol("123"); //symbol
const anotherId = Symbol("123");  //symbol
// console.log(typeof id);  // output symbol

// console.log(id == anotherId);

// const bigNumber = 09997123412349729n; // big int or 'n' represent a bigint
// console.log(typeof bigNumber); // output undefined


// ---------------------------------------------------------------------------------------------------------


//  Reference (Non-Primitive)

//   Array, Objects, Functions

const heros = ['Ali', 'Umor', 'Usman']; // array
// console.log(typeof heros);  // output object

let myObj = {   // Object
    name: "Ayyaz",
    age: 22,
}
// console.log(typeof myObj);  // output object

const myFunction = function() {
    console.log("hello world");
}
console.log(typeof myFunction);  // output function

