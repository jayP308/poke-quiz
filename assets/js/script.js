let startQuizBt = document.querySelector("#start-quiz");
let instructSec = document.querySelector(".inst-section");

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

let correctSound = new Audio("correct-ans1.mp3");
let incorrectSound = new Audio("incorrect-sound1.mp3");


startQuizBt.addEventListener ("click", () => {
    questionOne.style.visibility = "visible";
    instructSec.style.visibility = "hidden";
})

/* ----------------------------------------------Question 1----------------------------------------------------------- */
correctAns1.addEventListener ('click', ()=> {
    correctSound.play();
    swal ({
        title: 'Correct', icon: 'success', text: ' ', buttons: false, timer: 1300
    }).then((correct) => {
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    })
})

incorrectAns1.addEventListener ('click', () => {
        incorrectSound.play();
        swal ({
            title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1300
        }).then((incorrect) => {
            questionOne.style.visibility = "hidden";
            questionTwo.style.visibility = "visible";
        })
})

incorrectAns2.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1300
    }).then((incorrect) => {
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    })
})

incorrectAns3.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1300
    }).then((incorrect) => {
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "visible";
    })
})
/* ----------------------------------------------Question 2----------------------------------------------------------- */

correctAns2.addEventListener ('click', ()=> {
    correctSound.play();
    swal ({
        title: 'Correct', icon: 'success', text: ' ', buttons: false, timer: 1300
    }).then((correct) => {
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
    })
})

incorrectAns4.addEventListener ('click', () => {
        incorrectSound.play();
        swal ({
            title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1300
        }).then((incorrect) => {
            questionTwo.style.visibility = "hidden";
            questionThree.style.visibility = "visible";
        })
})

incorrectAns5.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1300
    }).then((incorrect) => {
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
    })
})

incorrectAns6.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1300
    }).then((incorrect) => {
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "visible";
    })
})
/* ----------------------------------------------Question 3----------------------------------------------------------- */

correctAns3.addEventListener ("click", ()=> {
    correctSound.play();
    swal ({
        title: 'Correct', icon: 'success', text: ' ', buttons: false, timer: 1300
    }).then((correct) => {
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
    })
})

incorrectAns7.addEventListener ('click', () => {
        incorrectSound.play();
        swal ({
            title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1300
        }).then((incorrect) => {
            questionThree.style.visibility = "hidden";
            questionFour.style.visibility = "visible";
        })
})

incorrectAns8.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1300
    }).then((incorrect) => {
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
    })
})

incorrectAns9.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1300
    }).then((incorrect) => {
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "visible";
    })
})
/* ----------------------------------------------Question 4----------------------------------------------------------- */

correctAns4.addEventListener ("click", ()=> {
    correctSound.play();
    swal ({
        title: 'Correct', icon: 'success', text: ' ', buttons: false, timer: 1300
    }).then((correct) => {
        questionFour.style.visibility = "hidden";
        questionFive.style.visibility = "visible";
    })
})

incorrectAns10.addEventListener ('click', () => {
        incorrectSound.play();
        swal ({
            title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1300
        }).then((incorrect) => {
            questionFour.style.visibility = "hidden";
            questionFive.style.visibility = "visible";
        })
})

incorrectAns11.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1300
    }).then((incorrect) => {
        questionFour.style.visibility = "hidden";
        questionFive.style.visibility = "visible";
    })
})

incorrectAns12.addEventListener ('click', () => {
    incorrectSound.play();
    swal ({
        title: 'Incorrect', icon: 'error', text: ' ', buttons: false, timer: 1300
    }).then((incorrect) => {
        questionFour.style.visibility = "hidden";
        questionFive.style.visibility = "visible";
    })
})