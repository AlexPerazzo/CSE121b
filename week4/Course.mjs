const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],

  init: function () {
    setCourseInfo(this);
    renderSections(this.sections);
  },

  enrollStudent: function (sectionNum) {
    const currentSection = this.sections.find((item) => {
      const found = sectionNum == item.sectionNum;
      return found;
    });
    currentSection.enrolled++;
    renderSections(aCourse.sections);
  },

  dropStudent: function (sectionNum) {
    const currentSection = this.sections.find((item) => {
      const found = sectionNum == item.sectionNum;
      return found;
    });
    currentSection.enrolled--;
    renderSections(aCourse.sections);
  },
};

function setCourseInfo(course) {
  // get the name and code out of the course object and set it in the HTML
  const nameElement = document.querySelector("#courseName");
  const codeElement = document.querySelector("#courseCode");
  nameElement.innerText = course.name;
  codeElement.innerText = course.code;
}

function renderSections(sections) {
  // for each section, convert the section object into an HTML string. . . insert into the DOM
  const sectionsElement = document.querySelector("#sections");
  const html = sections.map(sectionTemplate);
  sectionsElement.innerHTML = html.join("");
}

function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    </tr>`;
}

export default aCourse;
