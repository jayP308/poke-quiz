let startQuizBt = document.querySelector("#start-quiz");
let instructSec = document.querySelector(".inst-section");
let timeDisplay = document.querySelector('span');
let scoreDisplay = document.querySelector(".score-board");
let highDisplay = document.getElementById("scores")
let highScore = document.getElementById("high-score");
let highScore1 = document.getElementById("high-score1");
let searchBar = document.querySelector("#search-bar");
var submitButton = document.querySelector("#submit-button");

let questionOne = document.querySelector(".quest1");
let questionTwo = document.querySelector(".quest2");
let questionThree = document.querySelector(".quest3");
let questionFour = document.querySelector(".quest4");
let questionFive = document.querySelector(".quest5");

let correctAns1 = document.querySelector("#correct-answer1");
let correctAns2 = document.querySelector("#correct-answer2");
let correctAns3 = document.querySelector("#correct-answer3");
let correctAns4 = document.querySelector("#correct-answer4");
let correctAns5 = document.querySelector("#correct-answer5");

let incorrectAns1 = document.getElementById("incorrect-answer1");
let incorrectAns2 = document.getElementById("incorrect-answer2");
let incorrectAns3 = document.getElementById("incorrect-answer3");

let incorrectAns4 = document.getElementById("incorrect-answer4");
let incorrectAns5 = document.getElementById("incorrect-answer5");
let incorrectAns6 = document.getElementById("incorrect-answer6");

let incorrectAns7 = document.getElementById("incorrect-answer7");
let incorrectAns8 = document.getElementById("incorrect-answer8");
let incorrectAns9 = document.getElementById("incorrect-answer9");

let incorrectAns10 = document.getElementById("incorrect-answer10");
let incorrectAns11 = document.getElementById("incorrect-answer11");
let incorrectAns12 = document.getElementById("incorrect-answer12");

let incorrectAns13 = document.getElementById("incorrect-answer13");
let incorrectAns14 = document.getElementById("incorrect-answer14");
let incorrectAns15 = document.getElementById("incorrect-answer15");

let timeSeconds = 90;
let currentScore = 0;
let savedScores = JSON.parse(localStorage.getItem("data")) || [];

let correctSound = new Audio("./assets/sounds/correct-ans1.mp3");
let incorrectSound = new Audio("./assets/sounds/incorrect-sound1.mp3");
let startSound = new Audio("./assets/sounds/incorrect-sound.mp3");
let scoreSound = new Audio("./assets/sounds/correct-sound1.mp3");


startQuizBt.addEventListener ("click", () => {
    questionOne.style.visibility = "visible";
    instructSec.style.visibility = "hidden";

    var countDown = setInterval(() => {
        timeSeconds--;
        timeDisplay.innerHTML = `${timeSeconds}`;

        if(timeSeconds <= 0) {
            clearInterval(countDown);
            startSound.play();
            swal({
                title: 'Times Up!', icon: 'error', text: ' ', buttons: false, timer: 2000
            }).then((tryAgain) =>{
                scoreSound.play();
                swal({
                    title: "Your Current Score:" + " " + currentScore, icon: 'success', text: 'Please Enter Your Name' ,content: 'input', buttons: 'Submit'
                }).then((timesUp) => {
                    clearInterval(countDown);
                    highDisplay.innerHTML = timesUp + ":" + " " + currentScore;
                    questionOne.style.visibility = "hidden";
                    questionTwo.style.visibility = "hidden";
                    questionThree.style.visibility = "hidden";
                    questionFour.style.visibility = "hidden";
                    questionFive.style.visibility = "hidden";
                    scoreDisplay.style.visibility = "visible";
                })
            })
        }
    }, 1000);

/* ----------------------------------------------Question 1----------------------------------------------------------- */
correctAns1.addEventListener ('click', ()=> {
    correctSound.play();
    currentScore += 1000;
    swal ({
        title: 'Correct', icon: 'success', text: ' ', buttons: false, timer: 1400
    }).then((correct) => {
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    })
})

incorrectAns1.addEventListener ('click', () => {
        incorrectSound.play();
        swal ({
            title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
        }).then((incorrect) => {
            timeSeconds -= 10;
            questionOne.style.visibility = "hidden";
            questionTwo.style.visibility = "visible";
        })
})

incorrectAns2.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
    }).then((incorrect) => {
        timeSeconds -= 10;
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    })
})

incorrectAns3.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
    }).then((incorrect) => {
        timeSeconds -= 10;
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    })
})
/* ----------------------------------------------Question 2----------------------------------------------------------- */

correctAns2.addEventListener ('click', ()=> {
    correctSound.play();
    currentScore += 1000;
    swal ({
        title: 'Correct', icon: 'success', text: ' ', buttons: false, timer: 1400
    }).then((correct) => {
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
    })
})

incorrectAns4.addEventListener ('click', () => {
        incorrectSound.play();
        swal ({
            title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
        }).then((incorrect) => {
            timeSeconds -= 10;
            questionTwo.style.visibility = "hidden";
            questionThree.style.visibility = "visible";
        })
})

incorrectAns5.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
    }).then((incorrect) => {
        timeSeconds -= 10;
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
    })
})

incorrectAns6.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
    }).then((incorrect) => {
        timeSeconds -= 10;
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
    })
})
/* ----------------------------------------------Question 3----------------------------------------------------------- */

