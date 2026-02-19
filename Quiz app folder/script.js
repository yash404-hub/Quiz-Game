const questions = [
  {
    question: "1. Which data structure works on FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue"
  },
  {
    question: "2. What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(log n)"
  },
  {
    question: "3. Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  },
  {
    question: "4. Which HTML tag is used to link external JavaScript?",
    options: ["<script>", "<link>", "<js>", "<import>"],
    answer: "<script>"
  },
  {
    question: "5. Which array method adds an element at the end?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "6. What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Document Order Model",
      "Data Orientation Method"
    ],
    answer: "Document Object Model"
  },
  {
    question: "7. Which operator is used for strict equality?",
    options: ["==", "===", "!=", "!=="],
    answer: "==="
  },
  {
    question: "8. Which method converts JSON string to object?",
    options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "JSON.object()"],
    answer: "JSON.parse()"
  },
  {
    question: "9. In CSS, which property is used to change text color?",
    options: ["background-color", "font-color", "text-color", "color"],
    answer: "color"
  },
  {
    question: "10. Which loop runs at least once even if condition is false?",
    options: ["for", "while", "do...while", "foreach"],
    answer: "do...while"
  }
];

const quesBox = document.getElementById("quesBox");
const options = document.getElementsByName("option");

let index = 0;
let answers = Array(questions.length).fill(null);
let score = 0;

function loadQuestion() {
    const data = questions[index];

    quesBox.innerText = data.question;
    document.getElementById("opt1").innerText = data.options[0];
    document.getElementById("opt2").innerText = data.options[1];
    document.getElementById("opt3").innerText = data.options[2];
    document.getElementById("opt4").innerText = data.options[3];

    options.forEach(opt => opt.checked = false);

    if (answers[index] !== null) {
        options[answers[index]].checked = true;
    }

    document.getElementById("prevBtn").style.display = index === 0 ? "none" : "inline-block";
    document.getElementById("nextBtn").style.display = index === questions.length - 1 ? "none" : "inline-block";
    document.getElementById("submitBtn").style.display = index === questions.length - 1 ? "inline-block" : "none";
}

loadQuestion();

function saveAnswer() {
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            answers[index] = i;
            break;
        }
    }
}

function nextQuestion() {
    saveAnswer();
    if (index < questions.length - 1) {
        index++;
        loadQuestion();
    }
}

function prevQuestion() {
    saveAnswer();
    if (index > 0) {
        index--;
        loadQuestion();
    }
}

function submitQuiz() {
    saveAnswer();

    score = 0;

    for (let i = 0; i < questions.length; i++) {
        if (answers[i] !== null && questions[i].options[answers[i]] === questions[i].answer) {
            score++;
        }
    }

    document.querySelector(".box").innerHTML = `
        <h2>Your Score: ${score} / ${questions.length}</h2>
        <button class="btn" onclick="location.reload()">Restart</button>
    `;
}
