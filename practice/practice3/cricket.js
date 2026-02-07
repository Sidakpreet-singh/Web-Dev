


let compchoice ;
let userchoice;
let result;

let score;
let scorestr = localStorage.getItem('score');

    score = JSON.parse(scorestr) || {
    win : 0,
    lost  :0,
    tie : 0,
};


score.displayresult = function() {
    document.querySelector('#user-input').innerText = `you have choosen ${userchoice}`;
    document.querySelector('#bot-input').innerText = `opponent has choosen ${compchoice}`;
    document.querySelector('#judge').innerText = `${result}`;
    document.querySelector('#scoreboard').innerText = `   -----scoreboard-----
        
        win  -> ${score.win}
        Lost -> ${score.lost}
        Tie  -> ${score.tie}`;
    // Optionally, you can use alert instead of updating the DOM
    // alert(`${result}
    // -----scoreboard-----
    // win  -> ${score.win}
    // Lost -> ${score.lost}
    // Tie  -> ${score.tie}`);
}


function computerChoice(){
let comp = Math.random() * 3;

if(comp >0 && comp <= 1){
    compchoice = 'bat';
    console.log('opponent choose Bat');
   
}
else if(comp>1 && comp <=2){
    compchoice = 'bowl';
    console.log('opponent choose Bowl');
   
}
else if(comp >2 && comp <= 3){
    compchoice ='stump';
    console.log('opponent choose Stump');
  
}
}

function res(userchoice){
    if(compchoice == userchoice){
        console.log('match draw!');
        result ='match draw!';
        score.tie++;
        console.log(score);
    }
    
    else if(compchoice == 'stump' && userchoice == 'bat'){
        console.log('ahh! Opponent Won ');
        result ='ahh! Opponent Won ';
        score.lost++;
        console.log(score);

    }
  
    else if(compchoice == 'bowl' && userchoice == 'bat'){
        console.log('Hurrah ! You Won');
        result = 'Hurrah ! You Won';
        score.win++;
        console.log(score);
    } 

    
    
    else if(compchoice == 'bat' && userchoice =='bowl'){
        console.log('ahh! Opponent Won ');
        result ='ahh! Opponent Won ';
        score.lost++;
        console.log(score);

    }
  
    else if(compchoice == 'stump' && userchoice =='bowl'){
        console.log('Hurrah ! You Won');
        result = 'Hurrah ! You Won';
        score.win++;
        console.log(score);
    }
   
    else if(compchoice == 'bowl' && userchoice == 'stump' ){
        console.log('ahh! Opponent Won ');
        result ='ahh! Opponent Won ';
        score.lost++;
        console.log(score);

    }
  
    else if(compchoice == 'bat' && userchoice == 'stump'){
        console.log('Hurrah ! You Won');
        result = 'Hurrah ! You Won';
        score.win++;
        console.log(score);
    } 

    localStorage.setItem('score',JSON.stringify(score));

}





