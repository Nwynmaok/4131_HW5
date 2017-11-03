<!doctype html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="style.css">
  <Title>Calendar Input</Title>
  <script src="script.js"></script>
</head>

<body>
  <h1>Calendar Input</h1>
  <div class="menu">
    <nav>
      <a href="calendar.html">My Calendar</a>
      <a href="form.html">Form Input</a>
    </nav>
  </div>
  <br>
  <form name = "myForm" action="http://www-users.cselabs.umn.edu/~tulaj001/form_handler.php" onsubmit="return validateForm()" method="get">
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
            <input type = "submit" value = "Submit">
          </th>
        </tr>
      </table>
    </div>
  </form>
  <footer>
    <br>
    Tested in Chrome, Safari and Firefox
  </footer>
</body>
</html>
