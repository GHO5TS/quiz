// Selectors
var startBtn = document.getElementById("start-game");
var questionsDiv = document.getElementById("questions-here");
var timeEl = document.getElementById("timer");
var answersDiv = document.getElementById("answers-here")
var rules = document.getElementById("rules")
var yourAnswer = document.getElementById("your-answer")

// Global variables
var questionIdx = 0;
var currentQuestion;
var secondsLeft = 30;
var allQuestions = [
    { 
        title: "what is 9 + 10?",
        answers: ["21", "21", "21", "19"],
        correct: "19"
    },
    {
        title: "what is 10 - 9?",
        answers: ["57", "39", "1", "5"],
        correct: "1"
            
    },
    {
        title: "What is pie?",
        answers: ["3.14", "314", "5", "Bad pizza"],
        correct: "3.14"
    },
    {
        title: "what is the moon?",
        answers: ["A projection", "A ball of rock in space", "A hole in the sky", "Your imagination"],
        correct: "A ball of rock in space"
    },
    {
        title: "Who made this quiz?",
        answers: ["Zach", "Liz", "Josh", "Ally"],
        correct: "Josh"
    }
];


// Functions

function startGame(){
    console.log("start test")
    rules.classList.add("hide");
    startBtn.classList.add("hide");
    // start timer
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
  
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            window.confirm("Times Up!");
            console.log(secondsLeft)
            endGame()
      }
  
    }, 1000);
  

    // load the first question
    showQuestion();
}

function showQuestion(){
    currentQuestion = allQuestions[questionIdx];
    // populate that div with the content for the current question
    questionsDiv.textContent = currentQuestion.title;
    questionsDiv.innerHTML = currentQuestion.title;
for (var i = 0; i < currentQuestion.answers.length;i++){
    var currentAnswer = currentQuestion.answers[i];
    var button = document.createElement ("button");
    button.textContent = currentAnswer;
    button.setAttribute("value", currentAnswer);
    button.onclick = correctAnswer;
    answersDiv.append(button)
    console.log(currentAnswer)
}
}

function correctAnswer(){
if (this.value === allQuestions[questionIdx].correct){
    yourAnswer.textContent = "Correct!";
}
if (this.value !== allQuestions[questionIdx].correct){
    secondsLeft-=5;
    yourAnswer.textContent = "wrong";
}
answersDiv.textContent = "";
questionIdx++;
showQuestion();
}

function endGame (){

}

// Event listener for the start button
startBtn.addEventListener("click", startGame);

// Event listener for the answer buttons
questionsDiv.addEventListener("click", function(event){
    if( event.target.matches("button") ){
        var buttonClicked = event.target;
        console.log(buttonClicked)
        // is the answer correct?

        // set up next question
        questionIdx++;
        showQuestion();
    }
})