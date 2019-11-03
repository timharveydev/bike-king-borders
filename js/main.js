// Google Maps
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(55.654367, -3.193624),
    zoom: 5
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Mobile Burger Menu
let menuState = false;

let toggleMenuState = function() {
  let uL = document.querySelector("#mobile-nav ul");

  if (menuState === false) {
    uL.style.height = "initial";
    uL.style.opacity = "1";
    menuState = true;
  } else if (menuState === true) {
    uL.style.opacity = "0";
    uL.style.height = "0";
    menuState = false;
  }
};
