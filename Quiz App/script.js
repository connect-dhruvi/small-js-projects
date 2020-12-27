const quizData = [{
        question: "Who invented React JS Framework? ",
        a: "Google",
        b: "Microsoft",
        c: "Facebook",
        d: "Oracle",
        correct: "c"
    },
    {
        question: "what is the most use programming language?",
        a: "Javascript",
        b: "Python",
        c: "Java",
        d: "C++",
        correct: "a"
    },
    {
        question: "A good algorithm must be",
        a: "Detailed",
        b: "Replacable",
        c: "simple",
        d: "Open-ended",
        correct: "a"
    },
    {
        question: "which of the following is example of binary",
        a: "true",
        b: "false",
        c: "boolean",
        d: "0",
        correct: "d"
    },
    {
        question: "which port number is used by FTP protocol?",
        a: "80",
        b: "21",
        c: "64",
        d: "0",
        correct: "b"
    },
    {
        question: "what year javascript was launched?",
        a: "1999",
        b: "1986",
        c: "1995",
        d: "2002",
        correct: "c"
    },
];

var a_text="";
var b_text="";
var c_text="";
var d_text="";
var current = 0; 

var funcXyz = function xyz(){
    var text =123;
    var alertWarning = function(text){
        alert(text);
    }
    return{
        alertWarning: alertWarning,
        errorWarning: function(text){

        }
    }
}();

function loadQuiz() {
    const currentData = quizData[current];
    console.log(currentData.question);
    
    let element_question = document.getElementById("question");
    debugger
    element_question.innerText = currentData.question;

    quizData.map((e => {

    }))

    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;

    current++;
};

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    a_text = document.getElementById("a_text");
    b_text = document.getElementById("b_text");
    c_text = document.getElementById("c_text");
    d_text = document.getElementById("d_text");
    loadQuiz();
});