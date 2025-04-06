let winner=document.querySelector("#winner");
let player1=document.querySelector("#player1_score");
let player2=document.querySelector("#player2_score");

let win_player;
let player1_score=parseInt(localStorage.getItem("player1Score"));
let player2_score=parseInt(localStorage.getItem("player2Score"));

if(player1_score > player2_score){
    winner.innerText=`Player 1 Wins !!`;
}
else if(player1_score < player2_score){
    winner.innerText=`Player 2 Wins !!`;
}
else{
    winner.innerText=`Draw !!!`;
}

player1.innerText=`Score : ${player1_score}`;
player2.innerText=`Score : ${player2_score}`;

let restart=document.querySelector("#restart_button");
restart.addEventListener("click",reset);
function reset(){
    localStorage.clear();
    location.href="../index.html";
}
