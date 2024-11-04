const navEntries = performance.getEntriesByType("navigation");
const navType = navEntries.length > 0 ? navEntries[0].type : "";

function diceRoll(player, score) {
    document.querySelector(player).setAttribute("src", "./images/dice" + score + ".png");
}

function rollDice() {
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);

    diceRoll(".img1", dice1);
    diceRoll(".img2", dice2);

    var result = "";
    if (dice1 > dice2) {
        result = "Player 1 Wins! 🚩";
    } else if (dice2 > dice1) {
        result = "Player 2 Wins! 🚩";
    } else {
        result = "Draw!";
    }

    document.querySelector("h1").innerHTML = result;
}

function resetGame() {
    document.querySelector("h1").innerHTML = "Refresh Me";
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}

if (navType === "reload") {
    rollDice();
}

document.getElementById("rollButton").addEventListener("click", rollDice);
document.getElementById("resetButton").addEventListener("click", resetGame);