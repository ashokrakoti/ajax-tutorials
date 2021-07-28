console.log('this is the second ajax file');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
  console.log("clicked the fetch button");
   
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);

  xhr.onload = function(){
      if(this.status === 200){
          console.log(this.responseText);
      }
      else{
          console.log('some error occured');
      }
  }

  xhr.send();
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler(){
    console.log('clicked the populate button');
    
    //creating a xhr request
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);

    xhr.onload = function(){
        if(this.status === 200){
            const resObj = JSON.parse(this.responseText);
            console.log(resObj);
            let list = document.getElementById('list');
            str = ''
            for (const key in resObj) {
               str += `<li> ${resObj[key].title} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log('error occured');
        }
    }
    
    xhr.send();

}