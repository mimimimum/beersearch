
var getBeerAPI = function getBeerAPI(name) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var result = "";
        document.getElementById("num").innerHTML = response.length;
        for (var i = 0; i < response.length; i++) {
            
          result += "<td>" + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="80" height="150">' +"<br>" + response[i].tagline +  response[i].ingredients.yeast+"</td>";
          
        }
		document.getElementById("beers").innerHTML = result;
    });
  };

  var getYeast = function getYeast(name) {
    return fetch('https://api.punkapi.com/v2/beers/?yeast=' + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var result = "";
        document.getElementById("num").innerHTML = response.length;
        for (var i = 0; i < response.length; i++) {
          result += "<td><p>" + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="80" height="150">' +"<br>" + response[i].tagline + response[i].ingredients.yeast+"</p></td>";
          
        }
document.getElementById("beers").innerHTML = result;
  
    });
  };

  var getBeerYeast = function getBeerYeast(name,yeast) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name + '&?yeast=' + yeast).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var result = "";
        document.getElementById("num").innerHTML = response.length;
        for (var i = 0; i < response.length; i++) {
          result += "<td><p>" + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="80" height="150">' +"<br>" + response[i].tagline + response[i].ingredients.yeast+ "</p></td>";
          
        }
document.getElementById("beers").innerHTML = result;
  
    });
  };

  var findBeer = function findBeer(name,yeast){
    if (yeast != "" && name != "") {
        getBeerYeast(name,yeast);
    } else if (yeast != "") {
        getYeast(yeast);
    } else if (name != "") {
        getBeerAPI(name);
    } else {
		location.reload();
    }
  }