let startQuizBt = document.querySelector("#start-quiz");
let instructSec = document.querySelector(".inst-section");
let timeDisplay = document.querySelector('span');
let scoreDisplay = document.querySelector(".score-board");
let highDisplay = document.getElementById("scores");
let highDisplay1 = document.getElementById("scores2");
let highScore = document.getElementById("high-score");
let highScore1 = document.getElementById("high-score1");
let searchBar = document.querySelector("#search-bar");
var submitButton = document.querySelector("#submit-button");

let questionOne = document.querySelector(".quest1");
let questionTwo = document.querySelector(".quest2");
let questionThree = document.querySelector(".quest3");
let questionFour = document.querySelector(".quest4");
let questionFive = document.querySelector(".quest5");

let timeSeconds = 90;
let currentScore = 0;
let currentScore1 = ["0", "1", "2", "3", "4", "5"];
let savedScores = JSON.parse(localStorage.getItem("data")) || [];

let correctSound = new Audio("./assets/sounds/correct-ans1.mp3");
let incorrectSound = new Audio("./assets/sounds/incorrect-sound1.mp3");
let startSound = new Audio("./assets/sounds/incorrect-sound.mp3");
let scoreSound = new Audio("./assets/sounds/correct-sound1.mp3");
let fightSound = new Audio("./assets/sounds/fight-music.mp3");
let endSound = new Audio("./assets/sounds/ending-sound.mp3");
let pokeSound = new Audio("./assets/sounds/whos-that-pokemon.mp3");

// Reset Quiz Button
highScore.addEventListener ("click", ()=> {
    let imageUrl = "./assets/images/wrong.webp";
    pokeSound.play();
    pokeSound.volume = 0.2;
    fightSound.pause();
    swal({
        title: "Gathering All Pokemons.....", icon: imageUrl, text: ' ', button: false, closeOnClickOutside: false, timer: 3800
    }).then((restart) => {
        window.location.reload();
    })
})

// Play Again Button appears on score page
highScore1.addEventListener ("click", ()=> {
    let imageUrl = "./assets/images/wrong.webp";
    pokeSound.play();
    pokeSound.volume = 0.2;
    swal({
        title: "Getting All Pokemons Ready....", icon: imageUrl, text: ' ', button: false, closeOnClickOutside: false, timer: 3800
    }).then((restart) => {
        window.location.reload();
    })
})

