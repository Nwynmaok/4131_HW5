function marquee() {
  let d = new Date();
  var n = d.getDay();
  if (n === 0 | n === 6) {
    document.getElementById('marquee').innerHTML="It is the weekend! No events today."
  } else if (n === 1 | n === 3) {
    let todayText = document.getElementById("day"+n+"class1").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"time1").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"location1").innerHTML;
    todayText += "  ||  " + document.getElementById("day"+n+"class2").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"time2").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"location2").innerHTML;
    todayText += "  ||  " + document.getElementById("day"+n+"class3").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"time3").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"location3").innerHTML;
    todayText += "  ||  " + document.getElementById("day"+n+"class4").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"time4").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"location4").innerHTML;
    document.getElementById('marquee').innerHTML=todayText;
  } else if (n === 4 | n === 5) {
    let todayText = document.getElementById("day"+n+"class1").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"time1").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"location1").innerHTML;
    document.getElementById('marquee').innerHTML=todayText;
  } else if (n === 2) {
    let todayText = document.getElementById("day"+n+"class1").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"time1").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"location1").innerHTML;
    todayText += "  ||  " + document.getElementById("day"+n+"class2").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"time2").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"location2").innerHTML;
    document.getElementById('marquee').innerHTML=todayText;
  }
}
// function showKeller() {
//   document.getElementById("initPic").style.display = "none";
//   document.getElementById("BruininksPic").style.display = "none";
//   document.getElementById("FraserPic").style.display = "none";
//   document.getElementById("KellerPic").style.display = "block";
// }
// function showBruininks() {
//   document.getElementById("initPic").style.display = "none";
//   document.getElementById("BruininksPic").style.display = "block";
//   document.getElementById("FraserPic").style.display = "none";
//   document.getElementById("KellerPic").style.display = "none";
// }
// function showFraser() {
//   document.getElementById("initPic").style.display = "none";
//   document.getElementById("BruininksPic").style.display = "none";
//   document.getElementById("FraserPic").style.display = "block";
//   document.getElementById("KellerPic").style.display = "none";
// }
// function eventClick() {
//   let image1 = document.getElementById("Keller1").addEventListener('click', function (event) {
//       showKeller();
//   });
//   let image2 = document.getElementById("Keller2").addEventListener('click', function (event) {
//       showKeller();
//   });
//   let image3 = document.getElementById("Keller3").addEventListener('click', function (event) {
//       showKeller();
//   });
//   let image4 = document.getElementById("Keller4").addEventListener('click', function (event) {
//       showKeller();
//   });
//   let image5 = document.getElementById("Keller5").addEventListener('click', function (event) {
//       showKeller();
//   });
//   let image6 = document.getElementById("Bruininks1").addEventListener('click', function (event) {
//       showBruininks();
//   });
//   let image7 = document.getElementById("Bruininks2").addEventListener('click', function (event) {
//       showBruininks();
//   });
//   let image8 = document.getElementById("Bruininks3").addEventListener('click', function (event) {
//       showBruininks();
//   });
//   let image9 = document.getElementById("Bruininks4").addEventListener('click', function (event) {
//       showBruininks();
//   });
//   let image10 = document.getElementById("Fraser1").addEventListener('click', function (event) {
//       showFraser();
//   });
//   let image11 = document.getElementById("Fraser2").addEventListener('click', function (event) {
//       showFraser();
//   });
// }

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

function Keller1Hover() {
  // console.log("Keller");
  document.getElementById("Keller1").style.backgroundImage = "url(images/Keller_Hall_plaza.jpg)";
  document.getElementById("day1class1").style.backgroundColor = "black";
  document.getElementById("day1class1").style.color = "white";
  document.getElementById("day1time1").style.backgroundColor = "black";
  document.getElementById("day1time1").style.color = "white";
  document.getElementById("day1location1").style.backgroundColor = "black";
  document.getElementById("day1location1").style.color = "white";
}

function Keller1Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Keller1").style.backgroundImage = "none";
  document.getElementById("day1class1").style.backgroundColor = "transparent";
  document.getElementById("day1class1").style.color = "#800000";
  document.getElementById("day1time1").style.backgroundColor = "transparent";
  document.getElementById("day1time1").style.color = "#800000";
  document.getElementById("day1location1").style.backgroundColor = "transparent";
  document.getElementById("day1location1").style.color = "#800000";
}

