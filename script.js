const quizData = [
    {
        question: 'How many continents does the World have?',
        a: '5',
        b: '6',
        c: '7',
        d: '8',
        correct: 'c'
    }, 
    {
        question: 'How many oceans does the World have?',
        a: '5',
        b: '6',
        c: '7',
        d: '8',
        correct: 'a'
    }, 
    {
        question: 'How many countries are there in the World?',
        a: '197',
        b: '183',
        c: '193',
        d: '201',
        correct: 'c'
    }, 
    {
        question: 'How many states are there in India?',
        a: '28',
        b: '29',
        c: '30',
        d: '27',
        correct: 'b'
    }, 
    {
        question: 'Which is the capital of India?',
        a: 'Chandigarh',
        b: 'Mumbai',
        c: 'Lucknow',
        d: 'Delhi',
        correct: 'd'
    }, 
    {
        question: 'Which is the national animal India?',
        a: 'Tiger',
        b: 'Peacock',
        c: 'Elephant',
        d: 'Dragon',
        correct: 'a'
    },
    {
        question: 'Largest mammal alive on the Earth.',
        a: 'Dinosaur',
        b: 'Ostrich',
        c: 'Dragon',
        d: 'Antarctic blue whale',
        correct: 'd'
    },
    {
        question: 'Which is the most powerful country?',
        a: 'Germany',
        b: 'United States',
        c: 'Russia',
        d: 'India',
        correct: 'b'
    },
    {
        question: 'Which sport is most popular in the World?',
        a: 'Soccer',
        b: 'Cricket',
        c: 'Badminton',
        d: 'Baseball',
        correct: 'a'
    },
    {
        question: 'Which is the safest country in the World? ',
        a: 'Iceland',
        b: 'New Zealand',
        c: 'France',
        d: 'India',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
     
}

function getSelected() {
    let answer = undefined; 

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer =  answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // Check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz(); 
        }else {
            quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions. </h2> <button onclick="location.reload()">Reload</button>`;
        }
    }

});