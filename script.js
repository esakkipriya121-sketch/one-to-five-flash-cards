```javascript
// 5 Flash Cards
let cards = [

    {
        question: "What is HTML?",
        options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Home Tool Markup Language",
            "Hyper Tool Multi Language"
        ],
        answer: "HyperText Markup Language"
    },

    {
        question: "What is CSS?",
        options: [
            "Computer Style Sheet",
            "Cascading Style Sheets",
            "Colorful Style Sheet",
            "Creative Style System"
        ],
        answer: "Cascading Style Sheets"
    },

    {
        question: "What is JavaScript?",
        options: [
            "A database",
            "A programming language",
            "An operating system",
            "A web browser"
        ],
        answer: "A programming language"
    },

    {
        question: "Which tag is used for a paragraph?",
        options: [
            "<h1>",
            "<br>",
            "<p>",
            "<img>"
        ],
        answer: "<p>"
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "//",
            "##",
            "<!-- -->",
            "**"
        ],
        answer: "//"
    }

];


// Current card number
let currentCard = 0;


// View Button
function viewOptions() {

    let optionBox = document.getElementById("options");

    optionBox.innerHTML = "";

    // Display 4 options
    for (let i = 0; i < 4; i++) {

        let button = document.createElement("button");

        button.innerHTML = cards[currentCard].options[i];

        button.onclick = function() {
            checkAnswer(cards[currentCard].options[i]);
        };

        optionBox.appendChild(button);
    }

}


// Check Answer
function checkAnswer(selectedAnswer) {

    let result = document.getElementById("result");

    if (selectedAnswer == cards[currentCard].answer) {

        result.innerHTML = "Correct Answer!";
        result.style.color = "green";

    } else {

        result.innerHTML =
            "Wrong! Right Answer is: " +
            cards[currentCard].answer;

        result.style.color = "red";
    }

}


// Next Card
function nextCard() {

    currentCard++;

    if (currentCard >= cards.length) {
        currentCard = 0;
    }

    // Change question
    document.getElementById("question").innerHTML =
        cards[currentCard].question;

    // Clear options
    document.getElementById("options").innerHTML = "";

    // Clear result
    document.getElementById("result").innerHTML = "";

    // Update progress text
    document.getElementById("progressText").innerHTML =
        "Card " + (currentCard + 1) + " of 5";

    // Update progress bar
    document.getElementById("progressBar").style.width =
        ((currentCard + 1) * 20) + "%";
}


// Digital Clock
function digitalClock() {

    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours == 0) {
        hours = 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds + " " + ampm;
}


// Run clock every second
setInterval(digitalClock, 1000);

digitalClock();
```
