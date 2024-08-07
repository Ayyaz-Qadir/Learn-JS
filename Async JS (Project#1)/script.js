const randomColor = ()=>{
    const hex = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()  * 15)];
    }
    return color;
};
console.log(randomColor());

let intervalId;
const startColorChanger = function () {
  intervalId = setInterval(changeBGColor, 1000);

  function changeBGColor() {
    document.body.style.backgroundColor = randomColor();
    document.querySelector("#hexCode").innerHTML = randomColor();
  }
};

const stopColorChanger = function () {
    clearInterval(intervalId);
};

document.querySelector("#start").addEventListener("click", startColorChanger);

document.querySelector("#stop").addEventListener("click", stopColorChanger);