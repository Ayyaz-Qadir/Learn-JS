/******  Immediately Invoked Function Expressions(IIFE)  ******/

// it is used for stop global pollution or errors

(function chai() {
    // named IIFE
    console.log('DB CONNECTED');
})(); 
// NOTE: first parentheses for function defination & second parentheses for function calling therefore it showed the result & also samicolom is compalsary for stoping function other it show errer with other fuctions we creates


((name)=> {
    // simple IIFE
    console.log(`DB 2 CONNECTED ${name}?`);
})("AYYAZ");