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

var a_text = "";
var b_text = "";
var c_text = "";
var d_text = "";
var current = 0;
var btnSubmit = "";
var btnAnswer = "";
var result = 0;


function loadQuiz() {
    const currentData = quizData[current];
    var element_question = document.getElementById("question");
    element_question.innerText = currentData.question;
    inputA.checked = false;
    inputB.checked = false;
    inputC.checked = false;
    inputA.checked = false;

    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;

};

function showResultEvent() {
    var elems = document.getElementsByClassName('quiz-container');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
    // document.getElementsByClassName("quiz-container")[0].style.display = 'none';
    console.log(result +"")
    elResult.innerText ="Your Result is " + result;
    document.getElementsByClassName("result-container")[0].style.display = 'block';

}

function addSubmitEvent() {
    btnSubmit.addEventListener('click', () => {
        console.log(current, quizData.length)
          {
            var radios = document.getElementsByTagName('input');
            var value;
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].type === 'radio' && radios[i].checked) {
                    // get value, set checked flag or do whatever you need to
                    value = radios[i].value;
                    if (value == quizData[current].correct) {
                        result++;
                        debugger
                    }
                }
            }
            if (!value) {
                alert("Select one answer to go ahead");
            }
           
        }
        if (current >= quizData.length - 1) {
            alert("The quiz has been finished");
            showResultEvent();
        }
        current++;
        loadQuiz();
    });

}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    a_text = document.getElementById("a_text");
    b_text = document.getElementById("b_text");
    c_text = document.getElementById("c_text");
    d_text = document.getElementById("d_text");
    btnSubmit = document.getElementById("submit");
    inputA = document.getElementById("a");
    inputB = document.getElementById("b");
    inputC = document.getElementById("c");
    inputD = document.getElementById("d");
    btnAnswer = document.getElementsByName("answer");
    elInput = document.getElementsByTagName("input");
    document.getElementsByClassName("result-container")[0].style.display = 'none';
    elResult = document.getElementById("result");
    loadQuiz();
    addSubmitEvent();

});