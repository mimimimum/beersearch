import { getBeers } from './api.js'

getBeers()
  .then(response => response.json())
  .catch(e => console.error('Something went wrong', e))
  .then(function(response) {
    document.getElementById("num").innerHTML += response.length;
    var result = "";
    result
    for (var i = 0; i < 25; i++) {
		result += "<div class='col-lg-12'><b>NAME : </b>" + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="160" height="300">' + "<br><b>TAGLINE : </b>" + response[i].tagline + "<br><b>FIRST BREWED : </b>"+ response[i].first_brewed + "<br><b>pH : </b>"+ response[i].ph + "<br><b>YEAST : </b>"+ response[i].ingredients.yeast + "<br><b>DESCRIPTION : </b>"+ response[i].description + "<hr></div>";
    }
    document.getElementById("beers").innerHTML = result;
  })
  