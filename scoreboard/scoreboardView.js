export default class scoreboardView {
    constructor(root, playerOneName, playerTwoName, onControlButtonClick){
        this.root = root;
        this.root.innerHTML = `
            <div class = 'scoreboard'>
                <div class = 'scoreboardName--one'> ${playerOneName} </div>
                <div class = 'scoreboardName--two'> ${playerTwoName}</div> 
                <div class = 'scoreboardScore' data-for-player = "one"> 0 </div>
                <div class = 'scoreboardScore' data-for-player = "two"> 0 </div>
                <div class = 'scoreboardControls' data-for-player = "one"> 
                    <button class = 'scoreboardControlsButton'> - </button>
                    <button class = 'scoreboardControlsButton'> + </button>
                </div>
                <div class = 'scoreboardControls' data-for-player = "two"> 
                    <button class = 'scoreboardControlsButton'> - </button>
                    <button class = 'scoreboardControlsButton'> + </button>
                </div>
            </div>
        
    `;

    this.root.querySelectorAll(".scoreboardControlsButton").forEach(controlButton => {
        controlButton.addEventListener("click", () => {
            const direction = controlButton.textContent === "-" ? "minus" : "plus";
            const player = controlButton.closest(".scoreboardControls").dataset.forPlayer;

            onControlButtonClick(player, direction);
        });
    });
    }
    update(playerOneScore, playerTwoScore){
        this.root.querySelector(".scoreboardScore[data-for-player = 'one']").textContent = playerOneScore;
        this.root.querySelector(".scoreboardScore[data-for-player = 'one']").textContent = playerTwoScore;
    }
}