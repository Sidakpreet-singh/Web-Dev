let i =1;
let j = 4;
setInterval(next,3000);
function next(){

    document.querySelector(`#image${i}`).style.display="none";
    if(i<j){
        document.querySelector(`#image${i+1}`).style.display="block";
        i++;
       
    }
    else{
        i=0;
        document.querySelector(`#image${i+1}`).style.display="block";
        i++;
    }

}
function prev(){

    document.querySelector(`#image${i}`).style.display="none";
    if(i>1){
        document.querySelector(`#image${i-1}`).style.display="block";
        i--;
    }
    else{
        i=4;
        document.querySelector(`#image${i}`).style.display="block";
       
    }

}
const left = document.querySelector("#left");
const right = document.querySelector("#right");

right.addEventListener('click',next);
left.addEventListener('click',prev);
