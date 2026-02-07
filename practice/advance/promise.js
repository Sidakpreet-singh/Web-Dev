console.log('hello');

const p =fetch("https://api.github.com/users");

const p1 =p.then((response)=>{
    if(!response.ok){
        throw new Error("not found");
    }
    return response.json();
});

p1.then((data)=>{
    const div =document.querySelector('.div');
    for(let i=0;i<data.length;i++){

    
    const image =document.createElement('img');
    image.src=data[i].avatar_url;
    
    image.style.height="80px";
    image.style.width="80px";

    div.append(image);
    }
});
p1.catch((error)=>{
    const div =document.querySelector('.div');
    div.textContent=error.message;


})
console.log("end");
