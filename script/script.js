///guessing.html





let taskInput=document.querySelector(".exp_input")
let submit=document.querySelector("#guess_button");
let guess_No=document.querySelector("#Number_guess");
let tries_left=document.querySelector("#Number_tries");
let playerValue=document.querySelector("#player_value");
let score=document.querySelector("#score");
let setBtn=document.querySelector("#setter");
let tries_page=document.querySelector("#Tries_page");
let right_msg=document.querySelector("#guessed_right");
let wrong_msg=document.querySelector("#guessed_wrong");
submit.addEventListener("click", change);
let callback=1;
const given_num=localStorage.getItem("number");

let currentGuesser=localStorage.getItem("currentGuesser");
let currentSetter=localStorage.getItem("currentSetter");

playerValue.innerText=`${localStorage.getItem("currentGuesser")}`;

console.log(`currentrGuesser = ${currentGuesser}`);
console.log(`currentSetter = ${currentSetter}`);

console.log(given_num);
function change(){
    if(callback===6){
        let scoreKey= currentGuesser==="Player 1" ? "player2Score" : "player1Score";
        localStorage.setItem(scoreKey,parseInt(localStorage.getItem(scoreKey))+2);
        localStorage.setItem("currentSetter",currentGuesser);
        localStorage.setItem("currentGuesser",currentSetter);
        set();
        lose();
        setBtn.addEventListener("click",changeLocation);
    }
    

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
    number=Number(number);



    


    if(number>given_num){//high 
        score.innerText="High";
        score.setAttribute("class","high_color");
    }
    else if(number<given_num){// low
        score.innerText="Low";
        score.setAttribute("class","low_color");
    }
    else{// equal
        score.innerText="Equal";
        score.setAttribute("class","equal_color");
        let scoreKey= currentGuesser==="Player 1" ? "player1Score" : "player2Score";
        localStorage.setItem(scoreKey,parseInt(localStorage.getItem(scoreKey))+5);
        localStorage.setItem("currentSetter",currentGuesser);
        localStorage.setItem("currentGuesser",currentSetter);
        set();
        win();
        setBtn.addEventListener("click", changeLocation);
        
    }
    
    guess_No.innerText=`Number of Guess :-> ${callback}`;
    tries_left.innerText=`Number of Tries Left :-> ${5-callback}`;
    callback++;
    console.log(callback);
    

}
function set(){
    submit.style.display="none";
    tries_page.style.display="none";
    setBtn.style.display="block";
}
function changeLocation(){
    location.href="start.html";
}
function win(){
    right_msg.style.display="block";
}
function lose(){
    wrong_msg.style.display="block";
}





    

