const coinArray = ["heads", "Tails"];
let score = [0, 0]

const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", tosscoin)

}

function tosscoin(e) {
    let playerguess = e.target.innerText;
    let computertoss = Math.floor(Math.random() * 2);;
    let computerguess = coinArray[computertoss];
    message.innerHTML = "Computer Selected" + computerguess;
    let output;
    if (playerguess === computerguess) {
        output = " Player win";
        score[0]++;

    } else {
        output = " Computer win";
        score[0]++;

    }

    message.innerHTML += output + "<br /> Player :" + score[0] + " " + "Computer : " + score[1];
}