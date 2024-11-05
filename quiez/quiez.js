const quiz = [
    {
        question: "What is the most used programming language in 2024?",
        ans1text: "java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is President of US? ",
        ans1text: "joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "joe Biden",
    },
    {
        question: "What does HTML satand for? ",
        ans1text: "Hyper Text Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Json Object Notation",
        ans4text: "Helicopters Teribon Materlo lantora",
        answer: "Hyper Text Markup Language",
    },
    {
        question: "What year was Java Script Launched? ",
        ans1text: "1890",
        ans2text: "1993",
        ans3text: "1995",
        ans4text: "None of the above",
        answer: "1995",
    },
]

const question = document.getElementById("quiz-question")

const option1 = document.getElementById("text-option1");
const option2 = document.getElementById("text-option2");
const option3 = document.getElementById("text-option3");
const option4 = document.getElementById("text-option4");
const answerElt = document.querySelectorAll(".answer")



const submit = document.getElementById("submit")

let currentQuestion = 0;
let score = 0;


question.textContent = quiz[currentQuestion].question
option1.textContent = quiz[currentQuestion].ans1text
option2.textContent = quiz[currentQuestion].ans2text
option3.textContent = quiz[currentQuestion].ans3text
option4.textContent = quiz[currentQuestion].ans4text


submit.addEventListener("click", () => {
 
    const checkedAns = document.querySelector('input[type = "radio"]:checked')
   

    if (checkedAns === null) {
        alert("Please Select an Answer")
    }else{
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }
       
        currentQuestion++;

        if (currentQuestion < quiz.length) {
            question.textContent = quiz[currentQuestion].question
            option1.textContent = quiz[currentQuestion].ans1text
            option2.textContent = quiz[currentQuestion].ans2text
            option3.textContent = quiz[currentQuestion].ans3text
            option4.textContent = quiz[currentQuestion].ans4text
            checkedAns.checked = false;
        }else{
             alert("Your Score is " + " " + score  + " " + "Out of " + quiz.length);
             location.reload();
        }
    }
    
})
