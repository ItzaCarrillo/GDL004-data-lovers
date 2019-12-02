import potterData from './data/potter/potter.js';

export {
  filterBy, potterTemplate, patronusFilter, wandFilter, roleFilter,
};

let filteredCharacters = [];
let subFilteredCharacters = [];

// Filtro personajes
function filterBy(filterKey, filterValue) {
  filteredCharacters = potterData.filter((movieCharacter) => (movieCharacter[filterKey] === filterValue));
  return filteredCharacters;
};

//Filtro personajes + casa
function subFilterBy(filter1Key, filter1Value, filter2Key, filter2Value) {
  const filterByResult = filterBy(filter1Key, filter1Value);
  // console.log("el resultado de FilterBy es: " + filterByResult);
  // console.log(filteredCharacters);
  subFilteredCharacters = filteredCharacters.filter((movieCharacter) => (movieCharacter[filter2Key] === filter2Value));
  // console.log(subFilteredCharacters);
  return subFilteredCharacters;
};

//Template tarjetas personaje
function potterTemplate(cards) {
  return `
  <div class='characterBox'>
      <h1>${cards.name}</h1>
      <img class='harryPhotos' src=${cards.image}>
      <p><strong>House:</strong>${cards.house} </p>
      <p><strong> Blood status: </strong> ${cards.ancestry}</p>
      <p><strong> Birthday:</strong> ${cards.dateOfBirth}</p>
      <p><strong> Patronus:</strong> ${cards.patronus}</p>
      <p><strong> Wand:</strong> ${cards.wand.core}</p>
  </div>`;
};


// Filtro patronus
function patronusFilter(data, input) {
  console.log(input)
  return data.filter((persona) => {
    if (persona.patronus === input){
      return persona;
    };
  });
};

function wandFilter(data, input) {
  console.log(input)
  return data.filter((persona) => {
    if (persona.wand.core === input){
      return persona;
    };
  });
};

function roleFilter(data, input) {
  console.log(input)
  return data.filter((persona) => {
    if (input === "hogwarts student" === persona.hogwartsStudent === true){
      return persona;
    } else if (input === "hogwarts professor" === persona.hogwartsStaff === true){
      return persona;
    } 
  });
};

function nameFilter(data, input) {
  console.log(input)
  return data.filter((persona) => {
    if (persona.name === input){
      return persona;
    };
  });
};