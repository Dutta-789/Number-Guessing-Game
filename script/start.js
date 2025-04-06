if (!localStorage.getItem("player1Score")) {
    localStorage.setItem("player1Score", 0);
}
if (!localStorage.getItem("player2Score")) {
    localStorage.setItem("player2Score", 0);
}
if (!localStorage.getItem("currentSetter")) {
    localStorage.setItem("currentSetter", "Player 1"); // First setter
    localStorage.setItem("currentGuesser", "Player 2"); // First guesser
}
if (!localStorage.getItem("round")) {
    localStorage.setItem("round", 1); // Start with round 1
}


let submit=document.querySelector("#guess_button");
let taskInput=document.querySelector(".exp_input");
let playervalue=document.querySelector(".player");
let currentRound=0;
submit.addEventListener("click",change);
playervalue.innerText=`${localStorage.getItem("currentSetter")} Please Give Your Number`;
console.log(localStorage.getItem("round"));
if(localStorage.getItem("round")==5){
    location.href="display.html";
}

console.log(`Player 1 score ${localStorage.getItem("player1Score")}`);
console.log(`Player 2 score ${localStorage.getItem("player2Score")}`);



function change(){
    let number=taskInput.value;
    if(number===""){
        alert("Please Enter a Number");
        return;
    }
    for(let ch of number){
        if((ch >= "a" && ch<="z")||(ch>="A" && ch<="Z")){
            alert("Please Enter a Number only!!");
            taskInput.value="";
            return;
        }
    }

    let round=parseInt(localStorage.getItem("round"));
   
    round=parseInt(localStorage.getItem("round"))+1;
    localStorage.setItem("round",round);
    
    
    
    localStorage.setItem("number",number);
    location.href="guessing.html";

}


