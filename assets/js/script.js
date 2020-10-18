// Home page
var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");

var timer = function() {
    var timeLeft = 75;

    var timeInterval = setInterval(() => {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft --;
            console.log(timeLeft);
        } else {
            timerEl.textContent = "Time is Up";
            clearInterval(timeInterval);
        }
    }, 1000);
    console.log("TIMER STARTED")
}

var questionOne = function() {
        //div
    var questionOneContainer = document.createElement("div");
    questionOneContainer.className = "question-one-container";
    mainEl.appendChild(questionOneContainer);

        //question One
    var questionOne = document.createElement("h1");
    questionOne.className = "question-one";
    questionOne.textContent = "Commonly Used data types DO NOT Include:";
    questionOneContainer.appendChild(questionOne);

        //question One Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionOneContainer.appendChild(answerContainer);
            // answer One
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. strings";
    answerContainer.appendChild(answerOne);
            // answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. booleans";
    answerContainer.appendChild(answerTwo);
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. alerts";
    answerContainer.appendChild(answerThree);
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. numbers";
    answerContainer.appendChild(answerFour);


    console.log("Question One");
}

var start = function() {
        //div
    var container = document.createElement("div");
    container.className = "home-container"
    mainEl.appendChild(container);

        // start page title
    var homeHeader = document.createElement("h1");
    homeHeader.className = "home-title";
    homeHeader.textContent = "Coding Quiz Challenge";
    container.appendChild(homeHeader);

        // start page paragraph
    var homeParagraph = document.createElement("p");
    homeParagraph.className = "home-text-p";
    homeParagraph.textContent = "Try to answer the following code-related" +
    " questions within the time limit. Keep in mind that incorrect answer will" +
    " penalize your score/time by ten seconds!"
    container.appendChild(homeParagraph);

        // start quick button
    var startQuizBtn = document.createElement("button");
    startQuizBtn.className = "home-btn";
    startQuizBtn.textContent = "Start Quiz";
    container.appendChild(startQuizBtn);

        // removes home page elements
    startQuizBtn.addEventListener("click", event => {
        timer();
        startQuizBtn.remove();
        homeHeader.remove();
        homeParagraph.remove();
        questionOne();
    });
}
start();