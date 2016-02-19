$(document).ready(function(event){
   $('#submit').click(function(event){
      getData();
      
   });
   $('#formThing').submit(function(event){
      event.preventDefault();
      getData();
   });
});
function getData(){
    $.get('https://beam.pro/api/v1/channels/' + $('#inputText').val(), "", function(data){
         var Avatar = "https://beam.pro/api/v1/users/" + data['user']['id'] + "/avatar";
         var Username = data['user']['username'];
         var Followers = data['numFollowers'];
         var Partnered = data['partnered'];
         var Tetris = data['interactive'];
         var Audience = data['audience'];
         var Experience = data['user']['experience'];
         var lvls = data['user']['level'];
         var Sparks = data['user']['sparks'];
         var ChannelID = data['user']['id'];
         var TotalViews = data['viewersTotal'];
         var te = data['transcodingEnabled'];
         var ftl = data['ftl'];
         var hasVod = data['hasVod'];
         var suspended = data['suspended'];
         var Online = data['online'];
         if(data['type'] != null){
            var lastPlayed = data['type']['name'];
         }else{
            var lastPlayed = "None";
         }
         var joined = data['createdAt'];
         var html = '<center><img src="' + Avatar + '"width="100px" height="100px" style="border:3px solid #fff">';
         html += '<h1>' + Username + '</h1>';
         html += '<br><b>Followers: </b>' + Followers;
         html+= '<br><b>Partnered: </b>' + Partnered;
         html += '<br><b>FTL: </b>' + ftl;
         html += '<br><b>HasVod: </b>' + hasVod;
         html += '<br><b>suspended: </b>' + suspended;
         html += '<br><b>interactive: </b>' + Tetris;
         html += '<br><b>Audience: </b>' + Audience;
         html += '<br><b>Levels: </b>' + lvls
         html += '<br><b>Experience: </b>' + Experience;
         html += '<br><b>Sparks: </b>' + Sparks;
         html += '<br><b>Channel ID: </b>' + ChannelID;
         html += '<br><b>Total Views: </b>' + TotalViews;
         html += '<br><b>transcoding: </b>' + te;
         html += "<br>";
         if(Online){
             html += '<br><b><font color="White"><a href="https://beam.pro/' + Username + '">Online</a></font></b>';
         }else{
             html += '<br><b><font color="red">Offline</font></b>';
         }
         html+= '<br><b>Last Played: </b>' + lastPlayed;
         html += '<br><b>Joined on: </b>' + joined.replace('T', ' at ');
         $('.profile').html(html);
      }).fail(function(data){
            html = '<h1>A Beam user with that name does not exist.';
             $('.profile').html(html);
            return;
      });;
}
