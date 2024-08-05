/******  Edit and remove elements in DOM  ******/ 



/*------ create elements ------*/ 



function addLanguage(langName) {
    const li = document.createElement('li');

    // const addText = document.createTextNode(langName);
    // document.querySelector('.language').appendChild(li).appendChild(addText);
    
    li.innerHTML  = `${langName}`; // it triverse whole document
    document.querySelector('.language').appendChild(li);
    
}

addLanguage('Python');
addLanguage('TypeScript');




/*------ create elements ------*/ 




function addOptLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName)); // it not triverse the whole document
    document.querySelector('.language').appendChild(li);
}

addOptLanguage('Golang');



/*------ Edit elements ------*/ 




const secondLang = document.querySelector('li:nth-child(2)');
const newli = document.createElement('li');
newli.textContent = "Mojo";
// const addText = document.createTextNode('Mojo');
// secondLang.replaceWith(addText);
secondLang.replaceWith(newli);



/*------ Edit elements ------*/ 



const firstLang = document.querySelector('li:first-child');
firstLang.outerHTML = '<li>TypeScript</li>';


/*------ Remove elements ------*/


const lastLang = document.querySelector("li:last-child");
lastLang.remove();

