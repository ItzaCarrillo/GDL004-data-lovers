import {potterData} from './main.js';

export { filteredCharacters, subFilteredCharacters, filterBy, subFilterBy, potterTemplate, charactersByRole };

let filteredCharacters = [];
let subFilteredCharacters = [];

//Filtrar personajes por casas
function filterBy(filterKey, filterValue) {
  // console.log(filterKey + " and " + filterValue);
  filteredCharacters = potterData.filter(movieCharacter => (movieCharacter[filterKey] === filterValue));
  // console.log(filteredCharacters)
  return filteredCharacters;
};

function subFilterBy(filter1Key, filter1Value, filter2Key, filter2Value) {
    let filterByResult = filterBy(filter1Key, filter1Value);
    //console.log("el resultado de FilterBy es: " + filterByResult);
    //console.log(filteredCharacters);
    subFilteredCharacters = filteredCharacters.filter(movieCharacter => (movieCharacter[filter2Key] === filter2Value));
    //console.log(subFilteredCharacters);
    return subFilteredCharacters;
};

//Template tarjetas personaje
function potterTemplate(cards) {
  return `
  <div class='characterBox'></div>
      <h1>${cards.name}</h1>
      <img class='harryPhotos' src=${cards.image}>
      <p><strong>House:</strong>${cards.house} </p>
      <p><strong> Blood status: </strong> ${cards.ancestry}</p>
      <p><strong> Birthday:</strong> ${cards.dateOfBirth}</p>
      <p><strong> Patronus:</strong> ${cards.patronus}</p>
      <p><strong> Wand:</strong> ${cards.wand.core}</p>`;
};

function charactersByRole() {
  let selectedRole= document.getElementById("charactersWand").value;     
  document.getElementById("potterCards").innerHtml = "";
  switch (selectedRole) { 
    case "Hogwarts Student": 
    filterBy ("hogwartsStudent", "true");
    break;
    case "Hogwarts Staff":
    filterBy ("hogwartsStaff", "true");
    break;
    case "Other/Unknown":
  }
};
