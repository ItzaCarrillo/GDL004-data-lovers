import POTTER from './data/potter/potter.js';

export { potterTemplate };
const potterData = POTTER;
let filteredCharacters;
let subFilteredCharacters;
// Filtrar personajes por casas
export const filterBy = (POTTER) => {
  const potterData = POTTER.filter((houseCharacters) => {
  return houseCharacers.house === 'Gryffindor';
  });
console.log(potterData)
  return potterData;
};
//Template tarjetas personajes
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
}