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
         var Coverid = data['coverId'];
         var Thumbnail = data['thumbnailId'];
         var StreamMute = data['preferences']['channel:player:muteOwn'];
         var FollowNotify = data['preferences']['channel:notify:follow'];
         var SubscribeNotify = data['preferences']['channel:notify:subscribe'];
         var TweetNotify = data['preferences']['channel:tweet:enabled'];
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
         html += '<h1><span class="label label-success">' + Username + '</h1>';
         html += '<br><b><span class="label label-primary">----------</b>'
          html += '<br><b><span class="label label-primary"><font size="3" color="white">Url Link: <a href="https://beam.pro/' + Username + '">Beam.pro/'+ Username +'</a></b>';
         html += '<br><b><span class="label label-primary">Followers: ' + Followers+ '</b>';
         html += '<br><b><span class="label label-primary">Partnered: ' + Partnered +'</b>';
         html += '<br><b><span class="label label-primary">Total Views: ' + TotalViews +'</b>';
         html += '<br><b><span class="label label-danger">---Points---</b>'
         html += '<br><b><span class="label label-warning"style="color: black;">Level: ' + lvls +'</b>';
         html += '<br><b><span class="label label-warning"style="color: black;">Experience: ' + Experience +'</b>';
         html += '<br><b><span class="label label-warning"style="color: black;">Sparks: ' + Sparks +'</b></i>';
         html += '<br><b><span class="label label-primary">---ID---</b>'
         html += '<br><b><span class="label label-primary">Tetris Game ID: ' + Tetrisid+ '</b>';
         html += '<br><b><span class="label label-primary">Channel ID: ' + ChannelID+ '</b>';
         html += '<br><b><span class="label label-primary">Cover ID: ' + Coverid+ '</b>';
         html += '<br><b><span class="label label-primary">Thumbnail ID: ' + Thumbnail+ '</b>';
         html += '<br><b><span class="label label-primary">---Preference---</b>'
         html += '<br><b><span class="label label-info">interactive:' + Tetris +'</b>';
         html += '<br><b><span class="label label-info">Audience:' + Audience +'</b>';
         html += '<br><b><span class="label label-info">SelfStreamMute:' + StreamMute +'</b>';
         html += '<br><b><span class="label label-info">BeamBot FollowNotify:' + FollowNotify +'</b>';
         html += '<br><b><span class="label label-info">BeamBot SubNotify:' + SubscribeNotify +'</b>';
         html += '<br><b><span class="label label-info">TweetNotify:' + TweetNotify +'</b>';
         html += '<br><b><span class="label label-info">Transcoding:' + te +'</b>';
         html += '<br><b><span class="label label-primary">------------</b>'
         html += "<br>";
         if(Online){
             html += '<br><b><font color="White"><a href="https://beam.pro/' + Username + '">Online</a></font></b>';
         }else{
             html += '<br><b><font color="red">Offline</font></b>';
         }
         html+= '<br><b><span class="label label-primary">Last Played:'+lastPlayed+'</b>';
         html += '<br><b><span class="label label-primary">Joined on: '+joined+' </b>'.replace('T', ' at ');
         $('.profile').html(html);
      }).fail(function(data){
            html = '<p><span class="label label-warning"style="color: black;">A Beam user with that name does not exist.';
             $('.profile').html(html);
            return;
      });;
}
