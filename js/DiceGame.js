
    let diceRoll1 = Math.floor(Math.random() * 6) + 1;
    let diceRoll2 = Math.floor(Math.random() * 6) + 1;
    let diceRoll3 = Math.floor(Math.random() * 6) + 1;
    let diceRoll4 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "images/dice" + diceRoll1 + ".png")
    document.querySelector(".img2").setAttribute("src", "images/dice" + diceRoll2 + ".png")
    document.getElementById("player1second").setAttribute("src", "images/dice" + diceRoll3 + ".png")
    document.getElementById("player2second").setAttribute("src", "images/dice" + diceRoll4 + ".png")

    if (diceRoll1 + diceRoll3 > diceRoll2 + diceRoll4) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!"
    } else if (diceRoll1 + diceRoll3 < diceRoll2 + diceRoll4) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!"
    } else {
        document.querySelector("h1").innerHTML = "Its A Draw!"
    }