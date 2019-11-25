const URL_POTTER = "https://raw.githubusercontent.com/Laboratoria/GDL004-data-lovers/master/src/data/potter/potter.json";
let potterData ;
let filteredCharacters;
let subFilteredCharacters;

async function filterBy(filterKey, filterValue) {
  await getPotterData();
  //  console.log(potterData);
  //console.log(filterKey + " and " + filterValue);
  filteredCharacters = potterData.filter(movieCharacter => (movieCharacter[filterKey] === filterValue));
  console.log(filteredCharacters)
  return "filteredDone";
};

async function subFilterBy(filter1Key, filter1Value, filter2Key, filter2Value) {
    let filterByResult = await filterBy(filter1Key, filter1Value);
    //console.log("el resultado de FilterBy es: " + filterByResult);
    //console.log(filteredCharacters);
    subFilteredCharacters = filteredCharacters.filter(movieCharacter => (movieCharacter[filter2Key] === filter2Value));
    console.log(subFilteredCharacters);
    return subFilteredCharacters;
};

async function getPotterData() {//leer nuestro JSON
      let response = await fetch(URL_POTTER); //espera await una respuesta de el fetch
      potterData = await response.json();
      return potterData;
  };

  export{filteredCharacters, subFilteredCharacters, filterBy, subFilterBy}
