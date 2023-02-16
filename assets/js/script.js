let startQuizBt = document.querySelector("#start-quiz");
let instructSec = document.querySelector(".inst-section");

let questionOne = document.querySelector(".quest1");

startQuizBt.addEventListener ("click", () => {
    questionOne.style.visibility = "visible";
    instructSec.style.visibility = "hidden";
});