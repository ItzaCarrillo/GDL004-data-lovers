const URL_POTTER = "https://raw.githubusercontent.com/Laboratoria/GDL004-data-lovers/master/src/data/potter/potter.json";
let potterData;
let filteredCharacters;
let subFilteredCharacters;
/*async function getPotterData() {//leer nuestro JSON
      let response = await fetch(URL_POTTER); //espera await una respuesta de el fetch
      potterData = await response.json();
      return potterData;
  };*/
export{filteredCharacters, subFilteredCharacters, subFilterBy}

fetch(URL_POTTER)
  .then (response => response.json())
  .then (response => { //en esta promesa estamos llamando al json y mostrandolo en consola
    potterData  = response;
    console.log(potterData);
    return potterData
  }).then (response =>{
   });

   function filterBy(filterKey, filterValue) {
    //getPotterData();
     //console.log(potterData);
     //console.log(filterKey + " and " + filterValue);
     filteredCharacters = potterData.filter(movieCharacter => (movieCharacter[filterKey] === filterValue));
     console.log(filteredCharacters)
     return "filteredDone";
   };

  /*  getPotterData();
    filteredCharacters = potterData.filter(movieCharacter => (movieCharacter[filterKey] === filterValue));
    console.log(filteredCharacters)
    return "filteredDone";
});*/

//function filterBy(filterKey, filterValue) {
  // getPotterData();
  //  console.log(potterData);
  //console.log(filterKey + " and " + filterValue);
  /*filteredCharacters = potterData.filter(movieCharacter => (movieCharacter[filterKey] === filterValue));
  console.log(filteredCharacters)
  return "filteredDone";
};*/

function subFilterBy(filter1Key, filter1Value, filter2Key, filter2Value) {
    let filterByResult = filterBy(filter1Key, filter1Value);
    console.log(filterByResult);
    //console.log("el resultado de FilterBy es: " + filterByResult);
    //console.log(filteredCharacters);
    subFilteredCharacters = filteredCharacters.filter(movieCharacter => (movieCharacter[filter2Key] === filter2Value));
    console.log(subFilteredCharacters);
    return subFilteredCharacters;
};
