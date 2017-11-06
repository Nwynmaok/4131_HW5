<!doctype html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="style.css">
  <Title>Calendar Input</Title>
  <script src="script.js"></script>
</head>

<?php
  if (isset($_POST['myEvent'])) {
    $filename = 'calendar.txt';

    $eventname = $_POST["eventname"];
    $day = $_POST["day"];
    $starttime = $_POST["starttime"];
    $endtime = $_POST["endtime"];
    $location = $_POST["location"];

    if (file_exists($filename)) {
      // do nothing
    } else {
      file_put_contents($filename, '');
    }
    $json = json_decode(file_get_contents($filename), TRUE);
    $eventCount = count($json);
    $eventnum = "event" . $eventCount;

    $json[$eventnum] = array("eventname" => $eventname, "day" => $day, "starttime" => $starttime, "endtime" => $endtime, "location" => $location);
    file_put_contents($filename, json_encode($json));
    header('Location: calendar.php');
  }

  if (isset($_POST['clearEvents'])) {
    file_put_contents('calendar.txt', "");
    header('Location: calendar.php');
  }


?>

<body>
  <h1>Calendar Input</h1>
  <div class="menu">
    <nav>
      <a href="calendar.php">My Calendar</a>
      <a href="form.php">Form Input</a>
    </nav>
  </div>
  <br>
  <form name = "myForm" action="form.php" onsubmit="return validateForm()" method="POST">
    <div class="form">
      <table>
        <tr>
          <th>Event Name:</th>
          <th>
            <input type="text" name = "eventname" placeholder="">
          </th>
        </tr>
        <tr>
          <th>Day of the week:</th>
          <th>
            <select name="day">
              <option value="">Select Day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </th>
        </tr>
        <tr>
          <th>Start Time:</th>
          <th>
            <input type="time" name = "starttime">
          </th>
        </tr>
        <tr>
          <th>End Time:</th>
          <th>
            <input type="time" name = "endtime">
          </th>
        </tr>
        <tr>
          <th>Location:</th>
          <th>
            <input type="text" name = "location" placeholder="">
          </th>
        </tr>
        <tr>
          <th></th>
          <th>
            <input type = "submit" value = "Submit" name="myEvent">
            </form>
          </th>
        </tr>
        <tr>
          <th></th>
          <th>
            <form name = "clearCal" action="form.php" onsubmit="return confirm('Are you sure you want to delete all events? You cannot undo this.');" method="POST">
              <input type="submit" value="Clear all calendar events" name="clearEvents">
            </form>
          </th>
        </tr>
      </table>
    </div>
  <footer>
    <br>
    Tested in Chrome, Safari and Firefox
  </footer>
</body>
</html>
