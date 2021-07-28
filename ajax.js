console.log("this is ajax tutorials");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log('you have clicked the fetch button');

    //creating a xhr object in js. it is inbuilt in java script. no need of using any imports
    const xhr = new XMLHttpRequest();
    
    //opne the object to make a regquest
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    console.log('xhr request opened');

    //on progress actions
    xhr.onprogress = function(){
        console.log('in progress');
    }

    //ready state change
    // xhr.onreadystatechange = function(){
    //     console.log("ready state is" , this.readyState);
    // }

    //on load actions
    xhr.onload = function(){

        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.log('some error occured');
        }
        
    } 

    params = `{"name":"test1","salary":"1234","age":"26"}`;

    //send the request
    xhr.send(params);

    // console.log("done with the request");

    //xhr ready state codes 

//     value	         State                       	Description
//      0	             UNSENT	                    Client has been created.open() not called yet.
//      1	             OPENED	                    open() has been called.
//      2	        HEADERS_RECEIVED	 send() has been called, and headers and status are available.
//      3	             LOADING	         Downloading; responseText holds partial data.
//      4	              DONE	                   The operation is complete.
}