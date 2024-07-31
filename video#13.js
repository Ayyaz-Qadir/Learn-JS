/****** Array part#2 in Javascript ******/

const myHeros = ['Ali', 'Umar', 'Hussain'];
const familyHeros = ['bro', 'dad', 'mom'];

// myHeros.push(familyHeros); // it will add array in the array like an element

// console.log(myHeros);

// const allHeros = myHeros.concat(familyHeros); // in this way it will add one to another
// console.log(allHeros);

const all_new_heros = [...myHeros, ...familyHeros];
// console.log(all_new_heros); // spread operator also add array one to another

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const use_another_array = another_array.flat(Infinity);

console.log(use_another_array); // it will add the all array or nested arrays in one array

console.log(Array.isArray("Ayyaz_Qadir")); // it will tell us it is array or not
console.log(Array.from("Ayyaz_Qadir"));  // it will make the string into array

console.log(Array.from({name: "Ayyaz_Qadir"})); // when we tell them then it will make array otherwise it will show empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1, score2, score3, score4)); // it will make array with variables

