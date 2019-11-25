
import {filteredCharacters, subFilteredCharacters, filterBy, subFilterBy} from '/data.js';

function NoneBlock(fromId) {
  let idArray = ["Start", "Characters", "sortingHat", "Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  console.log(fromId)
  for (let id in idArray) {
    //console.log("ID in array = " + idArray[id])
    if (idArray[id] == fromId) {
      document.getElementById(fromId).style.display = "block";
    }
    else {
      document.getElementById(idArray[id]).style.display = "none";
    }
  }
}
let startItem = document.getElementsByClassName("startItem");
startItem[0].addEventListener("click", function() {NoneBlock("Start")});
let charactersItem = document.getElementsByClassName("charactersItem");
charactersItem[0].addEventListener("click", function() {NoneBlock("Characters")});
let sortingHatItem = document.getElementsByClassName("sortingHatItem");
sortingHatItem[0].addEventListener("click", function() {NoneBlock("sortingHat")});

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

gryffindorBtn.addEventListener("click",() => {filterBy("house","Gryffindor");
                                console.log(filteredCharacters);});
slytherinBtn.addEventListener("click",() =>{filterBy("house","Slytherin");});
hufflepuffBtn.addEventListener("click",() =>{filterBy("house","Hufflepuff");});
ravenclawBtn.addEventListener("click",() =>{filterBy("house","Ravenclaw");});

document.addEventListener("click", () =>
  {subFilterBy("patronus", "stag","species","human");
  console.log(subFilteredCharacters);});

/* .then(patronus => {
      console.log(patronus);
    })
    .catch(error => {
        console.error("Error al filtrar patronus");
        console.log(error);
    });*/


/*document.addEventListener("click", async () => {
  let subFiltered = await filterBy("House", "Gryffindor")
  subFilterBy(subFiltered,"species", "human")
  .then(patronus => {
      console.log(patronus);
    })
    .catch(error => {
        console.error("Error al filtrar patronus");
        console.log(error);
    });
});*/
