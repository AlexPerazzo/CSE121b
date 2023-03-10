/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const currentDate = new Date();
// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = currentDate.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
let message;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
  // console.log("Hang in there!")
  message = "Hang in there!";
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
  // console.log("Woohoo! It is the weekend!")
  message = "Woohoo! It is the weekend!";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let anotherMessage;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
  case 0:
    anotherMessage = "Sunday";
    break;
  case 1:
    anotherMessage = "Monday";
    break;
  case 2:
    anotherMessage = "Tuesday";
    break;
  case 3:
    anotherMessage = "Wednesday";
    break;
  case 4:
    anotherMessage = "Thursday";
    break;
  case 5:
    anotherMessage = "Friday";
    break;
  case 6:
    anotherMessage = "Saturday";
    break;
  default:
    anotherMessage = "Error";
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
// message = "test";
document.querySelector("#message1").textContent = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").textContent = anotherMessage;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let listOfTemples = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(list) {
  list.forEach((item) => {
    // let article = "<article></article>";
    // let h3 = `<h3>${item.templeName}</h3>`;
    // let h4 = `<h4>${item.location}</h4>`;
    // let h4pt2 = `<h4>${item.dedicated}</h4>`;
    // let img = `<img src=${item.imgaeUrl} alt=${item.templeName}></img>`;
    // article.appendChild();

    let article = document.createElement("article");
    let templeName = document.createElement("h3");
    templeName.textContent = item.templeName;

    let location = document.createElement("h4");
    location.textContent = item.location;

    let dedicated = document.createElement("h4");
    dedicated.textContent = item.dedicated;

    let image = document.createElement("img");
    image.setAttribute("src", item.imageUrl);
    image.setAttribute("alt", item.templeName);

    article.appendChild(templeName);
    article.appendChild(location);
    article.appendChild(dedicated);
    article.appendChild(image);

    document.querySelector("#temples").appendChild(article);
  });
}

// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
  let url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";
  let response = await fetch(url);
  listOfTemples = await response.json();
  output(listOfTemples);
}
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.

// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.

// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

function reset() {
  document.querySelector("#temples").innerHTML = "";
}

// Step 8: Declare a function named sortBy that does the following:
function sortBy() {
  // - Calls the reset function
  reset();
  let filter = document.querySelector("#sortBy").value;

  if (filter == "templeNameAscending") {
    listOfTemples.sort((temple1, temple2) => {
      let name1 = temple1.templeName.toLowerCase();
      let name2 = temple2.templeName.toLowerCase();
      //   let num = name2 - name1
      //   return num
      if (name1 < name2) return -1;
      else if (name1 > name2) return 1;
      else return 0;
    });
  } else {
    listOfTemples.sort((temple1, temple2) => {
      let name1 = temple1.templeName.toLowerCase();
      let name2 = temple2.templeName.toLowerCase();
      //   let num = name1 - name2
      //   return num
      if (name1 > name2) return -1;
      else if (name1 < name2) return 1;
      else return 0;
    });
  }

  output(listOfTemples);
}

// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change", sortBy);
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
