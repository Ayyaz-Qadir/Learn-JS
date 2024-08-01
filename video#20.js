/******* Scope Level & Mini Hoisting *******/

/** ---  nasted Scope  --- **/

function one(){
    const username = "Ayyaz"

    function two(){
        const website = "bytwise"
        console.log(username);
    }
    // console.log(website);
    two()    
}

// one()

if (true) {
    const username = "Ayyaz"
    if (username === "Ayyaz") {
        const website = " bytewise"
        // console.log(username + website);   
    }
    // console.log(website);
}

// console.log(username);


//------------------- interesting --------------

console.log(addOne(5)); // it give not error when we access it initialization
;
function addOne(num){
    return num +1
}


console.log(addTwo(5)); // it give error when we access it initialization
const addTwo = function(num){
    return num +2
}

