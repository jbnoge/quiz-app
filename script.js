const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        correct: 2
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "float", "string"],
        correct: 0
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Oracle"],
        correct: 1
    },
    {
        question: "Which method converts JSON to JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "convert.JSON()"],
        correct: 0
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "**"],
        correct: 0
    }
];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(quizData);
let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementsByClassName("option");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
function loadQuestion() {
    feedbackEl.innerHTML = "";
    nextBtn.style.display = "none";
    const q = quizData[currentQuestion];
    questionEl.innerHTML = q.question;

    for (let i = 0; i < optionsEl.length; i++) {
        optionsEl[i].innerHTML = q.options[i];
        optionsEl[i].disabled = false;
    }
}
function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestion].correct;
    if (selectedIndex === correctIndex) {
        feedbackEl.innerHTML = "✅ Correct!";
        feedbackEl.style.color = "green";
        score++;
    } else {
        feedbackEl.innerHTML = "❌ Wrong!";
        feedbackEl.style.color = "red";
    }
    for (let btn of optionsEl) {
        btn.disabled = true;
    }

    nextBtn.style.display = "block";
}
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}
function showResult() {
    questionEl.innerHTML = "Quiz Completed 🎉";
    document.getElementById("options").innerHTML = "";
    feedbackEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.innerHTML = `Your Score: ${score} / ${quizData.length}`;
}
loadQuestion();
