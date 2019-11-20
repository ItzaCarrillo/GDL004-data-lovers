/* Manejo de data */

// esta es una función de ejemplo
var potterJSON;

function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './data/potter/potter.json', false); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  
  xobj.send(null);
}

function init() {
    loadJSON(function (response) {
    // Parse JSON string into object
    potterJSON = JSON.parse(response);
  });
}

window.filterByHouse = function filterByHouse() {
  init();
  console.log(potterJSON);
  var house = potterJSON.filter(personaje => (personaje.house === "Gryffindor"));
  console.log()
  return "house";
}
