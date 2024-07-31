/****** Array part#1 in Javascript. ******/

const myArr1 = [1, 2, 3, 4, 5];
// console.log(myArr1[0]);

const myHero = ["Ali", "Umar", "Usman"];
// console.log(myHero[0]);

const myArr2 = new Array(11, 12, 13, 14, 15);
// console.log(myArr2[3]);

// Array methods

const myArr = [1, 2, 3, 4, 5];
// myArr.push(6);  // it will add new number in array
// myArr.push(7);  // it will add new number in array
// myArr.pop();    // it remove last number of array

// myArr.unshift(11);  // it add new number in the start of array
// myArr.shift();   // it will remove the number from start from array

// console.log(myArr.includes(2));  // it will check the number in the array and return the result in the form of true or false
// console.log(myArr.indexOf(4));  // it will check the number in the array and return the result in the form of index

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr); // join methed change the type & convert the value in form string
console.log("A ", myArr);

const myA1 = myArr.slice(1, 3); // slice() creates a new array with a portion of elements copied from the original array

console.log("slice ", myA1);
console.log("B ", myArr);

const myA2 = myArr.splice(1, 3); //  splice() mutates the original array itself by removing, replacing or adding elements to it

console.log("splice ", myA2);
console.log("c ", myArr);
