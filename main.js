// Google Maps
function myMap() {
  const mapProp = {
    center: new google.maps.LatLng(55.654367, -3.193624),
    zoom: 5
  };
  const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Mobile Burger Menu
let menuState = false;

const toggleMenuState = () => {
  let ul = document.querySelector("#mobile-nav ul");

  if (menuState === false) {
    ul.style.height = "initial";
    ul.style.opacity = "1";
    menuState = true;
  } else if (menuState === true) {
    ul.style.opacity = "0";
    ul.style.height = "0";
    menuState = false;
  }
};