function Keller2Hover() {
  // console.log("Keller");
  document.getElementById("Keller2").style.backgroundImage = "url(images/Keller_Hall_plaza.jpg)";
  document.getElementById("day2class1").style.backgroundColor = "black";
  document.getElementById("day2class1").style.color = "white";
  document.getElementById("day2time1").style.backgroundColor = "black";
  document.getElementById("day2time1").style.color = "white";
  document.getElementById("day2location1").style.backgroundColor = "black";
  document.getElementById("day2location1").style.color = "white";
}

function Keller2Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Keller2").style.backgroundImage = "none";
  document.getElementById("day2class1").style.backgroundColor = "transparent";
  document.getElementById("day2class1").style.color = "#800000";
  document.getElementById("day2time1").style.backgroundColor = "transparent";
  document.getElementById("day2time1").style.color = "#800000";
  document.getElementById("day2location1").style.backgroundColor = "transparent";
  document.getElementById("day2location1").style.color = "#800000";
}

function Keller3Hover() {
  // console.log("Keller");
  document.getElementById("Keller3").style.backgroundImage = "url(images/Keller_Hall_plaza.jpg)";
  document.getElementById("day3class1").style.backgroundColor = "black";
  document.getElementById("day3class1").style.color = "white";
  document.getElementById("day3time1").style.backgroundColor = "black";
  document.getElementById("day3time1").style.color = "white";
  document.getElementById("day3location1").style.backgroundColor = "black";
  document.getElementById("day3location1").style.color = "white";
}

function Keller3Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Keller3").style.backgroundImage = "none";
  document.getElementById("day3class1").style.backgroundColor = "transparent";
  document.getElementById("day3class1").style.color = "#800000";
  document.getElementById("day3time1").style.backgroundColor = "transparent";
  document.getElementById("day3time1").style.color = "#800000";
  document.getElementById("day3location1").style.backgroundColor = "transparent";
  document.getElementById("day3location1").style.color = "#800000";
}

function Keller4Hover() {
  // console.log("Keller");
  document.getElementById("Keller4").style.backgroundImage = "url(images/Keller_Hall_plaza.jpg)";
  document.getElementById("day4class1").style.backgroundColor = "black";
  document.getElementById("day4class1").style.color = "white";
  document.getElementById("day4time1").style.backgroundColor = "black";
  document.getElementById("day4time1").style.color = "white";
  document.getElementById("day4location1").style.backgroundColor = "black";
  document.getElementById("day4location1").style.color = "white";
}

function Keller4Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Keller4").style.backgroundImage = "none";
  document.getElementById("day4class1").style.backgroundColor = "transparent";
  document.getElementById("day4class1").style.color = "#800000";
  document.getElementById("day4time1").style.backgroundColor = "transparent";
  document.getElementById("day4time1").style.color = "#800000";
  document.getElementById("day4location1").style.backgroundColor = "transparent";
  document.getElementById("day4location1").style.color = "#800000";
}

function Keller5Hover() {
  // console.log("Keller");
  document.getElementById("Keller5").style.backgroundImage = "url(images/Keller_Hall_plaza.jpg)";
  document.getElementById("day5class1").style.backgroundColor = "black";
  document.getElementById("day5class1").style.color = "white";
  document.getElementById("day5time1").style.backgroundColor = "black";
  document.getElementById("day5time1").style.color = "white";
  document.getElementById("day5location1").style.backgroundColor = "black";
  document.getElementById("day5location1").style.color = "white";
  document.getElementById("day5git").style.backgroundColor = "black";
  document.getElementById("day5git").style.color = "white";
}

function Keller5Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Keller5").style.backgroundImage = "none";
  document.getElementById("day5class1").style.backgroundColor = "transparent";
  document.getElementById("day5class1").style.color = "#800000";
  document.getElementById("day5time1").style.backgroundColor = "transparent";
  document.getElementById("day5time1").style.color = "#800000";
  document.getElementById("day5location1").style.backgroundColor = "transparent";
  document.getElementById("day5location1").style.color = "#800000";
  document.getElementById("day5git").style.backgroundColor = "transparent";
  document.getElementById("day5git").style.color = "#800000";
}

function Keller5Hover() {
  // console.log("Keller");
  document.getElementById("Keller5").style.backgroundImage = "url(images/Keller_Hall_plaza.jpg)";
  document.getElementById("day5class1").style.backgroundColor = "black";
  document.getElementById("day5class1").style.color = "white";
  document.getElementById("day5time1").style.backgroundColor = "black";
  document.getElementById("day5time1").style.color = "white";
  document.getElementById("day5location1").style.backgroundColor = "black";
  document.getElementById("day5location1").style.color = "white";
  document.getElementById("day5git").style.backgroundColor = "black";
  document.getElementById("day5git").style.color = "white";
}

