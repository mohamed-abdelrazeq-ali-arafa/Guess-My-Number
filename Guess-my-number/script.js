let generatedNumber = Math.floor(Math.random() * (20 - 1) + 1);

let score = 20;
let highscore = 0;

function changeState(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".btncheck").addEventListener("click", function () {
  const guessed = Number(document.querySelector(".guess").value);
  console.log(guessed, typeof guessed);

  let res = document.querySelector(".label-score");

  let difference = Math.abs(generatedNumber - guessed);

  if (guessed === 0) changeState("⛔️ No number");
  if (guessed < 1 || guessed > 20) {
    changeState("Number must be  Between 1 20");
    score--;
    res.textContent = score;
  } else if (difference > 4) {
    changeState("Too far");

    score--;
    res.textContent = score;
  } else if (difference === 2 || difference === 1) {
    changeState("Very close");
    score--;
    res.textContent = score;
  } else if (generatedNumber === guessed) {
    changeState("Congrats you win");
    document.querySelector(".number").textContent = generatedNumber;
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    score--;
    res.textContent = score;
  }
  if (score === 0) {
    changeState("You Lost");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  generatedNumber = Math.floor(Math.random() * (20 - 1) + 1);
  document.querySelector("body").style.backgroundColor =
    "rgba(20, 18, 18, 0.99)";
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".label-score").textContent = score;
  changeState("Guess My Number ");
  document.querySelector(".guess").value = "";
});
