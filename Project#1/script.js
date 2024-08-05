

const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function(event){
    event.addEventListener("click", (e)=>{
        switch (e.target.id) {
          case "gray":
            body.style.backgroundColor = e.target.id;
            break;
          case "lightgreen":
            body.style.backgroundColor = e.target.id;
            break;
          case "skyblue":
            body.style.backgroundColor = e.target.id;
            break;
          case "chocolate":
            body.style.backgroundColor = e.target.id;
            break;
        }
    });
});