correctAns3.addEventListener ("click", ()=> {
    correctSound.play();
    currentScore += 1000;
    swal ({
        title: 'Correct', icon: 'success', text: ' ', buttons: false, timer: 1400
    }).then((correct) => {
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
    })
})

incorrectAns7.addEventListener ('click', () => {
        incorrectSound.play();
        swal ({
            title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
        }).then((incorrect) => {
            timeSeconds -= 10;
            questionThree.style.visibility = "hidden";
            questionFour.style.visibility = "visible";
        })
})

incorrectAns8.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
    }).then((incorrect) => {
        timeSeconds -= 10;
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
    })
})

incorrectAns9.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
    }).then((incorrect) => {
        timeSeconds -= 10;
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
    })
})
/* ----------------------------------------------Question 4----------------------------------------------------------- */

correctAns4.addEventListener ("click", ()=> {
    correctSound.play();
    currentScore += 1000;
    swal ({
        title: 'Correct', icon: 'success', text: ' ', buttons: false, timer: 1400
    }).then((correct) => {
        questionFour.style.visibility = "hidden";
        questionFive.style.visibility = "visible";
    })
})

incorrectAns10.addEventListener ('click', () => {
        incorrectSound.play();
        swal ({
            title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
        }).then((incorrect) => {
            timeSeconds -= 10;
            questionFour.style.visibility = "hidden";
            questionFive.style.visibility = "visible";
        })
})

incorrectAns11.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
    }).then((incorrect) => {
        timeSeconds -= 10;
        questionFour.style.visibility = "hidden";
        questionFive.style.visibility = "visible";
    })
})

incorrectAns12.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
    }).then((incorrect) => {
        timeSeconds -= 10;
        questionFour.style.visibility = "hidden";
        questionFive.style.visibility = "visible";
    })
})

/* ----------------------------------------------Question 4----------------------------------------------------------- */

correctAns5.addEventListener ("click", () => {
    clearInterval(countDown);
    correctSound.play();
    currentScore += 1000;
    swal ({
        title: 'Correct', icon: 'success', text: ' ', buttons: false, timer: 1400
    }).then((correct) => {
        swal({
            title: "Your Current Score:" + " " + currentScore, icon: 'success', text: 'Please Enter Your Name' ,content: 'input', buttons: 'Submit'
        }).then((timesUp) =>{
            scoreSound.play();
            clearInterval(countDown);
            questionFive.style.visibility = "hidden";
            scoreDisplay.style.visibility = "visible";
            highScore.style.display = "none";
            highScore1.style.visibility = "visible";
        })
    })
})

incorrectAns13.addEventListener ('click', () => {
        incorrectSound.play();
        swal ({
            title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
        }).then((incorrect) => {
            timeSeconds -= 10;
            swal({
                title: "Your Current Score:" + " " + currentScore, icon: 'success', text: 'Please Enter Your Name' ,content: 'input', buttons: 'Submit'
            }).then((timesUp) => {
                scoreSound.play();
                clearInterval(countDown);
                highDisplay.innerHTML = timesUp + ":" + " " + currentScore;
                questionFive.style.visibility = "hidden";
                scoreDisplay.style.visibility = "visible";
                highScore.style.display = "none";
                highScore1.style.visibility = "visible";
            })
        })
})

incorrectAns14.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
    }).then((incorrect) => {
        timeSeconds -= 10;
        swal({
            title: "Your Current Score:" + " " + currentScore, icon: 'success', text: 'Please Enter Your Name' ,content: 'input', buttons: 'Submit'
        }).then((timesUp) => {
            scoreSound.play();
            clearInterval(countDown);
            highDisplay.innerHTML = timesUp + ":" + " " + currentScore;
            questionFive.style.visibility = "hidden";
            scoreDisplay.style.visibility = "visible";
            highScore.style.display = "none";
            highScore1.style.visibility = "visible";
        })
    })
})

incorrectAns15.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1400
    }).then((incorrect) => {
        timeSeconds -= 10;
        swal({
            title: "Your Current Score:" + " " + currentScore, icon: 'success', text: 'Please Enter Your Name' ,content: 'input', buttons: 'Submit'
        }).then((timesUp) => {
            scoreSound.play();
            clearInterval(countDown);
            highDisplay.innerHTML = timesUp + ":" + " " + currentScore;
            questionFive.style.visibility = "hidden";
            scoreDisplay.style.visibility = "visible";
            highScore.style.display = "none";
            highScore1.style.visibility = "visible";
        })
    })
})

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var userInput = searchBar.value;

    if(userInput == ""){
        startSound.play();
        swal ({
            title: "Cannot be Blank", icon: "warning", text: " ", buttons: false, timer: 1200
        })
    }

    var li = document.createElement("p");
    if(savedScores.indexOf(userInput) == -1){
        savedScores.push(userInput);
        li.textContent = userInput + ":" + " " + currentScore;
        localStorage.setItem("data", JSON.stringify(savedScores));
    }

})
})
for(let i=0; i < savedScores.length; i++) {
    let storeMe = document.createElement("p")
    storeMe.textContent = savedScores[i] + ":" + " " + currentScore;
    highDisplay.appendChild(storeMe);
}
