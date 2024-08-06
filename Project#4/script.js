const previous_guesses = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".lastResult");
const guess = document.querySelector("#guess");
const form = document.querySelector(".form");
let count = 10;

const random = Math.round(Math.random() * 100 + 1);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = parseInt(document.querySelector("#guessField").value);
  if (count >= 0) {

    if (inputValue < random && inputValue <= 100) {

      guess.innerHTML = `Sorry! Smaller Number`;
      previous_guesses.innerHTML = inputValue;

    } else if (inputValue > random && inputValue <= 100) {

      guess.innerHTML = `Sorry! Larger Number`;
      previous_guesses.innerHTML = inputValue;

    } else if (inputValue === random) {

      guess.innerHTML = "Congratulation! You Gussed the Number";
      previous_guesses.innerHTML = inputValue;
      
    } else {
      guess.innerHTML = "Ops! You Enter Invalid Number";
      previous_guesses.innerHTML = inputValue;
    }
    guessRemaining.innerHTML = count--;
  }

  if (count === 0) {
    guess.innerHTML = "GAME OVER";
  }

});
