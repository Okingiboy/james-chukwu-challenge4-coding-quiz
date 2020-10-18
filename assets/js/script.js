// Home page
var mainEl = document.querySelector("#main");

var questionOne = function() {
        //div
    var questionOneContainer = document.createElement("div");
    questionOneContainer.className = "question-one-container";
    mainEl.appendChild(questionOneContainer);

        //question One
    var questionOne = document.createElement("h1");
    questionOne.textContent = "Commonly Used data types DO NOT Include:";
    questionOneContainer.appendChild(questionOne);

        //question One Answers
            // answer One
    var answerOne = document.createElement("button");
    answerOne.textContent = "strings";
    questionOneContainer.appendChild(answerOne);
            // answer Two
    var answerTwo = document.createElement("button");
    answerTwo.textContent = "booleans";
    questionOneContainer.appendChild(answerTwo);
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.textContent = "alerts";
    questionOneContainer.appendChild(answerThree);
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.textContent = "numbers";
    questionOneContainer.appendChild(answerFour);


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
        startQuizBtn.remove();
        homeHeader.remove();
        homeParagraph.remove();
        questionOne();
    });
}
start();