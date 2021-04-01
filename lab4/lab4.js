let map;

const labels = [
    "Heritage Park", 
    "Arboretum Sunnidale Park",
    "Kearsey Park",
    "Queen's Park",
    "Centennial Park",
    "Kempenfelt Park",
    "Berczy Park",
    "Little Lake Park",
    "Cheltenham Park",
];

const locations = [
  { lat: 44.387877, lng: -79.686950 },
  { lat: 44.397071, lng: -79.708464 },
  { lat: 44.395512, lng: -79.710013 },
  { lat: 44.390125, lng: -79.696610 },
  { lat: 44.378791, lng: -79.689141 },
  { lat: 44.390634, lng: -79.675015 },
  { lat: 44.395278, lng: -79.686588 },
  { lat: 44.417325, lng: -79.663782 },
  { lat: 44.412084, lng: -79.652421 },
];


// Initialize and add the map
function initMap() {
  //The map center position
  const mapCenter = { lat: 44.389260, lng: -79.690133 };

  // The map centered at Barrie
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: mapCenter,
    mapId: '60b4ac8da2714e86',
    //mapTypeId: 'hybrid',
  });

  
  

  /*
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i],
    });
  });
  */

  // Add a marker clusterer to manage the markers.
  /*
  new MarkerClusterer(map, markers, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
  */






  const iconBase = "http://maps.google.com/mapfiles/kml/shapes/";
  const icons = {
    park: {
      icon: iconBase + "parks.png",
    },
    trail: {
      icon: iconBase + "hiker.png",
    },
  };
  const features = [
      {
        position: new google.maps.LatLng(44.387877, -79.686950),
        type: "park",
      },
      {
        position: new google.maps.LatLng(44.397071, -79.708464),
        type: "park",
      },
      {
        position: new google.maps.LatLng(44.395512, -79.710013),
        type: "park",
      },
      {
        position: new google.maps.LatLng(44.390125, -79.696610),
        type: "park",
      },
      {
        position: new google.maps.LatLng(44.378791, -79.689141),
        type: "park",
      },
      {
        position: new google.maps.LatLng(44.390634, -79.675015),
        type: "park",
      },
      {
        position: new google.maps.LatLng(44.395278, -79.686588),
        type: "park",
      },
      {
        position: new google.maps.LatLng(44.417325, -79.652421),
        type: "park",
      },
      {
        position: new google.maps.LatLng(44.412084, -79.686950),
        type: "park",
      },
      {
        position: new google.maps.LatLng(44.388908, -79.681392),
        type: "trail",
      },
      {
        position: new google.maps.LatLng(44.398966, -79.623241),
        type: "trail",
      },
  ]; 
  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }

}