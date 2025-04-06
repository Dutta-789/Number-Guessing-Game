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

let startbtn=document.querySelector("#start");
startbtn.addEventListener("click",changeLocation);
function changeLocation(){
    location.href="html/start.html";
}