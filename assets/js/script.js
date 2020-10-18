// Home page
var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");
var timeLeft = 75;
var totalPoints = 0;

    // Global Functions for use in questions
var points = function() {
    totalPoints = totalPoints + 10;
    console.log("You have " + totalPoints + " points!");
}
var timer = function() {
    var timeInterval = setInterval(() => {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft --;
            
        } else {
            timerEl.textContent = "Time is Up";
            clearInterval(timeInterval);
        }
    }, 1000);
    
    console.log("TIMER STARTED")
}


var questionTwo = function() {
        //div
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

        // question Two
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "The condition in an if / else statement if enclosed with ________.";
    questionContainer.appendChild(question);

        // question Two Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // answer one
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. quotes";
    answerContainer.appendChild(answerOne);
            //answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. curly brackets";
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
}

var questionOne = function() {
        // execute if wrong answer is choosen
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionTwo();
        console.log("The answer you picked was wrong");
    }
        //div
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

        //question One
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Commonly Used data types DO NOT Include:";
    questionContainer.appendChild(question);

        //question One Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // answer One
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. strings";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })
            // answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. booleans";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. alerts";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionOneContainer.remove();
        questionTwo();
        console.log("You picked the right answer");
        points();
    })
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. numbers";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
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