function Keller5Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Keller5").style.backgroundImage = "none";
  document.getElementById("day5class1").style.backgroundColor = "transparent";
  document.getElementById("day5class1").style.color = "#800000";
  document.getElementById("day5time1").style.backgroundColor = "transparent";
  document.getElementById("day5time1").style.color = "#800000";
  document.getElementById("day5location1").style.backgroundColor = "transparent";
  document.getElementById("day5location1").style.color = "#800000";
  document.getElementById("day5git").style.backgroundColor = "transparent";
  document.getElementById("day5git").style.color = "#800000";
}

function Bruininks1Hover() {
  // console.log("Keller");
  document.getElementById("Bruininks1").style.backgroundImage = "url(images/Bruininks_Hall_Picture.jpg)";
  document.getElementById("day1class2").style.backgroundColor = "black";
  document.getElementById("day1class2").style.color = "white";
  document.getElementById("day1time2").style.backgroundColor = "black";
  document.getElementById("day1time2").style.color = "white";
  document.getElementById("day1location2").style.backgroundColor = "black";
  document.getElementById("day1location2").style.color = "white";
  document.getElementById("day1git1").style.backgroundColor = "black";
  document.getElementById("day1git1").style.color = "white";
}

function Bruininks1Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Bruininks1").style.backgroundImage = "none";
  document.getElementById("day1class2").style.backgroundColor = "transparent";
  document.getElementById("day1class2").style.color = "#800000";
  document.getElementById("day1time2").style.backgroundColor = "transparent";
  document.getElementById("day1time2").style.color = "#800000";
  document.getElementById("day1location2").style.backgroundColor = "transparent";
  document.getElementById("day1location2").style.color = "#800000";
  document.getElementById("day1git1").style.backgroundColor = "transparent";
  document.getElementById("day1git1").style.color = "#800000";
}

function Bruininks2Hover() {
  // console.log("Keller");
  document.getElementById("Bruininks2").style.backgroundImage = "url(images/Bruininks_Hall_Picture.jpg)";
  document.getElementById("day1class4").style.backgroundColor = "black";
  document.getElementById("day1class4").style.color = "white";
  document.getElementById("day1time4").style.backgroundColor = "black";
  document.getElementById("day1time4").style.color = "white";
  document.getElementById("day1location4").style.backgroundColor = "black";
  document.getElementById("day1location4").style.color = "white";
  document.getElementById("day1git2").style.backgroundColor = "black";
  document.getElementById("day1git2").style.color = "white";
}

function Bruininks2Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Bruininks2").style.backgroundImage = "none";
  document.getElementById("day1class4").style.backgroundColor = "transparent";
  document.getElementById("day1class4").style.color = "#800000";
  document.getElementById("day1time4").style.backgroundColor = "transparent";
  document.getElementById("day1time4").style.color = "#800000";
  document.getElementById("day1location4").style.backgroundColor = "transparent";
  document.getElementById("day1location4").style.color = "#800000";
  document.getElementById("day1git2").style.backgroundColor = "transparent";
  document.getElementById("day1git2").style.color = "#800000";
}

function Bruininks3Hover() {
  // console.log("Keller");
  document.getElementById("Bruininks3").style.backgroundImage = "url(images/Bruininks_Hall_Picture.jpg)";
  document.getElementById("day3class2").style.backgroundColor = "black";
  document.getElementById("day3class2").style.color = "white";
  document.getElementById("day3time2").style.backgroundColor = "black";
  document.getElementById("day3time2").style.color = "white";
  document.getElementById("day3location2").style.backgroundColor = "black";
  document.getElementById("day3location2").style.color = "white";
  document.getElementById("day3git1").style.backgroundColor = "black";
  document.getElementById("day3git1").style.color = "white";
}

function Bruininks3Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Bruininks3").style.backgroundImage = "none";
  document.getElementById("day3class2").style.backgroundColor = "transparent";
  document.getElementById("day3class2").style.color = "#800000";
  document.getElementById("day3time2").style.backgroundColor = "transparent";
  document.getElementById("day3time2").style.color = "#800000";
  document.getElementById("day3location2").style.backgroundColor = "transparent";
  document.getElementById("day3location2").style.color = "#800000";
  document.getElementById("day3git1").style.backgroundColor = "transparent";
  document.getElementById("day3git1").style.color = "#800000";
}

