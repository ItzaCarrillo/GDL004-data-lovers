import potterData from './data/potter/potter.js';

import { 
 filterBy, potterTemplate, patronusFilter, wandFilter, roleFilter,
} from '/data.js';

export { potterData };

let fPotter = [];

// Navegacion main menu
function NoneBlock(fromId) {
  const idArray = ['Start', 'Characters', 'sortingHat', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  for (const id in idArray) {
    if (idArray[id] == fromId) {
      document.getElementById(fromId).style.display = 'block';
    } else {
      document.getElementById(idArray[id]).style.display = 'none';
    }
  }
}

const startItem = document.getElementsByClassName('startItem');
startItem[0].addEventListener('click', () => {NoneBlock("Start")});
const charactersItem = document.getElementsByClassName('charactersItem');
charactersItem[0].addEventListener('click', () => {NoneBlock("Characters")});
const sortingHatItem = document.getElementsByClassName('sortingHatItem');
sortingHatItem[0].addEventListener('click', () => {NoneBlock("sortingHat")});
const gryffindorItem = document.getElementsByClassName('gryffindorItem');
gryffindorItem[0].addEventListener('click', () => {NoneBlock("Gryffindor")});
const slytherinItem = document.getElementsByClassName('slytherinItem');
slytherinItem[0].addEventListener('click', () => {NoneBlock("Slytherin")});
const hufflepuffItem = document.getElementsByClassName('hufflepuffItem');
hufflepuffItem[0].addEventListener('click', () => {NoneBlock("Hufflepuff")});
const ravenclawItem = document.getElementsByClassName('ravenclawItem');
ravenclawItem[0].addEventListener('click', () => {NoneBlock("Ravenclaw")});

// Botones sorting hat
const sortingHatBtn = document.getElementById('sortingHatBtn');
sortingHatBtn.addEventListener('click', () => {NoneBlock("sortingHat")});
const gryffindorBtn = document.getElementById('gryffindorBtn');
gryffindorBtn.addEventListener('click', () => {NoneBlock("Gryffindor")});
const slytherinBtn = document.getElementById('slytherinBtn');
slytherinBtn.addEventListener('click', () => {NoneBlock("Slytherin")});
const hufflepuffBtn = document.getElementById('hufflepuffBtn');
hufflepuffBtn.addEventListener('click', () => {NoneBlock("Hufflepuff")});
const ravenclawBtn = document.getElementById('ravenclawBtn');
ravenclawBtn.addEventListener('click', () => {NoneBlock("Ravenclaw")});

// Tarjetas personajes
document.getElementById('potterCards').innerHTML = `
${potterData.map(potterTemplate).join('')}`;

// Filtros personajes por casa
gryffindorBtn.addEventListener('click', () => {
  fPotter = filterBy('house', 'Gryffindor');
  document.getElementById('infoToFilterGryffindor').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
slytherinBtn.addEventListener('click', () => {
  fPotter = filterBy('house', 'Slytherin');
  document.getElementById('infoToFilterSlytherin').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
hufflepuffBtn.addEventListener('click', () => {
  fPotter = filterBy('house', 'Hufflepuff');
  document.getElementById('infoToFilterHufflepuff').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
ravenclawBtn.addEventListener('click', () => {
  fPotter = filterBy('house', 'Ravenclaw');
  document.getElementById('infoToFilterRavenclaw').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
gryffindorPage.addEventListener('click', () => {
  fPotter = filterBy('house', 'Gryffindor');
  document.getElementById('infoToFilterGryffindor').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
slytherinPage.addEventListener('click', () => {
  fPotter = filterBy('house', 'Slytherin');
  document.getElementById('infoToFilterSlytherin').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
hufflepuffPage.addEventListener('click', () => {
  fPotter = filterBy('house', 'Hufflepuff');
  document.getElementById('infoToFilterHufflepuff').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
ravenclawPage.addEventListener('click', () => {
  fPotter = filterBy('house', 'Ravenclaw');
  document.getElementById('infoToFilterRavenclaw').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});

// Menú de búsqueda characters
document.getElementById('patronus').addEventListener('change', selectPatronus);
function selectPatronus(e) {
  const pcharacter = document.getElementById('patronus');
  const patronus = pcharacter.options[pcharacter.selectedIndex].text.toLowerCase();
  const filterPatronus = patronusFilter(potterData, patronus) 
  document.getElementById('potterCards').innerHTML = `${filterPatronus.map(potterTemplate).join('')}`;
};

document.getElementById('charactersWand').addEventListener('change', selectWand);
function selectWand(e) {
  const wcharacter = document.getElementById('charactersWand');
  const wandCore = wcharacter.options[wcharacter.selectedIndex].text.toLowerCase();
  const filterWand = wandFilter(potterData, wandCore) 
  document.getElementById('potterCards').innerHTML = `${filterWand.map(potterTemplate).join('')}`;
};

document.getElementById('charactersRole').addEventListener('change', selectRole);
function selectRole(e) {
  const rcharacter = document.getElementById('charactersRole');
  const role = rcharacter.options[rcharacter.selectedIndex].text.toLowerCase();
  const filterRole = roleFilter(potterData, role) 
  document.getElementById('potterCards').innerHTML = `${filterRole.map(potterTemplate).join('')}`;
};

document.getElementById('nameSearch').addEventListener('change', selectName);
function selectName(e) {
  const ncharacter = document.getElementById('nameSearch');
  const role = ncharacter.options[ncharacter.selectedIndex];
  const filterName = nameFilter(potterData, role) 
  document.getElementById('potterCards').innerHTML = `${filterName.map(potterTemplate).join('')}`;
};

// Menú de búsqueda Gryffindor
document.getElementById('patronusG').addEventListener('change', selectPatronusG);
function selectPatronusG(e) {
  const pcharacter = document.getElementById('patronusG');
  const patronus = pcharacter.options[pcharacter.selectedIndex].text.toLowerCase();
  const filterPatronus = patronusFilter(potterData, patronus) 
  document.getElementById('potterCards').innerHTML = `${filterPatronus.map(potterTemplate).join('')}`;
};

document.getElementById('charactersWand').addEventListener('change', selectWandG);
function selectWandG(e) {
  const wcharacter = document.getElementById('charactersWand');
  const wandCore = wcharacter.options[wcharacter.selectedIndex].text.toLowerCase();
  const filterWand = wandFilter(potterData, wandCore) 
  document.getElementById('potterCards').innerHTML = `${filterWand.map(potterTemplate).join('')}`;
};

document.getElementById('charactersRole').addEventListener('change', selectRoleG);
function selectRoleG(e) {
  const rcharacter = document.getElementById('charactersRole');
  const role = rcharacter.options[rcharacter.selectedIndex].text.toLowerCase();
  const filterRole = roleFilter(potterData, role) 
  document.getElementById('potterCards').innerHTML = `${filterRole.map(potterTemplate).join('')}`;
};

document.getElementById('nameSearch').addEventListener('change', selectNameG);
function selectNameG(e) {
  const ncharacter = document.getElementById('nameSearch');
  const role = ncharacter.options[ncharacter.selectedIndex];
  const filterName = nameFilter(potterData, role) 
  document.getElementById('potterCards').innerHTML = `${filterName.map(potterTemplate).join('')}`;
};
