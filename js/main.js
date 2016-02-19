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
         var Tetrisid = data['tetrisGameId'];
         var Cover = data['coverId'];
         var thumbnail = data['thumbnailId'];
         var StreamMute = data['preferences']['channel:player:muteOwn'];
         var FollowNotify = data['preferences']['channel:notify:follow'];
         var TotalViews = data['viewersTotal'];
         var te = data['transcodingEnabled'];
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
          html += '<br><b>Total Views: </b>' + TotalViews;
         html += '<br><b>---Points---</b>'
         html += '<br><b>Levels: </b>' + lvls
         html += '<br><b>Experience: </b>' + Experience;
         html += '<br><b>Sparks: </b>' + Sparks;
         html += '<br><b>---ID---</b>'
         html += '<br><b>Tetris Game ID: </b>' + Tetrisid;
         html += '<br><b>Channel ID: </b>' + ChannelID;
         html += '<br><b>Cover ID: </b>' + Cover;
         html += '<br><b>Thumbnail ID: </b>' + thumbnail;
         html += '<br><b>---Preference---</b>'
         html += '<br><b>interactive: </b>' + Tetris;
         html += '<br><b>Audience: </b>' + Audience;
         html += '<br><b>StreamMute: </b>' + StreamMute;
         html += '<br><b>transcoding: </b>' + te;
         html += '<br><b>------------</b>'
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
