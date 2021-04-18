const answerArray = ["I don't know", "probably No", "what you do mean?", "It will work"];
const message = document.querySelector('.message');

const question = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click", function() {
    let res = Math.floor(Math.random() * answerArray.length);
    message.innerHTML = question.value + " " + answerArray[res];
    question.value = "";
});