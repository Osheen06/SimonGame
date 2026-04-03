let gameSequence = [];
let userSequence = [];

let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Press key to start the game
document.addEventListener("keypress", function() {
    if(!started) {
        console.log("Game Started...");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250); 
}

function levelUp() {
    userSequence = []; // Reset user sequence for the new level
    level++;
    h2.innerText = `Level ${level}`;

    // 1. Choose a random index from 0 to 3
    let randomIdx = Math.floor(Math.random() * 4); 
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    // 2. Add the color to the game sequence
    gameSequence.push(randomColor);
    console.log(gameSequence);

    // 3. Flash the button
    btnFlash(randomBtn);


}

function checkAns(idx) {
    if(userSequence[idx] === gameSequence[idx]) {
        console.log("Correct!");

        if(userSequence.length === gameSequence.length) {
            setTimeout(levelUp, 1000);
        }
    }else {
        console.log("Wrong!");
        h2.innerHTML = `Game Over, Your score was <b>${level}</b> <br> Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        gameSequence = [];
        userSequence = [];
        started = false;
        level = 0;
    }
}
// Add click event listeners to buttons
function btnPressed() {
    let btn = this;
    btnFlash(btn);

    userColour = btn.getAttribute("id");
    userSequence.push(userColour);

    checkAns(userSequence.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPressed);
}