function Bruininks4Hover() {
  // console.log("Keller");
  document.getElementById("Bruininks4").style.backgroundImage = "url(images/Bruininks_Hall_Picture.jpg)";
  document.getElementById("day3class4").style.backgroundColor = "black";
  document.getElementById("day3class4").style.color = "white";
  document.getElementById("day3time4").style.backgroundColor = "black";
  document.getElementById("day3time4").style.color = "white";
  document.getElementById("day3location4").style.backgroundColor = "black";
  document.getElementById("day3location4").style.color = "white";
  document.getElementById("day3git2").style.backgroundColor = "black";
  document.getElementById("day3git2").style.color = "white";
}

function Bruininks4Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Bruininks4").style.backgroundImage = "none";
  document.getElementById("day3class4").style.backgroundColor = "transparent";
  document.getElementById("day3class4").style.color = "#800000";
  document.getElementById("day3time4").style.backgroundColor = "transparent";
  document.getElementById("day3time4").style.color = "#800000";
  document.getElementById("day3location4").style.backgroundColor = "transparent";
  document.getElementById("day3location4").style.color = "#800000";
  document.getElementById("day3git2").style.backgroundColor = "transparent";
  document.getElementById("day3git2").style.color = "#800000";
}

function Fraser1Hover() {
  // console.log("Keller");
  document.getElementById("Fraser1").style.backgroundImage = "url(images/Fraser_Hall.jpg)";
  document.getElementById("day1class3").style.backgroundColor = "black";
  document.getElementById("day1class3").style.color = "white";
  document.getElementById("day1time3").style.backgroundColor = "black";
  document.getElementById("day1time3").style.color = "white";
  document.getElementById("day1location3").style.backgroundColor = "black";
  document.getElementById("day1location3").style.color = "white";
}

function Fraser1Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Fraser1").style.backgroundImage = "none";
  document.getElementById("day1class3").style.backgroundColor = "transparent";
  document.getElementById("day1class3").style.color = "#800000";
  document.getElementById("day1time3").style.backgroundColor = "transparent";
  document.getElementById("day1time3").style.color = "#800000";
  document.getElementById("day1location3").style.backgroundColor = "transparent";
  document.getElementById("day1location3").style.color = "#800000";
}
function Fraser2Hover() {
  // console.log("Keller");
  document.getElementById("Fraser2").style.backgroundImage = "url(images/Fraser_Hall.jpg)";
  document.getElementById("day3class3").style.backgroundColor = "black";
  document.getElementById("day3class3").style.color = "white";
  document.getElementById("day3time3").style.backgroundColor = "black";
  document.getElementById("day3time3").style.color = "white";
  document.getElementById("day3location3").style.backgroundColor = "black";
  document.getElementById("day3location3").style.color = "white";
}

function Fraser2Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Fraser2").style.backgroundImage = "none";
  document.getElementById("day3class3").style.backgroundColor = "transparent";
  document.getElementById("day3class3").style.color = "#800000";
  document.getElementById("day3time3").style.backgroundColor = "transparent";
  document.getElementById("day3time3").style.color = "#800000";
  document.getElementById("day3location3").style.backgroundColor = "transparent";
  document.getElementById("day3location3").style.color = "#800000";
}

function Lind1Hover() {
  document.getElementById("Lind1").style.backgroundImage = "url(images/Lind_Hall.jpg)";
  document.getElementById("day2class2").style.backgroundColor = "black";
  document.getElementById("day2class2").style.color = "white";
  document.getElementById("day2time2").style.backgroundColor = "black";
  document.getElementById("day2time2").style.color = "white";
  document.getElementById("day2location2").style.backgroundColor = "black";
  document.getElementById("day2location2").style.color = "white";
}

function Lind1Unhover() {
  document.getElementById("Lind1").style.backgroundImage = "none";
  document.getElementById("day2class2").style.backgroundColor = "transparent";
  document.getElementById("day2class2").style.color = "#800000";
  document.getElementById("day2time2").style.backgroundColor = "transparent";
  document.getElementById("day2time2").style.color = "#800000";
  document.getElementById("day2location2").style.backgroundColor = "transparent";
  document.getElementById("day2location2").style.color = "#800000";
}

// reference from: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
var map;
var infowindow;
var pos;
var geocoder;
var markers = [];
var directionsDisplay;
var UMN = {lat: 44.9729, lng: -93.2353};

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

function increment()
{
  var value = document.getElementById('Distance');
  var number = parseFloat(value.innerHTML);
  number += .25;
  document.getElementById('Distance').innerHTML = number;
  updateMarkers();
}

