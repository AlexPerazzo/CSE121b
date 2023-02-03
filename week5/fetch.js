// fetch.js
function main() {
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  const urlList = "https://pokeapi.co/api/v2/pokemon";
  let results = null;

  getPokemon(url, doStuff);
  console.log("second: ", results);

  getPokemon(urlList, doStuffList);
}

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}

// async function getPokemonList(url) {
//   let response = await fetch(url);
//   if (response.ok) {
//     let data = await response.json();
//     doStuffList(data);
//   }
// }
function sortPokemon(list) {
  return list.sort();
}

function doStuff(data) {
  results = data;
  console.log("first: ", results);

  pokemonName = data.name;
  img = data.sprites.other.home.front_default;
  html = template(pokemonName, img);
  document.querySelector("#output").innerHTML = html;
}

function template(pokname, img) {
  html = `<h2>${pokname}</h2> <img src="${img}" alt = "Image of ${pokname}">`;
  return html;
}

function doStuffList(data) {
  console.log(data);
  outputList = document.querySelector("#outputList");
  pokeList = data.results;
  actuallyAList = [];
  pokeList.forEach((thing) => {
    actuallyAList.push(thing.name);
  });
  sortedpokeList = actuallyAList.sort();
  sortedpokeList.forEach((thing) => {
    const html = `<li>${thing}</li>`;
    outputList.innerHTML += html;
  });
}

main();
// const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
// async function getPokemon(url) {
//     const results = await fetch(url);
//     const data = await results.json();
//     doStuff(results);
// }

// function doStuff(data) {
//     console.log(data);
// }

// getPokemon(url);
