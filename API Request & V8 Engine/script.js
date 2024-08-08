    
    // 0 UNSENT Client has been created. open() not called yet.

    // 1 OPENED open() has been called.

    // 2 HEADERS_RECEIVED send() has been called, and headers and status are available.

    // 3 LOADING Downloading; responseText holds partial data.

    // 4 DONE The operation is complete.

    const xhr = new XMLHttpRequest();
    const responseUrl = "https://api.github.com/users/Ayyaz-Qadir";

    xhr.open('GET', responseUrl);
    // console.log('here');
    // console.log(xhr.readyState);

    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4) {
          console.log(this.responseText); // it will show the full detail of Ayyaz  github on console
          const data = JSON.parse(this.responseText); // it will convert the api json object & store it into the data variable
          console.log(data.name); // it will show the Ayyaz github name on console
          console.log(data.html_url); // it will show the url of ayyaz github on console
          console.log(data.avatar_url); // it will show the profile of ayyaz github on console
        }   
    }
        
    xhr.send();