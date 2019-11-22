  /* Manejo de data */
// esta es una función de ejemplo
const URL_POTTER = "https://raw.githubusercontent.com/Laboratoria/GDL004-data-lovers/master/src/data/potter/potter.json";
let potterData;

window.filterBy = async function filterBy(fromElement, elementValue) {
  await getPotterData();
  console.log(potterData);
  console.log(fromElement);
  let filteredCharacters = potterData.filter(movieCharacter => (movieCharacter[fromElement] === elementValue));
  console.log(filteredCharacters)
  return filteredCharacters;
};

/*window.subFilterBy = function filterBy(filteredCharacters, fromElement, elementValue) {
  console.log(filteredCharacters);
  console.log(fromElement);
  var subFilteredCharacters = filteredCharacters.filter(movieCharacter => (movieCharacter[fromElement] === elementValue));
  console.log(subFilteredCharacters)
  return subFilteredCharacters;
};*/

window.getPotterData = async function getPotterData() {//leer nuestro JSON
      let response = await fetch(URL_POTTER); //espera await una respuesta de el fetch
      potterData = await response.json();
      return potterData;
  };

  export default "DataPotter";
