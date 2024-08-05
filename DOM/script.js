/******  All DOM selectors NodeList and HTMLCollection  ******/

// document.getElementById(title);
// document.getElementById(title).id;
// document.getElementById(title).className;
// document.getElementById(title).getAttribute('id');
// document.getElementById(title).getAttribute('class');

// document.getElementById(title).setAttribute('class', 'test'); // it will remove the other class or class so we set it again
// document.getElementById(title).setAttribute('class', 'test heading');  // it will store the both classes

const title = document.querySelector("#title");
title.style.backgroundColor = 'green';
title.style.padding = '15px';
title.style.borderRadius = "15px";


// they will display content or text of element
title.innerText; // it will not show the hidden text
title.textContent; // it will also show the hidden text
title.innerHTML; // it wil show the tag also in output


document.getElementsByClassName('heading');

// mostly used 
const heading2 = document.querySelector('h2') // querySelector will select fisrt tag h2 & not will select all h2's 
heading2.textContent = "This element is selected";

document.querySelector('#title'); // id selected
document.querySelector('.heading'); // class selected

// document.querySelector('input[type= ]"password"');

// document.querySelector('p:first-child');
// document.querySelector('p:last-child');

const myul = document.querySelector('ul');
const turnGreen = myul.querySelector("li"); // first item selected

turnGreen.style.backgroundColor = "Green";
turnGreen.style.padding = '10px';

turnGreen.innerHTML  = "Five";

const tempLiList = document.querySelectorAll('li');

// tempLiList.style.color = "Green" // it will give an error because its a node list

// const myH1 = document.querySelectorAll('h1') // it is also giving nodeList

tempLiList.forEach(function (l) {
    l.style.backgroundColor = 'green'
    l.style.margin = "10px"
});

//NOTE: if we have nodeList use foreEach. nodeList is not a array.

const tempClassList = document.getElementsByClassName('list-item');  // it will give html collection

// NOTE: if we want to use map on HTMLcollection or nodeList the we convert it into the array first then use it 

const myCovertedArray = Array.from(tempClassList); // it converted in Array.

myCovertedArray.forEach(function(li){
    li.style.color = "orange";
})
