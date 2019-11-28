import potterData from './data/potter/potter.js';

import {filteredCharacters, subFilteredCharacters, filterBy, subFilterBy, potterTemplate, charactersByRole } from '/data.js';

export { potterData };

let fPotter = [];
//console.log(potterData)

//Navegacion main menu
function NoneBlock(fromId) {
  let idArray = ["Start", "Characters", "sortingHat", "Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  //console.log(fromId)
  for (let id in idArray) {
    //console.log("ID in array = " + idArray[id])
      if (idArray[id] == fromId) {
        document.getElementById(fromId).style.display = "block";
      } else {
        document.getElementById(idArray[id]).style.display = "none";
      }
    }
  }
  //function ()
  let startItem = document.getElementsByClassName("startItem");
  startItem[0].addEventListener("click", function() {NoneBlock("Start")});
  let charactersItem = document.getElementsByClassName("charactersItem");
  charactersItem[0].addEventListener("click", function() {NoneBlock("Characters")});
  let sortingHatItem = document.getElementsByClassName("sortingHatItem");
  sortingHatItem[0].addEventListener("click", function() {NoneBlock("sortingHat")});
  let gryffindorItem = document.getElementsByClassName("gryffindorItem");
  gryffindorItem[0].addEventListener("click", function() {NoneBlock("Gryffindor")});
  let slytherinItem = document.getElementsByClassName("slytherinItem");
  slytherinItem[0].addEventListener("click", function() {NoneBlock("Slytherin")});
  let hufflepuffItem = document.getElementsByClassName("hufflepuffItem");
  hufflepuffItem[0].addEventListener("click", function() {NoneBlock("Hufflepuff")});
  let ravenclawItem = document.getElementsByClassName("ravenclawItem");
  ravenclawItem[0].addEventListener("click", function() {NoneBlock("Ravenclaw")});

  //Botones sorting hat
  let sortingHatBtn = document.getElementById("sortingHatBtn");
  sortingHatBtn.addEventListener("click", function() {NoneBlock("sortingHat")});
  let gryffindorBtn = document.getElementById("gryffindorBtn");
  gryffindorBtn.addEventListener("click", function() {NoneBlock("Gryffindor")});
  let slytherinBtn = document.getElementById("slytherinBtn");
  slytherinBtn.addEventListener("click", function() {NoneBlock("Slytherin")});
  let hufflepuffBtn = document.getElementById("hufflepuffBtn");
  hufflepuffBtn.addEventListener("click", function() {NoneBlock("Hufflepuff")});
  let ravenclawBtn = document.getElementById("ravenclawBtn");
  ravenclawBtn.addEventListener("click", function() {NoneBlock("Ravenclaw")});

//Tarjetas personajes
document.getElementById('potterCards').innerHTML = `
${potterData.map(potterTemplate).join('')}`;

// Filtros personajes por casa
gryffindorBtn.addEventListener("click",() => {
  fPotter = filterBy("house","Gryffindor");
  //fPotter = subFilterBy("house","Gryffindor","gender","male")
  document.getElementById("infoToFilterGryffindor").innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
slytherinBtn.addEventListener("click",() => {
  fPotter = filterBy("house","Slytherin");
  //fPotter = subFilterBy("house","Gryffindor","patronus","stag")
  document.getElementById("infoToFilterSlytherin").innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
hufflepuffBtn.addEventListener("click",() => {
  fPotter = filterBy("house","Hufflepuff");
  //fPotter = subFilterBy("house","Gryffindor","patronus","stag")
  document.getElementById("infoToFilterHufflepuff").innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
ravenclawBtn.addEventListener("click",() => {
  fPotter = filterBy("house","Ravenclaw");
  //fPotter = subFilterBy("house","Gryffindor","patronus","stag")
  document.getElementById("infoToFilterRavenclaw").innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});

// Menú de búsqueda personajes
document.getElementById('nameList').innerHTML = JSON.stringify(potterData.name);
//document.getElementById('patronusList').innerHTML = potterData.name;


document.getElementById("charactersRole").addEventListener("change", charactersByRole)