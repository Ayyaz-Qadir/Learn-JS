/****** Date and time in depth in javascript ******/

// --------- Dates ---------

let currentDate = new Date();
// console.log(currentDate.toString());  // output Wed Jul 31 2024 14:04:32 GMT+0500 (Pakistan Standard Time)
// console.log(currentDate.toDateString());  // output Wed Jul 31 2024
// console.log(currentDate.toLocaleString());  // output 7/31/2024, 2:04:32 PM
// console.log(currentDate.toJSON());  // output 2024-07-31T09:04:32.255Z

// console.log(typeof currentDate); // output object


// let createdDate = new Date(2016, 0, 23);
// console.log(createdDate.toDateString);
// let createdDate = new Date(2016, 0, 23, 5, 3);
// console.log(createdDate.toLocaleString());
let createdDate = new Date("01-20-2200");
// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(`Month is ${newDate.getMonth() + 1}`); // we use +1 because it start from 0.
// console.log(`Today Day is ${newDate.getDay()}`); // it is start from monday(1---7)

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: "GMT"
});

console.log(newDate.toLocaleString('default',{
    weekday: "long"
    // timeZone: "GMT"
}));