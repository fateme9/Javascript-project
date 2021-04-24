const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let gameplay = false;
let score = 0;
button.addEventListener("click", function() {
    if (!gameplay) {
        gameplay = true;
        gameArea.innerHTML = "";
        score = 0;
        button.innerHTML = "checked combo";
        message.innerHTML = "Guess combo";
        maker();

    } else {

        const numbers = document.querySelectorAll(".numb");
        score++;
        message.innerHTML = "Guesses" + score;
        let winCondition = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i].value == numbers[i].correct) {
                numbers[i].style.backgroundColor = "green";
                numbers[i].style.color = "white";
                winCondition++;

            } else {
                let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "black";
            }
            if (winCondition == numbers.length) {
                gameEnd();
            }
        }
    }
});

function gameEnd() {
    message.innerHTML = "You solved the combo in" + score + "Gusses";
    gameplay = false;
    button.innerHTML = "Restart Game";
}

function maker() {
    for (let x = 0; x < 6; x++) {

        let el = document.createElement("input");
        el.setAttribute("type", "number");
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.style.width = "50px";
        el.classList.add("numb");
        el.correct = Math.floor(Math.random() * 10);
        el.value = 0;
        el.order = x;
        //  console.log(el);
        gameArea.appendChild(el);

    }
}