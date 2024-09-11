let myScore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector( "#msg" );

const userScore= document.getElementById("user-score") ;
const compScore = document.getElementById("comp-score");

const gencompchoice = ()=>{
    let maker=["rock","paper","scissors"];
    const part=Math.floor(Math.random()*3);
    return maker[part];
}
const showWin=(userWin)=>{
    if(userWin){
        myScore++;
        msg.innerText="You Win!";
        userScore.innerText=myScore;
    }
    else{
        compscore++;
        msg.innerText="Computer Wins!";
        compScore.innerText=compscore;
    }
}
const draw=()=>{
    msg.innerText="It's a Draw!";
}
const playgame=(mychoice)=>{
    let compchoice=gencompchoice();
    if(mychoice===compchoice){
        draw();
    }
    else{
        let userWin=true;
        if(mychoice==="rock"){
            (compchoice==="scissors")?userWin=true:userWin=false;
        }
        else if(mychoice==="paper"){
            (compchoice==="rock")?userWin=true:userWin=false; 
        }
        else{
            (compchoice==="paper")?userWin=true:userWin=false;  
        }
        showWin(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const mychoice = choice.getAttribute("id");
        playgame(mychoice);
    });
});