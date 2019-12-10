import potterData from './data/potter/potter.js'

import {filteredCharacters, subFilteredCharacters, filterBy, subFilterBy, potterTemplate, simpleFilterBy} from '/data.js';

let fPotter = [];

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

function displayCards(houseToDisplay){
    NoneBlock(houseToDisplay);
    fPotter = filterBy("house", houseToDisplay);
    let elementIdString = "infoToFilter" + houseToDisplay;
    console.log(fPotter);
    document.getElementById(elementIdString).innerHTML = `
    ${fPotter.map(potterTemplate).join('')}`;
  };

  let startItem = document.getElementsByClassName("startItem");
  startItem[0].addEventListener("click", ()=>{
    NoneBlock("Start");
  });

  let charactersItem = document.getElementsByClassName("charactersItem");
  charactersItem[0].addEventListener("click",() =>{
    NoneBlock("Characters");
    document.getElementById('potterCards').innerHTML = `
    ${potterData.map(potterTemplate).join('')}`;
    loadHPKeys()
  });

  let sortingHatItem = document.getElementsByClassName("sortingHatItem");
    sortingHatItem[0].addEventListener("click",()=>{
    NoneBlock("sortingHat");
  });

  let gryffindorItem = document.getElementsByClassName("gryffindorItem");
  gryffindorItem[0].addEventListener("click", () => {
    displayCards("Gryffindor");
  });

  let slytherinItem = document.getElementsByClassName("slytherinItem");
  slytherinItem[0].addEventListener("click", () => {
    displayCards("Slytherin");
  });

  let hufflepuffItem = document.getElementsByClassName("hufflepuffItem");
  hufflepuffItem[0].addEventListener("click",() => {
    displayCards("Hufflepuff");
  });

  let ravenclawItem = document.getElementsByClassName("ravenclawItem");
  ravenclawItem[0].addEventListener("click",() => {
    displayCards("Ravenclaw");
  });

//Botones sorting hat muestran casa y filtra personajes  de casas
  let gryffindorBtn = document.getElementById("gryffindorBtn");
  gryffindorBtn.addEventListener("click",() => {
    displayCards("Gryffindor");
  });

  let slytherinBtn = document.getElementById("slytherinBtn");
  slytherinBtn.addEventListener("click",()=> {
    displayCards("Slytherin");
  });

  let hufflepuffBtn = document.getElementById("hufflepuffBtn");
  hufflepuffBtn.addEventListener("click",() =>{
    displayCards("Hufflepuff");
  });

  let ravenclawBtn = document.getElementById("ravenclawBtn");
  ravenclawBtn.addEventListener("click",() =>{
    displayCards("Ravenclaw");
  });

  let keysSelect = document.getElementById("keys");
  keysSelect.addEventListener("change", ()=>{
    loadHPvalues(keysSelect.value);
  });

  let valuesSelect = document.getElementById("values");
  valuesSelect.addEventListener("change", ()=>{
    fPotter = filterBy(keysSelect.value, valuesSelect.value);
    document.getElementById("potterCards").innerHTML = `
    ${fPotter.map(potterTemplate).join('')}`;
  });

  function loadHPKeys()
  {
      for(var keyValues in potterData[0])
      {
          document.getElementById("keys").innerHTML += "<option value='"+keyValues+"'>"+keyValues+"</option>";
  }
 }

 function loadHPvalues(HPkey)
 {
    document.getElementById("values").innerHTML = ""
     let valuesFromKeys = simpleFilterBy(HPkey);
     //console.log(valuesFromKeys)
     for(var values in valuesFromKeys)
     {
         document.getElementById("values").innerHTML += "<option value='"+values+"'>"+values+"</option>";
 }
}


export { potterData };
