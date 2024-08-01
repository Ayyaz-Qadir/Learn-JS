/****** Functions with Objects & Array ******/

function calculateCartPrice(val1, val2, ...num1){ // rest operator & spread operator look same
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 500, 600));


const user = {
    username: "Ayyaz Qadir",
    price: 299
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}rs`);   
}

// handleObject(user);
handleObject({
    username: "Ayyaz",
    price: 599
})

const myArray = [200, 300, 400, 500];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400, 500, 100]));
