<html>
<head>
  <title>BeamStats</title>
  <!-- Jetpack Open Graph Tags -->
<meta property="og:type" content="website" />
<meta property="og:title" content="BeamStats" />
<meta property="og:description" content="Welcome To The BeamStats Page Just Enter your Beam Name Your Good To Go" />
<meta property="og:url" content="http://team.thespacearmy.x10.mx/Beam/" />
<meta property="og:site_name" content="http://team.thespacearmy.x10.mx/Beam/" />
<meta property="og:image" content="https://surl.im/ExIm" />
<meta property="og:locale" content="en_US" />
 <link href="https://file.myfontastic.com/AhiuGLVii9n5qMJondbGhk/icons.css" rel="stylesheet">

  <meta charset="UTF-8">
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <link rel="stylesheet" href="https://surl.im/eB9a" type="text/css"/>
 <link rel="shortcut icon" type="image/x-icon" href="https://surl.im/cxHk">
    <meta name="description" content="Welcome To The BeamStats Page Just Enter your Beam Name Your Good To Go.">

</head>
<body>
<center>

    Welcome To The <i class="icon icon-beam"> BeamStats</i> Page Just Enter your Beam Name Your Good To Go.
    </center>  
    </div>
  <center>
</div>
<div class="container">
<center>
    <input type="text" name="inputText" class="form-control" style="width: 200px;display: inline-block;">
      <input type="submit" name="SubmitButton" class="btn btn-success">
   
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
        echo '<h1><font color="#FFFFFF"<i class="icon icon-beam"> Beam Channel does not exist</font></h1>';
        return;
      }
      echo "<center><img src='https://beam.pro/api/v1/users/" . $obj['user']['id'] . "/avatar' width='100px' height='100px' style='border:3px solid #fff'>";
      echo "<h1>" . $obj['user']['username'] . '</h1><h3>';
      echo "<b>Followers: </b>" . number_format($obj['numFollowers']);
      echo "<br><b>Experience: </b>" . $obj['user']['experience'];
      echo "<br><b>Sparks: </b>" . $obj['user']['sparks'];
      echo "<br><b>Channel id: </b>" . $obj['user']['id'];
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
