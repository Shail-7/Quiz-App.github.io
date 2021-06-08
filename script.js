const quizDB = [
    {
        question: "Full Form of HTML?",
        a: "Hyper Text Markup Language",
        b: "Hyper Text Markdown Language",
        c: "Hot Topic Making Loud",
        d: "High-Level Target Markup Language",
        ans: "opt1"
    },
    {
        question: "Full Form of CSS?",
        a: "Casette System Survey",
        b: "Cascading Style Sheet",
        c: "Coming style System",
        d: "None",
        ans: "opt2"
    },
    {
        question: " Which type of JavaScript language is ___",

        a: "Object- Oriented",
        b: "Object - Based",
        c: "Assembly - language",
        d: "High - level",
        ans: "opt2"
    },
    {
        question: "When interpreter encounters an empty statements, what it will do:",

        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Throws an error",
        d: "Ignores the statements",
        ans: "opt4"
    }
]

let minCnt=2;
let timeCnt = 120;
let secCnt=0;
let score = 0;
let time = document.getElementById("time");

const timeFn = () => {
    timeCnt--;
    secCnt--;
    if(timeCnt==119||timeCnt==60)
    {
        // alert("hello");
        secCnt=59;
        minCnt=1;
    }

    if(timeCnt==60)
    {
        secCnt=59;
        minCnt=0;
    }



    time.innerHTML = `${minCnt}:${secCnt}`;

    if (timeCnt < 6) {
        time.style.color = 'red';
    }
    if (timeCnt == 0) {
        // alert(`Quiz over ${score}`);
        let scorediv = document.getElementById("score");
        scorediv.style.visibility = 'visible';
        let marks = document.getElementById("marks");
        marks.innerHTML = `Your Score:${score}/${quizDB.length}`;
        time.innerHTML = "TimeOut!";
        let submit = document.getElementById("submit");
        submit.setAttribute("disabled","disabled");


        // location.reload();
        clearInterval(1);

    }

}

let t = setInterval(timeFn, 1000);

let queCnt = 0;


let que = document.getElementById("que");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let submit = document.getElementById("submit");

const loadQue = () => {
    let q = quizDB[queCnt];
    que.innerHTML = q.question;
    a.innerHTML = q.a;
    b.innerHTML = q.b;
    c.innerHTML = q.c;
    d.innerHTML = q.d;

}


loadQue();

const checkAns = () => {

    let answers = document.querySelectorAll('.options');
    let selectedAns = "";
    for (let i = 0; i < answers.length; i++) {

        if (answers[i].checked) {
            selectedAns = answers[i].id;
            answers[i].checked = false;
            // alert(answers[i].id);
        }
    }
    return selectedAns;

}

submit.addEventListener('click', () => {

    const selectedAns = checkAns();
    if (selectedAns == quizDB[queCnt].ans) {
        score++;
        console.log(score);
    }
    queCnt++;

    if (queCnt < quizDB.length) {
        loadQue();
    }
    else {
        submit.setAttribute("disabled","disabled");
        let scorediv = document.getElementById("score");
        scorediv.style.visibility = 'visible';
        let marks = document.getElementById("marks");
        marks.innerHTML = `Your Score:${score}/${quizDB.length}`;
        clearInterval(1);

    }


});





