import scoreboardView from "./scoreboard/scoreboardView.js";

let playerOneScore = 0;
let playerTwoScore = 0;

const root = document.querySelector(this.#app);
const view = new scoreboardView(root, "Player One", "Player Two", (player, direction)=> {
    //update the score
    const difference = direction === "minus" ? -1 : 1;
    
    if (player === "one"){
        playerOneScore = Math.max(playerOneScore + difference, 0);
    }
    else{
        playerTwoScore = Math.max(playerTwoScore + difference, 0);
    }

    view.update(playerOnesScore, playerTwoScore);
});