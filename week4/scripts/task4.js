/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo.name = "Alexander Perazzo";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = "..\\week2\\images\\profile_picture.jpg";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ["Ice Cream", "Pizza", "Cereal"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ["Board Games", "Video Games", "Reading"];

// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = [];

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo.placesLived.push({ place: "", length: "" });

// Step 8: For each property, add appropriate values as strings
myInfo.placesLived[0].place = "Fallon, Nevada";
myInfo.placesLived[0].length = "First 19 years";

// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.placesLived.push({ place: "", length: "" });
myInfo.placesLived[1].place = "Utah Salt Lake City Mission";
myInfo.placesLived[1].length = "2 years";

myInfo.placesLived.push({ place: "", length: "" });
myInfo.placesLived[2].place = "Rexburg, Idaho";
myInfo.placesLived[2].length = "1 years";

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").src = myInfo.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").alt = myInfo.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
myInfo.favoriteFoods.forEach((food) => {
  let element = document.createElement("li");
  element.textContent = food;
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(element);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
myInfo.hobbies.forEach((hobby) => {
  let element = document.createElement("li");
  element.textContent = hobby;

  // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
  document.querySelector("#hobbies").appendChild(element);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
myInfo.placesLived.forEach((placeLived) => {
  let location = document.createElement("dt");
  location.textContent = placeLived.place;

// - Create an HTML <dd> element and put its length property in the <dd> element
  let length = document.createElement("dd");
  length.textContent = placeLived.length;


// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

document.querySelector("#places-lived").appendChild(location);
document.querySelector("#places-lived").appendChild(length);

});