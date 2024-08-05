/******  How to create a new element in DOM  ******/ 


const parent = document.querySelector(".parent");


// console.log(parent);
// console.log(parent.children); // here we get HTMLCollection
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);  // it will print all values like  Monday ... Thursday
// }

/*** NOTE: we are moving from parent to child ***/

// parent.children[1].style.color = "orange";

// parent.firstElementChild.style.color = "red";
// parent.lastElementChild.style.color = "red";

/***  NOTE: we can move from child to parent ***/

const dayOne = document.querySelector('.day');

// dayOne.parentElement.style.backgroundColor = 'lightblue';
// dayOne.parentElement.style.color = 'black';

// dayOne.nextElementSibling.style.color = "Red";

// console.log("Nodes: ", parent.chilNodes); // it will show the nodes in the console


/***  NOTE:  Creating new element in DOM  ***/


// const h1 = document.createElement('h1');
const div = document.createElement('div');

// div.className = "main";
// div.id = Math.round(Math.random() * 10 +1);

// div.setAttribute('title', 'genrated title');

div.style.backgroundColor = 'green';
div.style.padding = " 15px";

// div.innerHTML = "Bytewise Task"; // it take time

const addText = document.createTextNode("Bytewise Task"); // best way adding text
div.appendChild(addText);

document.body.appendChild(div);




