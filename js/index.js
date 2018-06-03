

function getPokeInfo() {
  // Only acceptable characters in Pokemon names
  let regex = /^[A-Za-z0-9-]+$/ig;

  // Make names lowercase for API
  var x = document.getElementById("input").value.toLowerCase();
  var url = "https://pokeapi.co/api/v2/pokemon/" + x;
  
  if (regex.test(x)) {
    // GET request from PokeApi
    var poke = new XMLHttpRequest();
    
    poke.open("GET", url, true);
    poke.onload = function() {
      var data = JSON.parse(poke.response);
      
      // API Variables
      var name = document.getElementById("name");
      var sprite = document.getElementById("sprite");
      var height = document.getElementById("height");
      var weight = document.getElementById("weight");
      var type = document.getElementById("type");
      
      name.innerHTML = data.name.toUpperCase();
      sprite.innerHTML = "<img src='" + data.sprites.front_default + "'/>";
        if (data.types.length > 1) {
        type.innerHTML = "Types: " + data.types[0].type.name.toUpperCase() + ", " + data.types[1].type.name.toUpperCase();
      } else {
        type.innerHTML = "Type: " + data.types[0].type.name.toUpperCase();
      }
      height.innerHTML = "Height: " + (data.height / 10) + "m";
      weight.innerHTML = "Weight: " + (data.weight / 10) + "kg";
    }    
  } else {
    // Improvements: return the alert when the searched item is not available in the PokeApi, instead of returning the alert when regex fails.
    alert("Please enter a valid Pokemon name!");
  }
  poke.send();
}

document.getElementById("pokeball").addEventListener("click", getPokeInfo);