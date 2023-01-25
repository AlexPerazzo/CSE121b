function getGrades(inputSelector) {
    // get grades from the input box
    // split them into an array (String.split(','))
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    // return grades
    let grades = document.querySelector(inputSelector).value
    let listOfGrades = grades.split(",")
    const cleanGrades = listOfGrades.map((grade) => grade.toUpperCase().trim())

    return cleanGrades
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    switch(grade) {
        case grade == "A":
            points = 4;
        
        case grade == "B":
            points = 3;
        
        case grade == "C":
            points = 2;
        
        case grade == "D":
            points = 1;

        default:
            points = 0;
    }
}
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    const grades = getGrades("#grades")
    // calculate the gpa from the grades entered
    // display the gpa
    console.log(grades)
  }

  document.querySelector("#submitButton").addEventListener("click", clickHandler)