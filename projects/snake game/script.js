const board = document.querySelector('.board');
const blockheight = 30
const blockwidth = 30
const start = document.querySelector(".start-btn");
const restart = document.querySelector(".restart-btn");
const modal  = document.querySelector(".modal");
const restartModal = document.querySelector(".restart-modal");
 const rows = Math.floor(board.clientHeight/blockheight);
const cols = Math.floor(board.clientWidth/blockwidth);
const ourscore = document.querySelector("#ourscore");
const highscore = document.querySelector("#highscore");
const time = document.querySelector("#time");

let highScore = localStorage.getItem("highScore") || 0 ;
highscore.innerText=`${highScore}`;
let Score = 0;
let Time ='00-00';
let timeid = null;

let intervalId =null;
const blocks =[];
let direction = "right";

let snake =[{
    x:4,y:3
}];
let food ={x:Math.floor(Math.random() * rows),y:Math.floor(Math.random() * cols)};



for(row = 0;row<rows;row++){
    for(col =0;col<cols;col++){
    const block = document.createElement('div');
    block.classList.add("blocks");
    board.appendChild(block);
    // block.innerText=`${row},${col}`;
    blocks[`${row} - ${col}`] = block;
   
    }
}
start.addEventListener("click",()=>{
    timeid =setInterval(()=>{
        let [min,sec] = Time.split("-").map(Number);
        if(sec == 59){
            min++;
            sec=0;
        }else{
            sec++;
        }
        Time =`${min}-${sec}`;
        time.innerText=Time;

    },1000);
    intervalId=setInterval(()=>{

   
    render();
},300);
modal.style.display="none";

})
restart.addEventListener("click",restartgame);

function restartgame(){
    restartModal.style.display="none";
    Score = 0;
    Time ='00-00'
    highscore.innerText=`${highScore}`;
    ourscore.innerText=`${Score}`;
    time.innerText = Time;
    blocks[`${food.x} - ${food.y}`].classList.remove("food");
    snake.forEach(segment => {
    blocks[`${segment.x} - ${segment.y}`].classList.remove("fill");
});

    snake =[{x:1,y:3}];
    food ={x:Math.floor(Math.random() * rows),y:Math.floor(Math.random() * cols)};
    direction = "right";
     intervalId=setInterval(()=>{

    render();
},300);
};

function render(){
    
     let head = null;
     blocks[`${food.x} - ${food.y}`].classList.add("food");
    if(direction === "left" ){
        head = { x: snake[0].x , y: snake[0].y-1};
    }
    else if(direction === "right" ){
        head = { x: snake[0].x , y: snake[0].y+1};
    }
    else if(direction === "up"){
        head = { x: snake[0].x-1 , y: snake[0].y};
    }
    else if(direction === "down"){
        head = { x: snake[0].x +1 , y: snake[0].y};
    }

    if(head .x< 0 || head.x>= rows || head.y<0 || head.y >= cols){
        restartModal.style.display="flex";
        clearInterval(intervalId);
        return;
        
    }
    if(head.x == food.x && head.y == food.y){
        blocks[`${food.x} - ${food.y}`].classList.remove("food");
        snake.unshift(head);
        Score+=10;
        ourscore.innerText=`${Score}`;
        if(Score>highScore){
            highScore = Score;
            
            localStorage.setItem("highScore",highScore)
        }
        food ={x:Math.floor(Math.random() * rows),y:Math.floor(Math.random() * cols)};
        blocks[`${food.x} - ${food.y}`].classList.add("food");
    }

    // to remove the last element
     snake.forEach(segment=>{
         blocks[`${segment.x} - ${segment.y}`].classList.remove("fill");
    })
    snake.unshift(head);
    snake.pop();
    snake.forEach(segment =>{
        blocks[`${segment.x} - ${segment.y}`].classList.add("fill");
        
    })
}



addEventListener("keydown",(event)=>{
    
    if(event.key == "ArrowUp" || event.key == "w"){
        direction = "up";
    }
    else if(event.key == "ArrowDown" || event.key == "s"){
        direction = "down";
    }
    else if(event.key == "ArrowLeft" || event.key == "a"){
        direction = "left";
    }
    else if(event.key == "ArrowRight" || event.key == "d"){
        direction = "right";
    }

})