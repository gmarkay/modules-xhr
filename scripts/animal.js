
'use strict';

let carnivores = [];
let herbivores = [];


const loadCarnivores = function(callback) {
  const loader = new XMLHttpRequest();

  loader.addEventListener("load", function() {
    carnivores = JSON.parse(this.responseText);
    carnivores = carnivores.carnivores;
    callback(carnivores);
 });

 loader.open("GET","data/carnivores.json");
 loader.send(); 

};

const loadHerbivores = function(callback) {
  
  const loader = new XMLHttpRequest();


  loader.addEventListener("load", function() {
    // Set the value of the private array
    
    herbivores = JSON.parse(this.responseText);
    herbivores = herbivores.herbivores;
    callback(herbivores);

   });
   loader.open("GET","data/herbivores.json");
   loader.send(); 
};

module.exports = { loadCarnivores, loadHerbivores };