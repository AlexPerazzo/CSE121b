const newP = document.createElement('p');
newP.innerText = "This is a new Paragraph";
document.body.append(newP);

const newImg = document.createElement('img');
newImg.src = "https://i.ytimg.com/vi/dYpf9FoPN_M/maxresdefault.jpg";
newImg.alt = "Pokemon Trainer";

document.body.append(newImg);

const newList = document.createElement('ol');

const one = "One -- fewy pewy"
const two = "Two -- cow pow"
const three = "Three -- ooga booga"


newList.innerHTML = `<li>${one}</li>
<li>${two}</li>
<li>${three}</li>`
document.body.append(newList)