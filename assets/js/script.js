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

let timeSeconds = 2;
let currentScore = 0;
let savedScores = JSON.parse(localStorage.getItem("data")) || [];

let correctSound = new Audio("./assets/sounds/correct-ans1.mp3");
let incorrectSound = new Audio("./assets/sounds/incorrect-sound1.mp3");
let startSound = new Audio("./assets/sounds/incorrect-sound.mp3");
let scoreSound = new Audio("./assets/sounds/correct-sound1.mp3");
let fightSound = new Audio("./assets/sounds/fight-music.mp3");

highScore.addEventListener ("click", ()=> {
    let imageUrl = "./assets/images/wrong.webp";
    swal({
        title: "Gathering All Pokemons.....", icon: imageUrl, text: ' ', button: false, closeOnClickOutside: false, timer: 2800
    }).then((restart) => {
        window.location.reload();
    })
})

highScore1.addEventListener ("click", ()=> {
    let imageUrl = "./assets/images/wrong.webp";
    swal({
        title: "Getting All Pokemons Ready....", icon: imageUrl, text: ' ', button: false, closeOnClickOutside: false, timer: 2800
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

            if(timeSeconds <= 0) {
                clearInterval(countDown);
                fightSound.pause();
                startSound.play();
                swal({
                    title: 'Times Up!', icon: 'error', text: ' ', buttons: false, closeOnClickOutside: false, timer: 2000
                }).then((tryAgain) =>{
                    scoreSound.play();
                    swal({
                        title: "Your Current Score:" + " " + currentScore, icon: 'success', closeOnClickOutside: false, text: 'Please Enter Your Name' ,content: 'input', buttons: 'Submit'
                    }).then((timesUp) => {
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
 
/* ----------------------------------------------Question 1----------------------------------------------------------- */
correctAns1.addEventListener ('click', ()=> {
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
})

incorrectAns1.addEventListener ('click', () => {
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
})

incorrectAns2.addEventListener ('click', () => {
    incorrectSound.play();
    let imageUrl = "./assets/images/wrong1.webp"
    swal ({
        title: 'Incorrect: Its Pikachu', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
    }).then((incorrect) => {
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    })
    timeSeconds -= 9;
})

incorrectAns3.addEventListener ('click', () => {
    incorrectSound.play();
    let imageUrl = "./assets/images/wrong1.webp"
        swal ({
            title: 'Incorrect: Its Pikachu', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
    }).then((incorrect) => {
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    })
    timeSeconds -= 9;
})
/* ----------------------------------------------Question 2----------------------------------------------------------- */

correctAns2.addEventListener ('click', ()=> {
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
    
})

incorrectAns4.addEventListener ('click', () => {
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
})

incorrectAns5.addEventListener ('click', () => {
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
})

incorrectAns6.addEventListener ('click', () => {
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
})
/* ----------------------------------------------Question 3----------------------------------------------------------- */

correctAns3.addEventListener ("click", ()=> {
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
})

incorrectAns7.addEventListener ('click', () => {
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
})

incorrectAns8.addEventListener ('click', () => {
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
})

incorrectAns9.addEventListener ('click', () => {
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
})
/* ----------------------------------------------Question 4----------------------------------------------------------- */

correctAns4.addEventListener ("click", ()=> {
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
})

incorrectAns10.addEventListener ('click', () => {
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
})

incorrectAns11.addEventListener ('click', () => {
    incorrectSound.play();
    incorrectSound.volume = 0.4;
    let imageUrl = "./assets/images/wrong1.webp";
    swal ({
        title: 'Incorrect: Its Eevee', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
    }).then((incorrect) => {
        questionFour.style.visibility = "hidden";
        questionFive.style.visibility = "visible";
    })
    timeSeconds -= 9;
})

incorrectAns12.addEventListener ('click', () => {
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
})

/* ----------------------------------------------Question 5----------------------------------------------------------- */

correctAns5.addEventListener ("click", () => {
    correctSound.play();
    correctSound.volume = 0.4;
    fightSound.pause();
    currentScore++;
    clearInterval(countDown);
    let imageUrl = "./assets/images/giphy.webp"
    swal ({
        title: 'Correct: Its Gengar', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
    }).then((correct) => {
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
})

incorrectAns13.addEventListener ('click', () => {
        incorrectSound.play();
        incorrectSound.volume = 0.4;
        clearInterval(countDown);
        let imageUrl = "./assets/images/wrong1.webp";
        swal ({
            title: 'Incorrect: Its Gengar', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
        }).then((incorrect) => {
            swal({
                title: "Your Current Score:" + " " + currentScore, icon: 'success', text: 'Please Enter Your Name' ,content: 'input', buttons: 'Submit'
            }).then((timesUp) => {
                scoreSound.play();
                highDisplay.innerHTML = timesUp + ":" + " " + currentScore + "/" + "5";
                questionFive.style.visibility = "hidden";
                scoreDisplay.style.visibility = "visible";
                highScore.style.display = "none";
                highScore1.style.visibility = "visible";
            })
        })
})

incorrectAns14.addEventListener ('click', () => {
    incorrectSound.play();
    incorrectSound.volume = 0.4;
    clearInterval(countDown);
    let imageUrl = "./assets/images/wrong1.webp";
        swal ({
            title: 'Incorrect: Its Gengar', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
    }).then((incorrect) => {
        swal({
            title: "Your Current Score:" + " " + currentScore, icon: 'success', text: 'Please Enter Your Name' ,content: 'input', buttons: 'Submit'
        }).then((timesUp) => {
            scoreSound.play();
            highDisplay.innerHTML = timesUp + ":" + " " + currentScore + "/" + "5";
            questionFive.style.visibility = "hidden";
            scoreDisplay.style.visibility = "visible";
            highScore.style.display = "none";
            highScore1.style.visibility = "visible";
        })
    })
})

incorrectAns15.addEventListener ('click', () => {
    incorrectSound.play();
    incorrectSound.volume = 0.4;
    clearInterval(countDown);
    let imageUrl = "./assets/images/wrong1.webp";
    swal ({
        title: 'Incorrect: Its Gengar', icon: imageUrl, text: currentScore + "/" + 5, buttons: false, closeOnClickOutside: false, timer: 1400
    }).then((incorrect) => {
        swal({
            title: "Your Current Score:" + " " + currentScore, icon: 'success', text: 'Please Enter Your Name' ,content: 'input', buttons: 'Submit'
        }).then((timesUp) => {
            scoreSound.play();
            highDisplay.innerHTML = timesUp + ":" + " " + currentScore + "/" + "5";
            questionFive.style.visibility = "hidden";
            scoreDisplay.style.visibility = "visible";
            highScore.style.display = "none";
            highScore1.style.visibility = "visible";
        })
    })

})
}) 
})