const api_key="2b9f1f21c53cee280d97ee1a4416512c";
const loader = document.querySelector('.loader');
const categorydiv = document.querySelector('#category');
 
const container = document.querySelector(".cards");
  async function getdata(usercategory){

const url = `https://gnews.io/api/v4/top-headlines?country=in&lang=en&category=${usercategory}&apikey=${api_key}`;
   container.textContent="";
   loader.classList.add("showloader");
   const response=await fetch(url);
    const data=await response.json();
  console.log(data.articles);

  data.articles.forEach(element => {
    const article = document.createElement("div");
    
    article.innerHTML=`
    <img src ="${element.image}"
    alt="${element.title || 'News'}" 
    class="pic"/>
    <div class="content">
    <h4 class="tittle"> ${element.title} </h4>
     <a href="${element.url}" target="_blank">
  <button class="readmore">Read More</button>
</a>

    </div>
    `
     loader.classList.remove('showloader');
    container.appendChild(article);
    article.classList.add('card');
    
  });

  }





 
  categorydiv.addEventListener("click",(e)=>{



  if(e.target.tagName==='BUTTON'){
    const allbtn = categorydiv.querySelectorAll("button");
    allbtn.forEach(e=>{
       e.classList.remove('catactive');

    })
    


     
      let cat=e.target.textContent.toLowerCase();
      e.target.classList.add('catactive')
      getdata(cat);
  }
  });

  getdata(general);