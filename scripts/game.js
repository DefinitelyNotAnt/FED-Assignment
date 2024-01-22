//////////////////////////////
//////////// Game ////////////
//////////////////////////////
// Function so it can be rerun multiple times
function virusGame(){
    const lastHighScore = parseFloat(localStorage.score);
    document.getElementById("highscore").innerText = "High score: "+localStorage.score;
    var scoreDisplay = document.getElementById("scoreDisplay");
    var score = 0;
    var totalBubbles = 0;
    // Get div app
    const root = document.querySelector("#app");
    // Getting window size
    let { innerHeight, innerWidth } = window;
    console.log(innerHeight, innerWidth);
    // Restrain window size of game
    if (innerHeight < 300) {
    innerHeight = 350;
    }
    if (innerWidth < 300) {
    innerWidth = 750;
    }

    class Bubble {
    constructor() {
        this.bubbleSpan = undefined;
        this.handleNewBubble();
        this.color = "red";

        // Generates bubble in random location
        this.posY = this.randomNumber(innerHeight - 20, 20);
        this.posX = this.randomNumber(innerWidth - 20, 20);

        this.bubbleSpan.style.top = this.posY + "px";
        this.bubbleSpan.style.left = this.posX + "px";

        // setting height and width of the bubble
        this.height = 100;
        this.width = this.height;

        this.bubbleEnd.call(this.bubbleSpan, this.randomNumber(7500, 10000));
    }

    // creates and appends a new bubble in the DOM
    handleNewBubble() {
        this.bubbleSpan = document.createElement("span");
        this.bubbleSpan.classList.add("bubble");
        root.append(this.bubbleSpan);
        this.handlePosition();
        totalBubbles += 1;
        // On click end bubble
        this.bubbleSpan.addEventListener("click", this.bubbleEnd);
        let fired = false;
        this.bubbleSpan.addEventListener("click", function(){
            score+=1;
            fired = true;

        }, );
    }

    handlePosition() {
        // positioning the bubble in different random X and Y
        const randomY = this.randomNumber(60, -60);
        const randomX = this.randomNumber(60, -60);

        this.bubbleSpan.style.backgroundColor = this.color;
        this.bubbleSpan.style.height = this.height + "px";
        this.bubbleSpan.style.width = this.height + "px";

        this.posY = this.randomNumber(innerHeight - 20, 20);
        this.posX = this.randomNumber(innerWidth - 20, 20);

        this.bubbleSpan.style.top = this.posY + "px";
        this.bubbleSpan.style.left = this.posX + "px";

        const randomSec = this.randomNumber(500, 100);
        setTimeout(this.handlePosition.bind(this), randomSec); // calling for re-position of bubble
    }

    randomNumber(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    bubbleEnd(removingTime = 0) {
        setTimeout(
        () => {
            requestAnimationFrame(() => this.classList.add("bubble--bust"));
        },
        removingTime
        );
        setTimeout(() => {
        requestAnimationFrame(() => this.remove());
        }, (removingTime+50));
        if (removingTime==0){
            score+=1;
        }
    }
    }
    new Bubble()
    new Bubble()
    new Bubble()
    new Bubble()
    // creating many bubble instance
    var speed = 500 - (root.childElementCount * 10);
    var loopThis = function () {
        requestAnimationFrame(() => new Bubble());
        scoreDisplay.innerText = "Score = "+score;
        document.getElementById("currentCount").innerText = "Number of bubbles: "+root.childElementCount;
        document.getElementById("totalBubbles").innerText = "Total bubbles so far: "+totalBubbles;
        speed = 500 - (root.childElementCount * 10);
        // When it reaches 50
        if (root.childElementCount >= 50){
            console.log("break");
            // Pauses for 0.5 seconds before clearing
            setTimeout(function(){
                console.log("Score: "+score);
                root.textContent = "";
            },500)
            if (score > lastHighScore){
                localStorage.setItem("score",score);
            }
            // 1s for full reset (0.5s after bubbles clear)
            setTimeout(function(){
                scoreDisplay.innerText = "Score = "+score;
                // Set score
                document.getElementById("currentCount").innerText = "Number of bubbles: "+root.childElementCount;
                document.getElementById("totalBubbles").innerText = "Total bubbles so far: "+totalBubbles;
                document.getElementById("highscore").innerText = "High score: "+localStorage.score;
            },1000)
        }
        else{
            // Continues the loop
            setTimeout(loopThis,speed);
        }
    }
    // Starts loop
    setTimeout(loopThis,speed);
}
virusGame();