/* import POTTER from './data/potter/potter.js'
 //import{houses} from './data.js
/*import POTTER from './data/potter/potter.json'*/
//console.log(POTTER)
import datajs from './data.js';

window.NoneBlock = function NoneBlock(fromId) {
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

document.addEventListener("click", () => {
  filterBy("house", "Gryffindor")
  .then(patronus => {
      console.log(patronus);
    })
    .catch(error => {
        console.error("Error al filtrar patronus");
        console.log(error);
    });
});

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
