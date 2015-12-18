<html>
<head>
  <title>BeamStats</title>
  <meta charset="UTF-8">
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <link rel="stylesheet" href="css/main.css" type="text/css"/>
  <link rel="icon" href="http://tsg.x10.mx/favicon.ico" sizes="16x16">
</head>
<body>

    Welcome To The BeamStats Page Just Enter your Beam Name Your Good To Go.
  </div>
  <center>
</div>
<div class="container">
<center>
    <form action="" method="post">
      <h3>Enter Your Beam Username!</h3>
      <input type="text" name="inputText"/>
      <input type="submit" name="SubmitButton"/>
    </form>
   
    <br>
 
    <?php
    if (isset($_POST['SubmitButton'])) { //check if form was submitted
      $input = $_POST['inputText']; //get input text
      click($input);
    }
    function click($name)
    {
      $url = 'https://beam.pro/api/v1/channels/' . $name;
      $obj = json_decode(@file_get_contents($url), true);
      if ($obj == "") {
        echo '<h1><font color="#FFFFFF">Channel does not exist</font></h1>';
        return;
      }
      echo "<center><img src='https://beam.pro/api/v1/users/" . $obj['user']['id'] . "/avatar' width='100px' height='100px' style='border:3px solid #fff'>";
      echo "<h1>" . $obj['user']['username'] . '</h1><h3>';
      echo "<b>Followers: </b>" . number_format($obj['numFollowers']);
      echo "<br><b>BeamPoints: </b>" . $obj['user']['points'];
      echo "<br><b>Twitter: </b> " . $obj['user']['social']['twitter'];
      echo " <br><b>Total Views</b>: " . number_format($obj['viewersTotal']);
      echo '<br>';
      echo "<br><b>Current Status: </b>" . ($obj['online'] == true ? 'Online' : 'Offline');
      echo "<br><b>Last Played: </b>" . $obj['type']['name'];
      $date = str_replace("T", " at ", $obj['createdAt']);
      $date = str_replace("Z", "", $date);
      echo("<br><b>Joined Beam: </b>" . $date);
    }
 
    ?>
</body>
</html>