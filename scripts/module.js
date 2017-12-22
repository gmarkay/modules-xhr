'use strict';
let animal = require("./animal");

function showCarnivores(carnivores) {

  carnivores.forEach((carnivore)=> {
    let carnDiv = document.getElementById('carnivores');
    carnDiv.innerHTML += carnivore + '<br>';


  });
}

function showHerbivores(herbivores) {

  herbivores.forEach((herbivore)=> {
    let herbDiv = document.getElementById('herbivores');
    herbDiv.innerHTML += herbivore + '<br>';

  });
}

animal.loadCarnivores(showCarnivores);

animal.loadHerbivores(showHerbivores);
