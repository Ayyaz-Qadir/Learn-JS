/****** Global & Local Scope ******/

// outside the block is global scope

let a = 500;
const b = 900;
let c = 1000;
if (true) {
  let a = 10; // let not called outside the block
  const b = 20; // const not called outside the block
  //var c = 30; // var is calling outside the block therefore people not use it
  
  console.log('inner a: ', a);
  console.log('inner b: ', b);
  console.log('inner c: ', c);
  // block scope
}

console.log("outer a: ", a);
console.log("outer b: ", b);
console.log("outer c: ", c);

