// // courses.js

import aCourse from "./Course.mjs";

// setCourseInfo(aCourse);
// renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", (e) => {
  // get the section number
  const sectionNum = document.querySelector("#sectionNumber").value;
  // send the section number to the enrollstudents function
  aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", (e) => {
  const sectionNum = document.querySelector("#sectionNumber").value;

  aCourse.dropStudent(sectionNum);
});

aCourse.init();
