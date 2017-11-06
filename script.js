function validateForm() {
  var x = document.forms["myForm"]["eventname"].value;
  if (x == "") {
      alert("Event must have a name");
      return false;
  }
  if((/^[A-Za-z0-9 ]+$/.test(x)) == false) {
    alert("Name must be alphanumeric");
    return(false);
  }
  var z = document.forms["myForm"]["day"].value;
  if (z == "") {
      alert("Event must have a day of the week");
      return false;
  }
  var v = document.forms["myForm"]["starttime"].value;
  if (v == "") {
      alert("Event must have a start time");
      return false;
  }
  var w = document.forms["myForm"]["endtime"].value;
  if (w == "") {
      alert("Event must have a end time");
      return false;
  }
  var y = document.forms["myForm"]["location"].value;
  if (y == "") {
      alert("Event must have a location");
      return false;
  }
  if((/^[A-Za-z0-9 ]+$/.test(y)) == false) {
    alert("Event must be alphanumeric");
    return(false);
  }
}

// reference from: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
var map;
var infowindow;
var pos;
var geocoder;
var markers = [];
var directionsDisplay;
var events = [];
var UMN = {lat: 44.9729, lng: -93.2353};

function pushBackEvents(event) {
  events.push(event);
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: UMN
  });

  directionsDisplay = new google.maps.DirectionsRenderer();


  geocoder = new google.maps.Geocoder();
  geocodeAddress(geocoder, map);

  // reference from: https://developers.google.com/maps/documentation/javascript/places?authuser=1#place_search_requests
  var request = {
    location: UMN,
    radius: 1,
    type: ['restaurant']
  };

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  // reference from: https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infowindow.setPosition(pos);
      infowindow.setContent('Location found.');
      infowindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
      //console.log("Made marker");
    }
  }
}
function updateMarkers() {
  if (!pos) {
    pos = UMN;
  }
  var newRange = {
    location: pos,
    radius: document.getElementById("Distance").innerHTML * 1609,
    type: ['restaurant']
  };
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(newRange, callback);
}

//reference from: https://developers.google.com/maps/documentation/javascript/examples/marker-remove
function clearMarkers() {
  setMapOnAll(null);
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// reference from: https://developers.google.com/maps/documentation/javascript/examples/place-search?authuser=1
function createMarker(place) {
  var placeLoc = place.geometry.location;
  //var Addr = geocodeReverse(geocoder, map, infowindow, placeLoc);
  //console.log(Addr);
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  markers.push(marker);

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name + "</br>" + place.vicinity);
    infowindow.open(map, this);
  });
}

//refence from: https://developers.google.com/maps/documentation/javascript/directions
function getDirections() {
  var directionsService = new google.maps.DirectionsService()
  var start, end, mode;
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directionsPanel'));
  if (!pos) {
    start = UMN;
  } else {
    start = pos;
  }
  end = document.getElementById('dest').value;
  var modeSelect = document.getElementsByName("travel");
  for (var i = 0; i < modeSelect.length; i++) {
    if (modeSelect[i].checked) {
      mode = modeSelect[i].value;
    }
  }
  if (!mode) {
    alert('Please select transit method');
  } else {
    var request = {
      origin: start,
      destination: end,
      travelMode: mode
    };
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections({routes: []});
        directionsDisplay.setDirections(result);
      }
    });
    document.getElementById("map").style.width = "75%";
    document.getElementById("map").style.float = "left";
    document.getElementById("directionsPanel").style.display = "block";
  }
}

function increment() {
  var value = document.getElementById('Distance');
  var number = parseFloat(value.innerHTML);
  number += .25;
  document.getElementById('Distance').innerHTML = number;
  updateMarkers();
}

function setRange() {
  var newNum = document.getElementById("updateNum").value;
  if(!newNum) {
    newNum = 0;
  }
  var value = document.getElementById('Distance');
  var number = parseFloat(value.innerHTML);
  if(newNum < number) {
    clearMarkers();
  }
  document.getElementById('Distance').innerHTML = newNum;
  updateMarkers();
}

function Decrement() {
  var value = document.getElementById('Distance');
  var number = parseFloat(value.innerHTML);
  number -= .25;
  document.getElementById('Distance').innerHTML = number;
  updateMarkers();
}
// reference from: https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
// Used geocoding to get the address from the Calendar entry
function geocodeAddress(geocoder, resultsMap) {
  let addresses = [];
  let infowindows = [];
  let markers = [];
  let iter = 0;
  for (var i = 0; i < events.length; i += 1) {
    geocoder.geocode({address : events[i].location}, function(results, status) {
      if (status === 'OK') {
        markers[iter] = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        markers[iter].setAnimation(google.maps.Animation.BOUNCE);
        content = events[iter].location + "</br>" + events[iter].eventname + "</br>" + events[iter].starttime + "-" + events[iter].endtime;
        infowindows[iter] = new google.maps.InfoWindow({
          content: content,
          maxWidth: 300
        });
        google.maps.event.addListener(markers[iter], 'click', (function(marker, iter) {
          return function() {
            infowindows[iter].open(map, markers[iter]);
          }
        })(markers[iter], iter));
        iter += 1;
      } else {
            alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}
