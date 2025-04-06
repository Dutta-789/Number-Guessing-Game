window.onload = function () {
    if(!localStorage.getItem("currentSetter")){
        localStorage.setItem("currentSetter", "Player 1");
    }
    if(!localStorage.getItem("currentGuesser")){
        localStorage.setItem("currentGuesser", "Player 2");
    }
    
    if (!localStorage.getItem("round")) {
        localStorage.setItem("round", 1);
    }
    
};

const navigationType = performance.getEntriesByType("navigation")[0].type;

if (navigationType === "reload") {
localStorage.clear();
}

sessionStorage.removeItem("refreshed");