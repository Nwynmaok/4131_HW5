<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="script.js">
  </script>

  <Title>Calendar</Title>
</head>

<body>
  <h1>Calendar</h1>
  <div class="container1">
    <div class="menu">
      <nav>
        <a href="calendar.php">My Calendar</a>
        <a href="form.php">Form Input</a>
      </nav>
    </div>
    <div class="wrapper">
      <p><span id="marquee"></span></p>
    </div>
    <div class="container2">
      <div class="table">
        <table class="item1">
          <tr class = "item3">
            <th><span class="dayheader">Monday</span></th>
            <td>
              <span id="day1class1"></span><br>
              <span class="time" id="day1time1"></span><br>
              <span id="day1location1"></span>
            </td>
            <td>
              <span id="day1class2"></span><br>
              <span class="time" id="day1time2"></span><br>
              <span id="day1location2"></span><br>
            </td>
            <td id="Fraser1" onmouseover="Fraser1Hover();" onmouseleave="Fraser1Unhover();">
              <span id="day1class3">CSCI 4131</span><br>
              <span class="time" id="day1time3">1:00 PM - 2:15 PM</span><br>
              <span id="day1location3">Fraser Hall 101, MN</span>
            </td>
            <td id="Bruininks2" onmouseover="Bruininks2Hover();" onmouseleave="Bruininks2Unhover();">
              <span id="day1class4">CSCI 3081W</span><br>
              <span class="time" id="day1time4">4:00 PM - 5:15 PM</span><br>
              <span id="day1location4">Bruininks Hall 1-114, MN</span><br>
              <a id="day1git2" href="https://github.umn.edu/umn-csci-3081F17">Github</a>
            </td>
          </tr>
          <tr class = "item2">
            <th><span class="dayheader">Tuesday</span></th>
            <td></td>
            <td></td>
            <td id="Keller2" onmouseover="Keller2Hover();" onmouseleave="Keller2Unhover();">
              <span id="day2class1">CSCI 4707</span><br>
              <span class="time" id="day2time1">1:00 PM - 2:15 PM</span><br>
              <span id="day2location1">Keller Hall 3-230, MN</span>
            </td>
            <td id="Lind1" onmouseover="Lind1Hover();" onmouseleave="Lind1Unhover();">
              <span id="day2class2">EWB Admin Meeting</span><br>
              <span class="time" id="day2time2">9:00 PM - 9:30 PM</span><br>
              <span id="day2location2">Lind Hall 109, MN</span>
            </td>
          </tr>
          <tr class="item3">
            <th><span class="dayheader">Wednesday</span></th>
            <td id="Keller3" onmouseover="Keller3Hover();" onmouseleave="Keller3Unhover();">
              <span id="day3class1">CSCI 5115</span><br>
              <span class="time" id="day3time1">9:45 AM - 11:00 AM</span><br>
              <span id="day3location1">Keller Hall 3-111, MN</span>
            </td>
            <td id="Bruininks3" onmouseover="Bruininks3Hover();" onmouseleave="Bruininks3Unhover();">
              <span id="day3class2">CSCI 5117</span><br>
              <span class="time" id="day3time2">11:15 AM - 12:30 PM</span><br>
              <span id="day3location2">Bruininks Hall 1-141A, MN</span><br>
              <a id="day3git1" href="https://github.com/umn-5117-f17">Github</a>
            </td>
            <td id="Fraser2" onmouseover="Fraser2Hover();" onmouseleave="Fraser2Unhover();">
              <span id="day3class3">CSCI 4131</span><br>
              <span class="time" id="day3time3">1:00 PM - 2:15 PM</span><br>
              <span id="day3location3">Fraser Hall 101, MN</span>
            </td>
            <td id="Bruininks4" onmouseover="Bruininks4Hover();" onmouseleave="Bruininks4Unhover();">
              <span id="day3class4">CSCI 3081W</span><br>
              <span class="time" id="day3time4">4:00 PM - 5:15 PM</span><br>
              <span id="day3location4">Bruininks Hall 1-114, MN</span><br>
              <a id="day3git2" href="https://github.umn.edu/umn-csci-3081F17">Github</a>
            </td>
          </tr>
          <tr class = "item2">
            <th><span class="dayheader">Thursday</span></th>
            <td></td>
            <td></td>
            <td id="Keller4" onmouseover="Keller4Hover();" onmouseleave="Keller4Unhover();">
              <span id="day4class1">CSCI 4707</span><br>
              <span class="time" id="day4time1">1:00 PM - 2:15 PM</span><br>
              <span id="day4location1">Keller Hall 3-230, MN</span>
            </td>
            <td></td>
          </tr>
          <tr class = "item3">
            <th><span class="dayheader">Friday</span></th>
            <td></td>
            <td id="Keller5" onmouseover="Keller5Hover();" onmouseleave="Keller5Unhover();">
              <span id="day5class1">CSCI 3081</span><br>
              <span class="time" id="day5time1">11:15 AM - 12:05 PM</span><br>
              <span id="day5location1">Keller Hall 1-250, MN</span><br>
              <a id="day5git" href="https://github.umn.edu/umn-csci-3081F17">Github</a>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="twitter">
        <a class="twitter-timeline"  href="https://twitter.com/hashtag/UMN" data-widget-id="920352412593999872">#UMN Tweets</a>
        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
      </div>
    <div id="mapInput">
    <div id="restaurantRange">
      <form id="restaurant">

        <div id="mileRange"><b>Search for nearby restaurants</b></div>
        <div id="mileIncr">
          Miles: <span id="Distance">0</span>&nbsp; <input type="button" onclick="increment();" value="+"><br>

        </div>
        <div id="buttonholder">
          Specify a range:
          <input type="number" name="Distance" id="updateNum" value="0">
          <input id="centerSubmit" onclick="setRange();" type="button" value="Find Restaurants">
        </div>
      </form>
    </div>
    <div id="Destination">
      <form id="destination">
        <div id="travelType">
          <b>Get directions from your location:</b>
          <input type="text" id="dest" name="dest" placeholder="Destination">
          <input onclick="getDirections();" type="button" value="Get Directions"><br>
          &nbsp; &nbsp;<input type="radio" name="travel" value="WALKING">&nbsp; Walking<br>
          &nbsp; &nbsp;<input type="radio" name="travel" value="BICYCLING">&nbsp; Biking<br>
          &nbsp; &nbsp;<input type="radio" name="travel" value="TRANSIT">&nbsp; Public Transit<br>
          &nbsp; &nbsp;<input type="radio" name="travel" value="DRIVING">&nbsp; Driving<br>
        </div>
      </form>
    </div>
  </div>
  </div>

  <div id="Maps">
    <div id = "map">
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgmOCL_dIeyMAlX2y00iUqAzBN5j7svdo&libraries=places&callback=initMap">
      </script>
    </div>
    <div id="directionsPanel">
    </div>
  </div>
    <!-- <div id="initPic"><img class = "initPic" src="images/Northrop_Mall_Winter.png" alt="Northrop (default)"></div>
    <div id="KellerPic"><img class = "Pic" src="images/Keller_Hall_plaza.jpg" alt="Keller Hall"></div>
    <div id="BruininksPic"><img class = "Pic" src="images/Bruininks_Hall_Picture.jpg" alt="Bruininks Hall"></div>
    <div id="FraserPic"><img class = "Pic" src="images/Fraser_Hall.jpg" alt="Fraser Hall"></div> -->
  </div>
  <footer id="footer">
    <br>
    Tested in Chrome, Safari and Firefox
  </footer>
  <script>
    marquee();
    // initMap();
    // eventClick();
  </script>
</body>
</html>
