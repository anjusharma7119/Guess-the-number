// console.log(document.querySelector(".message").innerHTML);
// console.log((document.querySelector(".message").innerHTML = "hello world"));

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1); //randon number
let highscore = 0;

//function to display message
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

//click event to check whether number is right or wrong
document.querySelector(".check").addEventListener("click", function () {
  const value = document.querySelector(".guess").value;
  //   console.log(value);
  //   document.querySelector(".message").textContent = "Correct number";

  //if user enter no number
  if (!value) {
    // document.querySelector(".message").textContent = "No number";
    displayMessage("No Number");
  }

  //if number enter is equal to random number
  else if (value == secretNumber) {
    displayMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    // document.querySelector(".highscore").textContent = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //if number enter is greater than or less than random number
  else {
    if (score <= 0)
      //when score become zero
      displayMessage("You Lost the game");
    else {
      value > secretNumber //if enter value is less than or greater than random number
        ? displayMessage("Too high")
        : displayMessage("Too low");

      score--; //reducing the score after every wrong guess
      document.querySelector(".score").textContent = score;
    }
  }
});

//if user want to play again by pressing the again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1); //randon number
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".guess").value = " ";
});
