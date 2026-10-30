let currentQuestion = 1;
function checkAnswer(answer) {
    let result = document.getElementById("result");
    if (currentQuestion === 1 && answer === "red") {
        result.textContent = "Correct Answer!";
        result.style.color = "green";
    } 
    else if (currentQuestion === 2 && answer === "blue") {
        result.textContent = "Correct Answer!";
        result.style.color = "green";
    } 
    else if (currentQuestion === 3 && answer === "4") {
        result.textContent = "Correct Answer!";
        result.style.color = "green";
    } 
   
}
function nextQuestion() {
    let question = document.getElementById("question");
    let buttons = document.getElementsByClassName("option");
    let result = document.getElementById("result");
    currentQuestion++;
    if (currentQuestion === 2) {
        question.textContent = "What is the colour of the sky?";

        buttons[0].textContent = "Red";
        buttons[0].setAttribute("onclick", "checkAnswer('red')");

        buttons[1].textContent = "Blue";
        buttons[1].setAttribute("onclick", "checkAnswer('blue')");

        buttons[2].textContent = "Green";
        buttons[2].setAttribute("onclick", "checkAnswer('green')");

        buttons[3].textContent = "Yellow";
        buttons[3].setAttribute("onclick", "checkAnswer('yellow')");
    }
    else if (currentQuestion === 3) {
        question.textContent = "What is 2 + 2?";

        buttons[0].textContent = "3";
        buttons[0].setAttribute("onclick", "checkAnswer('3')");

        buttons[1].textContent = "4";
        buttons[1].setAttribute("onclick", "checkAnswer('4')");

        buttons[2].textContent = "5";
        buttons[2].setAttribute("onclick", "checkAnswer('5')");

        buttons[3].textContent = "6";
        buttons[3].setAttribute("onclick", "checkAnswer('6')");
    }
    result.textContent = "";
}