function setRange()
{
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

function Decrement()
{
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
  for (var i = 0; i < 3; i += 1) {
    addresses[i] = document.getElementById('day' + 1 + 'location' + (i+1)).innerHTML;
  }
  addresses[3] = document.getElementById('day' + 2 + 'location' + 2).innerHTML;
  geocoder.geocode({'address' : addresses[0]}, function(results, status) {
    if (status === 'OK') {
      markers[0] = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
      markers[0].setAnimation(google.maps.Animation.BOUNCE);
      content = "Keller Hall</br>";
      content += "Monday:</br>";
      content += document.getElementById("Keller1").innerHTML;
      content += "</br>";
      content += "</br>";
      content += "Tuesday:</br>";
      content += document.getElementById("Keller2").innerHTML;
      content += "</br>";
      content += "</br>";
      content += "Wednesday:</br>";
      content += document.getElementById("Keller3").innerHTML;
      content += "</br>";
      content += "</br>";
      content += "Thursday:</br>";
      content += document.getElementById("Keller4").innerHTML;
      content += "</br>";
      content += "</br>";
      content += "Friday:</br>";
      content += document.getElementById("Keller5").innerHTML;
      infowindows[0] = new google.maps.InfoWindow({
        content: content,
        maxWidth: 300
      });
      markers[0].addListener('click', function() {
        infowindows[0].open(map, markers[0]);
      });
      markers[0].addListener('mouseover', function() {
        Keller1Hover();
        Keller2Hover();
        Keller3Hover();
        Keller4Hover();
        Keller5Hover();
      });
      markers[0].addListener('mouseout', function() {
        Keller1Unhover();
        Keller2Unhover();
        Keller3Unhover();
        Keller4Unhover();
        Keller5Unhover();
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  geocoder.geocode({'address' : addresses[1]}, function(results, status) {
    if (status === 'OK') {
      markers[1] = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
      markers[1].setAnimation(google.maps.Animation.BOUNCE);
      content = "Bruininks Hall</br>";
      content += "Monday:</br>";
      content += document.getElementById("Bruininks1").innerHTML;
      content += "</br>";
      content += "</br>";
      content += document.getElementById("Bruininks2").innerHTML;
      content += "</br>";
      content += "</br>";
      content += "Wednesday:</br>";
      content += document.getElementById("Bruininks3").innerHTML;
      content += "</br>";
      content += "</br>";
      content += document.getElementById("Bruininks4").innerHTML;
      infowindows[1] = new google.maps.InfoWindow({
        content: content,
        maxWidth: 300
      });
      markers[1].addListener('click', function() {
        infowindows[1].open(map, markers[1]);
      });
      markers[1].addListener('mouseover', function() {
        Bruininks1Hover();
        Bruininks2Hover();
        Bruininks3Hover();
        Bruininks4Hover();
      });
      markers[1].addListener('mouseout', function() {
        Bruininks1Unhover();
        Bruininks2Unhover();
        Bruininks3Unhover();
        Bruininks4Unhover();
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  geocoder.geocode({'address' : addresses[2]}, function(results, status) {
    if (status === 'OK') {
      markers[2] = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
      markers[2].setAnimation(google.maps.Animation.BOUNCE);
      content = "Fraser Hall</br>";
      content += "Monday:</br>";
      content += document.getElementById("Fraser1").innerHTML;
      content += "</br>";
      content += "</br>";
      content += "Wednesday:</br>";
      content += document.getElementById("Fraser2").innerHTML;
      infowindows[2] = new google.maps.InfoWindow({
        content: content,
        maxWidth: 300
      });
      markers[2].addListener('click', function() {
        infowindows[2].open(map, markers[2]);
      });
      markers[2].addListener('mouseover', function() {
        Fraser1Hover();
        Fraser2Hover();
      });
      markers[2].addListener('mouseout', function() {
        Fraser1Unhover();
        Fraser2Unhover();
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  geocoder.geocode({'address' : addresses[3]}, function(results, status) {
    if (status === 'OK') {
      markers[3] = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
      markers[3].setAnimation(google.maps.Animation.BOUNCE);
      content = "Lind Hall</br>";
      content += "Tuesday:</br>";
      content += document.getElementById("Lind1").innerHTML;
      infowindows[3] = new google.maps.InfoWindow({
        content: content,
        maxWidth: 300
      });
      markers[3].addListener('click', function() {
        infowindows[3].open(map, markers[3]);
      });
      markers[3].addListener('mouseover', function() {
        Lind1Hover();
      });
      markers[3].addListener('mouseout', function() {
        Lind1Unhover();
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
