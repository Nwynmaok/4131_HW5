<!doctype html>

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
  usort($Sunday, function($a, $b) {
    return $a['starttime'] - $b['starttime'];
  });
  usort($Monday, function($a, $b) {
    return $a['starttime'] - $b['starttime'];
  });
  usort($Tuesday, function($a, $b) {
    return $a['starttime'] - $b['starttime'];
  });
  usort($Wednesday, function($a, $b) {
    return $a['starttime'] - $b['starttime'];
  });
  usort($Thursday, function($a, $b) {
    return $a['starttime'] - $b['starttime'];
  });
  usort($Friday, function($a, $b) {
    return $a['starttime'] - $b['starttime'];
  });
  usort($Saturday, function($a, $b) {
    return $a['starttime'] - $b['starttime'];
  });
?>

<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="script.js"></script>
  <script>
    <?php foreach($Monday as $row) : ?>
        var myEvent = <?php echo(json_encode($row)); ?>;
        pushBackEvents(myEvent);
    <?php endforeach; ?>
    <?php foreach($Tuesday as $row) : ?>
        var myEvent = <?php echo(json_encode($row)); ?>;
        pushBackEvents(myEvent);
    <?php endforeach; ?>
    <?php foreach($Wednesday as $row) : ?>
        var myEvent = <?php echo(json_encode($row)); ?>;
        pushBackEvents(myEvent);
    <?php endforeach; ?>
    <?php foreach($Thursday as $row) : ?>
        var myEvent = <?php echo(json_encode($row)); ?>;
        pushBackEvents(myEvent);
    <?php endforeach; ?>
    <?php foreach($Friday as $row) : ?>
        var myEvent = <?php echo(json_encode($row)); ?>;
        pushBackEvents(myEvent);
    <?php endforeach; ?>
    <?php foreach($Saturday as $row) : ?>
        var myEvent = <?php echo(json_encode($row)); ?>;
        pushBackEvents(myEvent);
    <?php endforeach; ?>
    <?php foreach($Sunday as $row) : ?>
        var myEvent = <?php echo(json_encode($row)); ?>;
        pushBackEvents(myEvent);
    <?php endforeach; ?>
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
      <?php
        $emptyjson = array_filter($json);
        if (empty($emptyjson)) {
          echo 'There are no events on your calendar. Please visit the Form Input to add some events.';
        }
      ?>
    </div>
    <div class="container2">
      <div class="table">
        <table class="item1">
          <?php
            $emptySun = array_filter($Sunday);
            if (!empty($emptySun)) {
              echo  '<tr class = \'item2\'><th><span class="Sunday">Sunday</span></th>';
            }
          ?>
            <?php foreach($Sunday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
          <?php
            if(!empty($emptySun)) {
              echo '</tr>';
            }
          ?>
          <?php
            $emptyMon = array_filter($Monday);
            if (!empty($emptyMon)) {
              echo  '<tr class = \'item2\'><th><span class="Monday">Monday</span></th>';
            }
          ?>
            <?php foreach($Monday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
          <?php
            if(!empty($emptyMon)) {
              echo '</tr>';
            }
          ?>
          <?php
            $emptyTue = array_filter($Tuesday);
            if (!empty($emptyTue)) {
              echo  '<tr class = \'item2\'><th><span class="Tuesday">Tuesday</span></th>';
            }
          ?>
            <?php foreach($Tuesday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
          <?php
            if(!empty($emptyTue)) {
              echo '</tr>';
            }
          ?>
          <?php
            $emptyWed = array_filter($Wednesday);
            if (!empty($emptyWed)) {
              echo  '<tr class = \'item2\'><th><span class="Wednesday">Wednesday</span></th>';
            }
          ?>
            <?php foreach($Wednesday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
          <?php
            if(!empty($emptyWed)) {
              echo '</tr>';
            }
          ?>
          <?php
            $emptyThur = array_filter($Thursday);
            if (!empty($emptyThur)) {
              echo  '<tr class = \'item2\'><th><span class="Thursday">Thursday</span></th>';
            }
          ?>
          <?php foreach($Thursday as $row) : ?>
            <td><?php echo $row['eventname'] ?></br>
            <?php echo $row['location'] ?></br>
            <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
          <?php endforeach; ?>
          <?php
            if(!empty($emptyThur)) {
              echo '</tr>';
            }
          ?>
          <?php
            $emptyFri = array_filter($Friday);
            if (!empty($emptyFri)) {
              echo  '<tr class = \'item2\'><th><span class="Friday">Friday</span></th>';
            }
          ?>
            <?php foreach($Friday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
          <?php
            if(!empty($emptyFri)) {
              echo '</tr>';
            }
          ?>
          <?php
            $emptySat = array_filter($Saturday);
            if (!empty($emptySat)) {
              echo  '<tr class = \'item2\'><th><span class="Saturday">Saturday</span></th>';
            }
          ?>
            <?php foreach($Saturday as $row) : ?>
              <td><?php echo $row['eventname'] ?></br>
              <?php echo $row['location'] ?></br>
              <?php echo $row['starttime'] . '-' . $row['endtime'] ?></td>
            <?php endforeach; ?>
          <?php
            if(!empty($emptySat)) {
              echo '</tr>';
            }
          ?>
        </table>
      </div>
  </div>

  <div id="Maps">
    <div id = "map">
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgmOCL_dIeyMAlX2y00iUqAzBN5j7svdo&libraries=places&callback=initMap">
      </script>
    </div>
  </div>
  </div>
  <footer id="footer">
    <br>
    Tested in Chrome, Safari and Firefox
  </footer>
</body>
</html>
