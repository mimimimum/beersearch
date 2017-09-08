(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getBeers = exports.getBeers = function getBeers() {
  return fetch('https://api.punkapi.com/v2/beers/');
};

},{}],2:[function(require,module,exports){
'use strict';

var _api = require('./api.js');

(0, _api.getBeers)().then(function (response) {
  return response.json();
}).catch(function (e) {
  return console.error('Something went wrong', e);
}).then(function (response) {
  document.getElementById("num").innerHTML += response.length;
  var result = "";
  result;
  for (var i = 0; i < 25; i++) {
    result += "<div class='col-lg-12'><b>NAME : </b>" + response[i].name + "<br>" + '<img src="' + response[i].image_url + '" width="160" height="300">' + "<br><b>TAGLINE : </b>" + response[i].tagline + "<br><b>FIRST BREWED : </b>" + response[i].first_brewed + "<br><b>pH : </b>" + response[i].ph + "<br><b>YEAST : </b>" + response[i].ingredients.yeast + "<br><b>DESCRIPTION : </b>" + response[i].description + "<hr></div>";
  }
  document.getElementById("beers").innerHTML = result;
});

},{"./api.js":1}]},{},[2]);
