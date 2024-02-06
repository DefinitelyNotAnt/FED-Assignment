//////////////////////////////
//////////// Game ////////////
//////////////////////////////
// Function so it can be rerun multiple times

//grab data
const APIKEY = '65c1d2fd72864d6ddfdcbf05';
const link = "https://pandemic-b7ef.restdb.io/rest/pandemic";
const trueStatements = [];
const falseStatements = [];

// Using jQuery AJAX
var ajaxSettings = {
  "async": true,
  "crossDomain": true,
  "url": link,
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": APIKEY,
    "cache-control": "no-cache"
  }
};

// Using Fetch API
const Apimethod = document.getElementById("api");
function getStatements() {
  let fetchSettings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": APIKEY,
      "Cache-Control": "no-cache"
    },
  };

  fetch(link, fetchSettings)
    .then(response => response.json())
    .then(data => {
      data.forEach(user => {
        if (user.Boolean) {
          trueStatements.push(user.Statement);
        } else {
          falseStatements.push(user.Statement);
        }
      });
      
    })
    .catch(error => console.log(error));
}

// Call the function to fetch data using the Fetch API
getStatements();

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
        this.color = this.randomGen();

        // Generates bubble in random location
        this.posY = this.randomNumber(innerHeight - 20, 20);
        this.posX = this.randomNumber(innerWidth - 20, 20);

        this.bubbleSpan.style.top = this.posY + "px";
        this.bubbleSpan.style.left = this.posX + "px";

        // setting height and width of the bubble
        this.height = 200;
        this.width = this.height;

        this.bubbleEnd.call(this.bubbleSpan, this.randomNumber(7500, 10000));
    }

    // creates and appends a new bubble in the DOM
    handleNewBubble() {
        this.bubbleSpan = document.createElement("span");
        this.bubbleSpan.classList.add("bubble");
        // Generate a random number (0 or 1) to pick a list
        const randomIndex = Math.floor(Math.random() * 2);
        // Pick the list based on the random number
        const selectedList = randomIndex === 0 ? trueStatements : falseStatements;
        const index = Math.floor(Math.random() * selectedList.length);
        const randomtext=selectedList[index];
        console.log(randomtext);
        this.bubbleSpan.innerText = randomtext;
        root.append(this.bubbleSpan);
        this.handlePosition();
        totalBubbles += 1;        

        // On click end bubble
        this.bubbleSpan.addEventListener("click", this.bubbleEnd);
        this.bubbleSpan.addEventListener("click", function(){
            if (randomtext in trueStatements){score+=1;}                
            else if(randomtext in falseStatements){score-=1;}                
        });
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

        const randomSec = this.randomNumber(750, 500);
        setTimeout(this.handlePosition.bind(this), randomSec); // calling for re-position of bubble
    }

    randomNumber(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    randomGen(){
        var color = [
            "red",
            "green"
        ]
        return color[Math.floor(Math.random()*2)];
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
        if (removingTime==0 && this.color == "green"){
            score+=1;
        }
        else if (removingTime == 0 && this.color == "red"){
            score -= 1;
        }
    }
    }
    new Bubble()
    // creating many bubble instance
    var speed = 3000 - (root.childElementCount * 5);
    var loopThis = function () {
        requestAnimationFrame(() => new Bubble());
        scoreDisplay.innerText = "Score = "+score;
        document.getElementById("currentCount").innerText = "Number of bubbles: "+root.childElementCount;
        document.getElementById("totalBubbles").innerText = "Total bubbles so far: "+totalBubbles;
        speed = 2000 - (root.childElementCount * 5);
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