startQuizBt.addEventListener ("click", () => {
    swal ({
        title: "Warning: High Volume",
        icon: "warning",
        buttons: "Proceed",
        text: "Sound Effects Can Be Too Loud For Some People. Please Lower Volume Down Before Proceeding Just To Be Safe. Enjoy the Quiz!",
        closeOnClickOutside: false,
    }).then ((volume) => {
        fightSound.play();
        fightSound.volume = 0.2;
        questionOne.style.visibility = "visible";
        instructSec.style.visibility = "hidden";
        var countDown = setInterval(() => {
            timeSeconds--;
            timeDisplay.innerHTML = `${timeSeconds}`;

            // if statement when timer reaches down to zero then will be taken to score page after recording current score
            if(timeSeconds <= 0) {
                clearInterval(countDown);
                fightSound.pause();
                startSound.play();
                swal({
                    title: 'Times Up!', icon: 'error', text: ' ', buttons: false, closeOnClickOutside: false, timer: 2000
                }).then((tryAgain) =>{
                    fightSound.pause();
                    endSound.play();
                    endSound.volume = 0.3;
                    swal({
                        title: "Your Current Score:" + " " + currentScore, icon: 'success', closeOnClickOutside: false, text: 'Please Enter Your Name' ,content: 'input', buttons: 'Submit'
                    }).then((timesUp1) => {
                        scoreSound.play();
                        clearInterval(countDown);
                        highDisplay.innerHTML = timesUp + ":" + " " + currentScore + "/" + "5";
                        questionOne.style.visibility = "hidden";
                        questionTwo.style.visibility = "hidden";
                        questionThree.style.visibility = "hidden";
                        questionFour.style.visibility = "hidden";
                        questionFive.style.visibility = "hidden";
                        highScore.style.display = "none";
                        highScore1.style.visibility = "visible";
                        scoreDisplay.style.visibility = "visible";
                        
                    })
                })
            }
        }, 1000);
 
// Question 1
questionOne.addEventListener ('click', function(event) {
    let choice = event.target;
    let correct = choice.dataset.correct;

    if(choice.matches("button")) {
        if(correct === "correct"){
            correctSound.play();
            correctSound.volume = 0.4;
            currentScore++;
            let imageUrl = "./assets/images/giphy.webp"
            swal ({
                title: 'Correct: Its Pikachu', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
            }).then((correct) => {
                questionOne.style.visibility = "hidden";
                questionTwo.style.visibility = "visible";
            })
        } else {
            incorrectSound.play();
            incorrectSound.volume = 0.4;
            let imageUrl = "./assets/images/wrong1.webp"
            swal ({
                title: 'Incorrect: Its Pikachu', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
            }).then((incorrect) => {
                questionOne.style.visibility = "hidden";
                questionTwo.style.visibility = "visible";
            })
            timeSeconds -= 9;
        }
    }
})

// Question 2
questionTwo.addEventListener ('click', function(event) {
    let choice = event.target;
    let correct = choice.dataset.correct;

    if(choice.matches("button")) {
        if(correct === "correct") {
            correctSound.play();
            correctSound.volume = 0.4;
            currentScore++;
            let imageUrl = "./assets/images/giphy.webp"
            swal ({
                title: 'Correct: Its Mewtwo', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
            }).then((correct) => {
                questionTwo.style.visibility = "hidden";
                questionThree.style.visibility = "visible";
            })
        } else {
            incorrectSound.play();
            incorrectSound.volume = 0.4;
            let imageUrl = "./assets/images/wrong1.webp"
            swal ({
                title: 'Incorrect: Its Mewtwo', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
            }).then((incorrect) => {
                questionTwo.style.visibility = "hidden";
                questionThree.style.visibility = "visible";
            })
            timeSeconds -= 9;
        }
}
})

// Question 3 
questionThree.addEventListener ("click", function(event) {
    let choice = event.target;
    let correct = choice.dataset.correct;

    if(choice.matches("button")){
        if(correct === "correct") { 
            correctSound.play();
            correctSound.volume = 0.4;
            currentScore++;
            let imageUrl = "./assets/images/giphy.webp"
            swal ({
                title: 'Correct: Its Slowpoke', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
            }).then((correct) => {
                questionThree.style.visibility = "hidden";
                questionFour.style.visibility = "visible";
            })
            } else {
                incorrectSound.play();
                incorrectSound.volume = 0.4;
                let imageUrl = "./assets/images/wrong1.webp"
                swal ({
                    title: 'Incorrect: Its Slowpoke', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
                }).then((incorrect) => {
                    questionThree.style.visibility = "hidden";
                    questionFour.style.visibility = "visible";
                })
                timeSeconds -= 9;
        }
    }
})

// Question 4
questionFour.addEventListener ("click", function(event) {
    let choice = event.target;
    let correct = choice.dataset.correct;

    if(choice.matches("button")) {
        if(correct === "correct"){
            correctSound.play();
            correctSound.volume = 0.4;
            currentScore++;
            let imageUrl = "./assets/images/giphy.webp"
            swal ({
                title: 'Correct: Its Eevee', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
            }).then((correct) => {
                questionFour.style.visibility = "hidden";
                questionFive.style.visibility = "visible";
            })
        } else {
            incorrectSound.play();
            incorrectSound.volume = 0.4;
            let imageUrl = "./assets/images/wrong1.webp"
            swal ({
                title: 'Incorrect: Its Eevee', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
            }).then((incorrect) => {
                questionFour.style.visibility = "hidden";
                questionFive.style.visibility = "visible";
            })
            timeSeconds -= 9;
        }
    }
})

// Question 5
questionFive.addEventListener ("click", function(event) {
    let choice = event.target;
    let correct = choice.dataset.correct;

    if (choice.matches("button")) {
    if(correct === "correct"){
        correctSound.play();
        correctSound.volume = 0.4;
        currentScore++;
        clearInterval(countDown);
        let imageUrl = "./assets/images/giphy.webp"
        swal ({
            title: 'Correct: Its Gengar', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
        }).then((correct) => {
            fightSound.pause();
            endSound.play();
            endSound.volume = 0.3;
            swal({
                title: "Your Current Score:" + " " + currentScore + "/" + "5", icon: 'success', text: 'Please Enter Your Name' ,content: 'input',  buttons: 'Submit'
            }).then((timesUp) =>{
                scoreSound.play();
                highDisplay.innerHTML = timesUp + ":" + " " + currentScore + "/" + "5";
                questionFive.style.visibility = "hidden";
                scoreDisplay.style.visibility = "visible";
                highScore.style.display = "none";
                highScore1.style.visibility = "visible";
            })
            
        })
        } else {
            incorrectSound.play();
            incorrectSound.volume = 0.4;
            clearInterval(countDown);
            let imageUrl = "./assets/images/wrong1.webp";
            swal ({
                title: 'Incorrect: Its Gengar', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
            }).then((incorrect) => {
                fightSound.pause();
                endSound.play();
                endSound.volume = 0.3;
                swal({
                    title: "Your Current Score:" + " " + currentScore, icon: 'success', text: 'Please Enter Your Name' ,content: 'input', buttons: 'Submit'
                }).then((timesUp2) => {
                    scoreSound.play();
                    var li = document.createElement("p")
                    for( let i = 0; i < timesUp2.length; i++) {
                    if(savedScores.indexOf(timesUp2) == -1) {
                        savedScores.push(timesUp2);
                        li.textContent = savedScores;
                        localStorage.setItem("data", JSON.stringify(savedScores));
                    }
                }
                    questionFive.style.visibility = "hidden";
                    scoreDisplay.style.visibility = "visible";
                    highScore.style.display = "none";
                    highScore1.style.visibility = "visible";
                    for (let i=0; i < savedScores.length; i++) {
                        let storeMe = document.createElement("p");
                        storeMe.textContent = savedScores[i] + ":" + " " + currentScore +  + "/" + "5";
                        highDisplay.appendChild(storeMe);
                    }
                })
            })
        }
    }
})
}) 
})