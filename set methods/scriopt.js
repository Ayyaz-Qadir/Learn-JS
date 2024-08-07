
// +++++++++++++++ first file code ++++++++++++
/******     setTimeout() method      ******/

// it will print after 2 second jsut one time

// setTimeout(() => {
//   console.log("Ayyaz Qadir.");
// }, 2000);



const sayAyyaz = function () {
    console.log("Ayyaz");
}
// it will print the name after 2 second with function rafrence
// setTimeout(sayAyyaz, 2000);


const changeText = function () {
    document.querySelector("h1").innerHTML = "Best JS Series";
}

// const changeMe =  setTimeout(changeText, 2000);


/******     clearTimeout() method      ******/


// when we click on button before changing text then it 
//will worked after change it will not changed befored text
document.querySelector('#stop').addEventListener('click', (e)=>{
    clearTimeout(changeMe);
    // console.log('stopped');    
});



// ++++++++++++++++ second file code +++++++++++++++


/******     setInterval() method      ******/

// it will continusing print Ayyaz every 2 second

// setInterval(function () {
//     console.log("Ayyaz Qadir");
// }, 2000);


const sayDate = function (AoA) {
    console.log(AoA, " Ayyaz", Date.now());
}

let intervalId;


document.querySelector("#start").addEventListener('click', ()=>{
    intervalId = setInterval(sayDate, 2000, "AoA"); 
});

document.querySelector("#end").addEventListener("click", () =>{
    clearInterval(intervalId);
});


