var scoreList = document.querySelectorAll(".topScore");

function addTopScores() {
  // let sum = scoreList.reduce((partialSum, a) => partialSum + a, 0)

  let sum = parseInt(document.querySelector("#aces").value);
  let sum2 = parseInt(document.querySelector("#twos").value);
  let sum3 = parseInt(document.querySelector("#threes").value);
  let sum4 = parseInt(document.querySelector("#fours").value);
  let sum5 = parseInt(document.querySelector("#fives").value);
  let sum6 = parseInt(document.querySelector("#sixes").value);
  total = sum + sum2 + sum3 + sum4 + sum5 + sum6;

  document.querySelector("#upper-score").textContent = total;

  if (total >= 63) {
    bonus = 35;
    document.querySelector("#bonus").textContent = bonus;
  } else {
    bonus = 0;
    document.querySelector("#bonus").textContent = bonus;
  }

  document.querySelector("#upper-total").textContent = total + bonus;
}

for (var i = 0; i < scoreList.length; i++) {
  scoreList[i].addEventListener("change", addTopScores);
}
