<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="script.js">
  </script>

  <Title>Calendar</Title>
</head>

<?php
  $jsonRaw = file_get_contents("calendar.txt");
  $json = json_decode($jsonRaw, TRUE);
  $MondayNum = 0;
  $TuesdayNum = 0;
  $WednesdayNum = 0;
  $ThursdayNum = 0;
  $FridayNum = 0;
  $SaturdayNum = 0;
  $SundayNum = 0;
  foreach ($json as $event) {
    switch ($event['day']) {
      case 'Monday':
        $Monday[$MondayNum] = array("eventname" => $event['eventname'], "location" => $event['location'], "starttime" => $event['starttime'], "endtime" => $event['endtime']);
        $MondayNum += 1;
        break;
      case 'Tuesday':
        $Tuesday[$TuesdayNum] = array("eventname" => $event['eventname'], "location" => $event['location'], "starttime" => $event['starttime'], "endtime" => $event['endtime']);
        $TuesdayNum += 1;
        break;
      case 'Wednesday':
        $Wednesday[$WednesdayNum] = array("eventname" => $event['eventname'], "location" => $event['location'], "starttime" => $event['starttime'], "endtime" => $event['endtime']);
        $WednesdayNum += 1;
        break;
      case 'Thursday':
        $Thursday[$ThursdayNum] = array("eventname" => $event['eventname'], "location" => $event['location'], "starttime" => $event['starttime'], "endtime" => $event['endtime']);
        $ThursdayNum += 1;
        break;
      case 'Friday':
        $Friday[$FridayNum] = array("eventname" => $event['eventname'], "location" => $event['location'], "starttime" => $event['starttime'], "endtime" => $event['endtime']);
        $FridayNum += 1;
        break;
      case 'Saturday':
        $Saturday[$TuesdayNum] = array("eventname" => $event['eventname'], "location" => $event['location'], "starttime" => $event['starttime'], "endtime" => $event['endtime']);
        $SaturdayNum += 1;
        break;
      case 'Sunday':
        $Sunday[$SundayNum] = array("eventname" => $event['eventname'], "location" => $event['location'], "starttime" => $event['starttime'], "endtime" => $event['endtime']);
        $SundayNum += 1;
        break;
    }
  }
?>
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
            <th><span class="Sunday">Sunday</span></th>
            <?php foreach($Sunday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
          </tr>
          <tr class = "item2">
            <th><span class="Monday">Monday</span></th>
            <?php foreach($Monday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
          </tr>
          <tr class="item3">
            <th><span class="Tuesday">Tuesday</span></th>
            <?php foreach($Tuesday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
          </tr>
          <tr class = "item2">
            <th><span class="Wednesday">Wednesday</span></th>
            <?php foreach($Wednesday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
          </tr>
          <tr class = "item3">
            <th><span class="Thursday">Thursday</span></th>
            <?php foreach($Thursday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
          </tr>
          <tr class = "item2">
            <th><span class="Friday">Friday</span></th>
            <?php foreach($Friday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
          </tr>
          <tr class = "item3">
            <th><span class="Saturday">Saturday</span></th>
            <?php foreach($Saturday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
            <!-- <td id="Keller5" onmouseover="Keller5Hover();" onmouseleave="Keller5Unhover();">
              <span id="day5class1">CSCI 3081</span><br>
              <span class="time" id="day5time1">11:15 AM - 12:05 PM</span><br>
              <span id="day5location1">Keller Hall 1-250, MN</span><br>
              <a id="day5git" href="https://github.umn.edu/umn-csci-3081F17">Github</a>
            </td> -->
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
