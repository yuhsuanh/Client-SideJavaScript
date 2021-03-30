//talking to our elements
let locationBtn = document.getElementById('mylocation');
let para = document.getElementById('location');
let button = document.querySelector("button");
let mapLink = document.getElementById('map-link');
mapLink.href = "";
mapLink.textContent = "";


//let make our map function
function getLocation() {
  if (!navigator.geolocation) {
    para.textContent = "Geolocation is not supported by your browser!";
  } else {
    para.textContent = "Locating...";
    navigator.geolocation.getCurrentPosition(showPosition, errorMsg);
  }
}

//building the show position function
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  para.textContent = "";
  mapLink.textContent = "Check out the Map";

  //finding our position
  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;

  mapLink.textContent = "View the Map";
}

//erro message if something went wrong
function errorMsg() {
  para.textContent = "Sorry, something went wrong!";
}

//what is the button doing?
button.onclick = getLocation;
