var topScoreList = document.querySelectorAll(".topScore");
var botScoreList = document.querySelectorAll(".botScore");

function addTopScores() {


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
  document.querySelector("#upper-total2").textContent = total + bonus;
  
  addGrandTotal();
}

function addBotScores() {
  let sum = parseInt(document.querySelector("#threeofakind").value);
  let sum2 = parseInt(document.querySelector("#fourofakind").value);
  let sum3 = parseInt(document.querySelector("#full-house").value);
  let sum4 = parseInt(document.querySelector("#sm-straight").value);
  let sum5 = parseInt(document.querySelector("#lg-straight").value);
  let sum6 = parseInt(document.querySelector("#yahtzee").value);
  let sum7 = parseInt(document.querySelector("#chance").value);

  total = sum + sum2 + sum3 + sum4 + sum5 + sum6 + sum7;

  document.querySelector("#bottom-total").textContent = total;
  addGrandTotal();
}

function addGrandTotal() {
  let total1 = parseInt(document.querySelector("#bottom-total").textContent);
  let total2 = parseInt(document.querySelector("#upper-total2").textContent);
  grand = total1 + total2;
  document.querySelector("#grand-total").textContent = grand;
}

for (var i = 0; i < topScoreList.length; i++) {
  topScoreList[i].addEventListener("change", addTopScores);
}

for (var i = 0; i < botScoreList.length; i++) {
  botScoreList[i].addEventListener("change", addBotScores);
}