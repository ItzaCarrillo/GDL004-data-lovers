/* import { potterNames, potterHouse, potterBirthday, potterPatronus, potterWand, potterBlood } from './data.js';
export { potterData }; */

const URL_POTTER = 'https://raw.githubusercontent.com/Laboratoria/GDL004-data-lovers/master/src/data/potter/potter.json';
let potterData;

fetch(URL_POTTER)
  .then(response => response.json())
  .then(response => { // en esta promesa estamos llamando al json y mostrandolo en consola
    potterData = response;
    console.log(potterData);
    return potterData;
  });

function potterTemplate(potter){
    return `
    <div class='potterCards'></div>
        <h1>${potterData.name}</h1>
        <img class='harryPhotos' src='${'dataPotter.image'}>
        <p>House: ${potterData.house}</p>
        <p>Blood status: ${potterData.ancestry}</p>
        <p>Birthday: ${potterData.dateOfBirth}</p>
        <p>Patronus: ${potterData.patronus}</p>
        <p>Wand: ${potterData.wand.core}</p>
    `
}

// Show character cards
document.getElementById('potterCards').innerHTML = `
${potterData.map(potterTemplate).join('')}`

/*`<h1>${potterNames()} </h1> 

<p>House:${potterHouse()}</p>
<p>Birthday:${potterBirthday()}</p>
<p>Blood status:${potterBlood()}</p>
<p>Wand:${potterWand()}</p>
<p>Patronus:${potterPatronus()}</p>
`*/