/******  High Order Array Loops  ******/

/** -------For Of------ **/

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(`value of array is ${num}`);
// }


// const greetings = "Hello World!";
// for (const greet of greetings) {
//     if (greet == ' ') {
//         console.log(`Each char of String is -`);
//         continue;
//     }
//     console.log(`Each char of String is ${greet}`);
// }

// Maps

const map = new Map() // map in define

map.set('PAK', "Pakistan") // map key & value assgin
map.set('UK', "United Kingdom") // map key & value assgin
map.set('Fr', "France") // map key & value assgin
map.set("PAK", "Pakistan") // map key & value assgin

// console.log(map);

// for (const key of map) {  // it will put the whole key & value in one array
//     console.log(key);
// }

// for (const [key,value] of map) {  // if wand to print key then we will write key or value enter value print or both enter both print [key & value]
//     console.log(key + ' :- ' + value);
// }

const myObj = {
    "game1": 'NFC',
    "game2": 'Spidarman',
    "game3": 'GTA 5'
}

// for (const [key, value] of myObj) { // object is not iterable
//     console.log(key, ":-", value);
// }

/** -------For In------ **/

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for (const key in myObject) {
//     console.log(key); // it will show key of object
//     console.log(myObject[key]); // it will show value of object
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`); 
// }


const programming = ["js", "rb", "py", 'java', 'cpp'];

// for (const key in programming) {
//     // console.log(key); // it will show the key or index of array 
//     console.log(programming[key]); // it will show the index value of array 
// }

// for (const key in programming) {
//     // console.log(key);
//     console.log(programming[key]);
// }

// NOTE: map will not iterable in for in loop

// const map1 = new Map() // map in define

// map1.set('PAK', "Pakistan") // map key & value assgin
// map1.set('UK', "United Kingdom") // map key & value assgin
// map1.set('Fr', "France") // map key & value assgin
// map1.set("PAK", "Pakistan") // map key & value assgin

// for (const key in map1) {
//     console.log(key);
// }

/** -------For Each------ **/

const coding = ["js", "rb", "py", "java", "cpp"];

// coding.forEach(function(item) { // call back function don't have name
//     console.log(item);
// }); 

// coding.forEach((element) => {
//     console.log(element);
// });

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// });

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
] // object in array

myCoding.forEach((item)=>{ // object from array by forEach loop
    console.log(item.languageName);
    
});