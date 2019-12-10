import {potterData} from './main.js';
let simpleFilteredCharacters;
let filteredCharacters = [];
let subFilteredCharacters = [];
let filteredKeys = [];
//export { }

//console.log(potterData)
function simpleFilterBy(filterKey) {
  var uniq = {}; // contains all the unique names
  for(var i=0; i<potterData.length; i++) {
    var el = potterData[i][filterKey];
    if(!uniq[el]) uniq[el] = []; // start the array
    uniq[el].push(potterData[i][filterKey]);
  }
  //console.log(uniq)
  //simpleFilteredCharacters = potterData.filter(movieCharacter => movieCharacter[filterKey]);
  //console.log(simpleFilteredCharacters)
  return uniq;
};
//Filtrar personajes por casas
 function filterBy(filterKey, filterValue) {
  //console.log(filterKey + " and " + filterValue);
  filteredCharacters = potterData.filter(movieCharacter => (movieCharacter[filterKey] === filterValue));
  //console.log(filteredCharacters)
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
  //console.log(cards)
  return `
  <div class='characterBox'></div>
      <h1>${cards.name}</h1>
      <img class='harryPhotos' src=${cards.image}>
      <p><strong>House:</strong>${cards.house} </p>
      <p><strong> Blood status: </strong> ${cards.ancestry}</p>
      <p><strong> Birthday:</strong> ${cards.dateOfBirth}</p>
      <p><strong> Patronus:</strong> ${cards.patronus}</p>
      <p><strong> Wand:</strong> ${cards.wand.core}</p>`;
}

export { filteredCharacters, subFilteredCharacters, filterBy, subFilterBy, potterTemplate, simpleFilterBy };
