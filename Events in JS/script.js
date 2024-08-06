/**---- this is also nota good approch because it give limited funcationality ----**/ 
// document.querySelector('#track').onclick = ()=>{
//     alert("Tarck Image clicked");
// }

// attachEvent() it was used in past
// we use addEventListener in JQuery - on 

/**---- This is good ----**/

// document.getElementById('track').addEventListener("click", ()=>{
//     alert("Tarck Image clicked Again");
// }, false); // what is event propogation, this false or true is event propogation and false is default


/**---- Read Elements ----**/


// type, timestamp, defaultPrevented, preventDefault,
// target, toElement, srcElement, current Target,
// clientX, clientY, screenX, screenY,
// altkey, ctrlkey, shiftkey, keyCode


 /*****---- what is event propogation and example ----*****/


//  document.getElementById("images").addEventListener("click", (e)=>{
//     console.log('clicked inside the ul');
    
// }, true);

// document.getElementById("track").addEventListener("click", (e)=>{
//     console.log('Track image clicked');
    
// }, true);

/* if we write false it will show output from first it will print inner
 * elements in output than will show outer elements  it is called
 * bubbling prapogation or (buttom to top) */

/* if we write true it will show output from first it will print outer
 * elements in output than will show inner elements  it is called
 * capturing prapogation (top to bottom) */


//  document.getElementById("images").addEventListener("click",(e) => {

//      console.log("clicked inside the ul");

// }, false);

//  document.getElementById("track").addEventListener("click",(e) => {

//      console.log("Track image clicked");
//     //  e.stopPropagation(); // it will stopped the propagation

// }, false);



/*****---- defaultPrvent() method ----*****/


// document.getElementById('google').addEventListener('click', (e)=>{
//     console.log('google clicked');
//     e.preventDefault();
//     e.stopPropagation();
// }, false);

document.querySelector("#images").addEventListener('click',(e)=>{
  // console.log(e.target); // which image is targeted or clicked
//   console.log(e.target.parentNode); // it will target or show the parent node
  let removeIt = e.target.parentNode;
  // two way to remove image with clicked
  // removeIt.remove(); // first method  // best method
  //  removeIt.parentNode.removeChild(removeIt); // second method

   /** issue : if we clicked on li the whole list is hidden because we
    *  select first parent then remove method in above lines 
    * therefore we set condition on it **/

   // tagName show the name of targeted tag
   console.log(e.target.tagName);   
   if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        
        console.log(e.target.parentNode);
        let removeIt = e.target.parentNode;
        removeIt.remove();
   }



}, false);

