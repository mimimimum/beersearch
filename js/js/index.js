import { getBeers } from './api.js'

getBeers()
  .then(response => response.json())
  .catch(e => console.error('Something went wrong', e))
  .then(function(response) {
    document.getElementById("num").innerHTML += response.length;
    var result = "";
    result
    for (var i = 0; i < response.length; i++) {
      result += "<td><p>" + response[i].name +"<br>"+ '<img src="' + response[i].image_url + '" width="80" height="150">' +"<br>" + response[i].tagline +response[i].ingredients.yeast+ "</p></td>";
    }
    document.getElementById("beers").innerHTML = result;
  })

  