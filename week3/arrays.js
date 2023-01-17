const myList = ["one", "two", "three"];



function listTemplate(item) {
    return `<li>${item}</li>`;
}

const htmlString = myList.map(listTemplate);
console.log(htmlString);

const listElement = document.querySelector('#myList');
listElement.innerHTML = htmlString.join("");


const grades = ["A", "B", "A"];

function convertToGPAPoints(grade) {
    let points = 0;
    switch(grade) {
        case "A":
            points = 4;
            break;
        case "B":
            points = 3;
            break;
        default:
            points = -1;
    }
    return points;
}

const pointsArray = grades.map(convertToGPAPoints);