import POTTER from './data/potter/potter.js';

export { potterTemplate };

function potterTemplate(cards) {
  return `
  <div class='characterBox'></div>
      <h1>${cards.name}</h1>
      <img class='harryPhotos' src=${dataPotter.image}>
      <p><strong>House:</strong>${cards.house} </p>
      <p><strong> Blood status: </strong> ${cards.ancestry}</p>
      <p><strong> Birthday:</strong> ${cards.dateOfBirth}</p>
      <p><strong> Patronus:</strong> ${cards.patronus}</p>
      <p><strong> Wand:</strong> ${cards.wand}</p>`;
}


/* <strong> Blood status: </strong> ${cards.ancestry}
<strong> Birthday:</strong> ${cards.dateOfBirth}
<strong> Patronus:</strong> ${cards.patronus}
<strong> Wand:</strong> ${cards.wand}</p> */
