var topScoreList = document.querySelectorAll(".topScore");
var botScoreList = document.querySelectorAll(".botScore");
var allDice = document.querySelectorAll(".die-div");

function addTopScores() {
  let sum = parseInt(document.querySelector("#aces").value);
  if (isNaN(sum)) {
    sum = 0;
  }
  let sum2 = parseInt(document.querySelector("#twos").value);
  if (isNaN(sum2)) {
    sum2 = 0;
  }
  let sum3 = parseInt(document.querySelector("#threes").value);
  if (isNaN(sum3)) {
    sum3 = 0;
  }
  let sum4 = parseInt(document.querySelector("#fours").value);
  if (isNaN(sum4)) {
    sum4 = 0;
  }
  let sum5 = parseInt(document.querySelector("#fives").value);
  if (isNaN(sum5)) {
    sum5 = 0;
  }
  let sum6 = parseInt(document.querySelector("#sixes").value);
  if (isNaN(sum6)) {
    sum6 = 0;
  }
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
  if (isNaN(sum)) {
    sum = 0;
  }
  let sum2 = parseInt(document.querySelector("#fourofakind").value);
  if (isNaN(sum2)) {
    sum2 = 0;
  }
  let sum3 = parseInt(document.querySelector("#full-house").value);
  if (isNaN(sum3)) {
    sum3 = 0;
  }
  let sum4 = parseInt(document.querySelector("#sm-straight").value);
  if (isNaN(sum4)) {
    sum4 = 0;
  }
  let sum5 = parseInt(document.querySelector("#lg-straight").value);
  if (isNaN(sum5)) {
    sum5 = 0;
  }
  let sum6 = parseInt(document.querySelector("#yahtzee").value);
  if (isNaN(sum6)) {
    sum6 = 0;
  }
  let sum7 = parseInt(document.querySelector("#chance").value);
  if (isNaN(sum7)) {
    sum7 = 0;
  }

  total = sum + sum2 + sum3 + sum4 + sum5 + sum6 + sum7;

  document.querySelector("#bottom-total").textContent = total;
  addGrandTotal();
}

function addGrandTotal() {
  let total1 = parseInt(document.querySelector("#bottom-total").textContent);
  let total2 = parseInt(document.querySelector("#upper-total2").textContent);
  let total3 = parseInt(document.querySelector("#bonuses-score").textContent);
  grand = total1 + total2 + total3;
  document.querySelector("#grand-total").textContent = grand;
}

function bonusYahtzee() {
  let c1 = document.querySelector("#c1").checked;
  if (c1) {
    sum = 100;
  } else {
    sum = 0;
  }

  let c2 = document.querySelector("#c2").checked;
  if (c2) {
    sum2 = 100;
  } else {
    sum2 = 0;
  }

  let c3 = document.querySelector("#c3").checked;
  if (c3) {
    sum3 = 100;
  } else {
    sum3 = 0;
  }

  total = sum + sum2 + sum3;
  document.querySelector("#bonuses-score").textContent = total;
}

function generateDie() {
  let num = Math.ceil(Math.random() * 6);
  html = `<img src="${num}.png" alt="The ${num} Die" class="dice">`;
  return html;
}

function displayDice() {
  if (!document.querySelector("#first-die").classList.contains("saved")) {
    html = generateDie();
    document.querySelector("#first-die").innerHTML = html;
  }

  if (!document.querySelector("#second-die").classList.contains("saved")) {
    html = generateDie();
    document.querySelector("#second-die").innerHTML = html;
  }
  if (!document.querySelector("#third-die").classList.contains("saved")) {
    html = generateDie();
    document.querySelector("#third-die").innerHTML = html;
  }
  if (!document.querySelector("#fourth-die").classList.contains("saved")) {
    html = generateDie();
    document.querySelector("#fourth-die").innerHTML = html;
  }
  if (!document.querySelector("#fifth-die").classList.contains("saved")) {
    html = generateDie();
    document.querySelector("#fifth-die").innerHTML = html;
  }
}

function saveDie(thing, index) {
  thing[index].classList.toggle("saved");
}

function resetDice() {
  savedList = document.querySelectorAll(".saved");
  savedList.forEach((element) => {
    element.classList.remove("saved");
  });
  document.querySelector(
    "#first-die"
  ).innerHTML = `<img src="1.png" alt="The 1 Die" class="dice">`;
  document.querySelector(
    "#second-die"
  ).innerHTML = `<img src="1.png" alt="The 1 Die" class="dice">`;
  document.querySelector(
    "#third-die"
  ).innerHTML = `<img src="1.png" alt="The 1 Die" class="dice">`;
  document.querySelector(
    "#fourth-die"
  ).innerHTML = `<img src="1.png" alt="The 1 Die" class="dice">`;
  document.querySelector(
    "#fifth-die"
  ).innerHTML = `<img src="1.png" alt="The 1 Die" class="dice">`;
}

for (var i = 0; i < topScoreList.length; i++) {
  topScoreList[i].addEventListener("change", addTopScores);
}

for (var i = 0; i < botScoreList.length; i++) {
  botScoreList[i].addEventListener("change", addBotScores);
}

document.querySelector("#first-die").addEventListener("click", () => {
  saveDie(allDice, 0);
});
document.querySelector("#second-die").addEventListener("click", () => {
  saveDie(allDice, 1);
});
document.querySelector("#third-die").addEventListener("click", () => {
  saveDie(allDice, 2);
});
document.querySelector("#fourth-die").addEventListener("click", () => {
  saveDie(allDice, 3);
});
document.querySelector("#fifth-die").addEventListener("click", () => {
  saveDie(allDice, 4);
});

document.querySelector("#reset").addEventListener("click", () => {
  location.reload();
});

document.querySelector("#reset-dice").addEventListener("click", resetDice);

document.querySelector("#roll-dice").addEventListener("click", () => {
  displayDice();
  setTimeout(displayDice, 125);
  setTimeout(displayDice, 250);
  setTimeout(displayDice, 375);
  setTimeout(displayDice, 500);
});

document.querySelector("#c1").addEventListener("click", () => {
  bonusYahtzee();
  addGrandTotal();
});

document.querySelector("#c2").addEventListener("click", () => {
  bonusYahtzee();
  addGrandTotal();
});

document.querySelector("#c3").addEventListener("click", () => {
  bonusYahtzee();
  addGrandTotal();
});
