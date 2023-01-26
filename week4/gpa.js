function getGrades(inputSelector) {
  // get grades from the input box
  // split them into an array (String.split(','))
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
  // return grades
  let grades = document.querySelector(inputSelector).value;
  let listOfGrades = grades.split(",");
  const cleanGrades = listOfGrades.map((grade) => grade.toUpperCase().trim());

  return cleanGrades;
}

function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
  switch (grade) {
    case "A":
      points = 4;
      break;
    case "B":
      points = 3;
      break;
    case "C":
      points = 2;
      break;
    case "D":
      points = 1;
      break;
    default:
      points = 0;
  }
  return points;
}

function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to gpa points
  let gradesAsGPA = grades.map((grade) => lookupGrade(grade));
  // calculates the GPA
  let total = gradesAsGPA.reduce((num, value) => num + value);
  // return the GPA
  let GPA = total / gradesAsGPA.length;
  return GPA.toFixed(2);
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  document.querySelector(selector).innerText = gpa;
}

function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
  const grades = getGrades("#grades");
  // calculate the gpa from the grades entered
  // display the gpa
  const gpa = calculateGpa(grades);
  outputGpa(gpa, "#output");
  // console.log(grades)
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);
