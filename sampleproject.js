const questions =[
    {
        question: "what is the reagent used in Wolff Kishner reduction?",        
        difficulty: "Medium",
        answers : [
            {text: "Aluminium triclorate", correct: false},
            {text: "hydrazine", correct: true},
            {text: "potassium hydroxide", correct: false},
            {text: "zinc chloride", correct: false},
        ] 
        
    },
    {
        question: "Which of the following can reduce decomposition of hydrogenpreoxide on exposure to light?",
        difficulty: "hard",
        answers : [
            {text: "Urea", correct: true},
            {text: "Alkali", correct: false},
            {text: "Glass containers", correct: false},
            {text: "Dust", correct: false},
        ] 
    },
    {
        question: "The number of molecules and moles in litres of oxygen molecule at STP are respectively?",        
        difficulty: "easy",
        answers : [
            {text: "7.527 × 10^23 and 0.125 mol", correct: false},
            {text: "7.527 × 10^23 and 0.250 mol", correct: false},
            {text: "1.505 × 10^23 and 0.250 mol", correct: false},
            {text: "7.527 × 10^22 and 0.125 mol", correct: true},
        ] 
    },
    {
        question: "Formation of which complex, among the following, is not a confirmatory test of Pb^(2+)ions?",        
        difficulty: "hard",
        answers : [
            {text: "Lead sulphate", correct: false},
            {text: "Lead nitrate", correct: true},
            {text: "Lead chromate", correct: false},
            {text: "Lead iodide", correct: false},
        ] 
    },
    {
        question: "A 12.5eV electron beam is used to bombard gaseous hydrogen at room temperature. The number of spectral lines emitted will be:",        
        difficulty: "Medium",
        answers : [
            {text: "1", correct: false},
            {text: "4", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: true},
        ] 
    },
    {
        question: "Two bodies are having kinetic energies in the ratio 16:9. If they have same linear momentum, the ratio of their masses respectively is:",        
        difficulty: "hard",
        answers : [
            {text: "3 : 4", correct: false},
            {text: "9 : 16", correct: true},
            {text: "16 : 9", correct: false},
            {text: "4 : 3", correct: false},
        ] 
    },
    {
        question: "An object is placed at a distance of 12cm in front of a plane mirror. The virtual and erect image is formed by the mirror. Now the mirror is moved by 4cm towards the stationary object. The distance by which the position of image would be shifted, will be?",        
        difficulty: "Medium",
        answers : [
            {text: "4 cm towards mirror", correct: false},
            {text: "8 cm away from mirror", correct: false},
            {text: "8 cm towards mirror", correct: true},
            {text: "2 cm towards mirror", correct: false},
        ] 
    },
    {
        question: "A source supplies heat to a system at the rate of 1000W. If the system performs work at a rate of 200W.The rate at which internal energy of the system increases is?",        
        difficulty: "easy",
        answers : [
            {text: "600 W", correct: false},
            {text: "8500 W", correct: false},
            {text: "800 W", correct: true},
            {text: "1200 W", correct: false},
        ] 
    },
    {
        question: "If the radius of the largest circle with centre(2,0) inscribed in the ellipse is , then 12(r^2)is equal to",        
        difficulty: "easy",
        answers : [
            {text: "115", correct: false},
            {text: "92", correct: true},
            {text: "69", correct: false},
            {text: "72", correct: false},
        ] 
    },
    {
        question: "The sum of the first terms of the series 5+11+19+29+41+..... is",        
        difficulty: "Medium",
        answers : [
            {text: "3520", correct: true},
            {text: "3450", correct: false},
            {text: "3250", correct: false},
            {text: "3420", correct: false},
        ] 
    },
    {
        question: "The number of five-digit numbers, greater than and divisible by , which can be formed using the digits 0,1,3,5,7and9 and without repetition, is equal to",        
        difficulty:"hard",
        answers : [
            {text: "132", correct: false},
            {text: "72", correct: false},
            {text: "96", correct: false},
            {text: "120", correct: true},
        ] 
    },
    {
        question: "A bag contains 6 white and 4 black balls. A die is rolled once and the number of balls equal to the number obtained on the die are drawn from the bag at random.The probability that all the balls drawn are white is",        
        difficulty: "hard",
        answers : [
            {text: "1/4", correct: false},
            {text: "11/50", correct: false},
            {text: "1/5", correct: true},
            {text: "9/50", correct: false},
        ] 
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const difficultyLevel = document.getElementById("difficulty");

let currentQuestionIndex = 0;
let score = 0;
let percentQuestionSolved;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+"."+ currentQuestion.question;
    difficultyLevel.innerHTML = currentQuestion.difficulty
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button"); 
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(f){
    const selectedButton = f.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }
    else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    percentQuestionSolved = ((score)/(questions.length))*100
    resetState();
    
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}! and the percent of questions solved correctly are ${percentQuestionSolved}`;
    difficultyLevel.innerHTML = "";
    nextButton.innerHTML = "Play Again ";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

let dropdownBtn =document.getElementById("drop-text");
let list =document.getElementById("list");
dropdownBtn.onclick = function (){
    list.classList.toggle("show");
};

let timer = null;
let seconds = 0, minutes = 0, hours = 0;

function updateTimerDisplay() {
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    let displayHours = hours < 10 ? '0' + hours : hours;
    document.getElementById('timer').textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        updateTimerDisplay();
    }, 1000);
}


document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', () => {
        stopTimer();
    });
});

function stopTimer() {
    clearInterval(timer);
    timer = null;

}
startTimer();

startQuiz();