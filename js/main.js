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

    $.get("https://mixer.com/api/v1/channels/" + $('#inputText').val(), "", function(data){
         //var Avatar = "https://mixer.com/api/v1/users/" + data['avatarUrl'] + "/avatar";
       var Avatar = "https://mixer.com/api/v1/users/" + data['avatarUrl'] + "";
       // var Avatar = data['user']['avatar'];
         var Username = data['user']['username'];
         var Followers = data['numFollowers'];
         var Partnered = data['partnered'];
         var Tetris = data['interactive'];
         var Audience = data['audience'];
         var Experience = data['user']['experience'];
         var cover = data['cover']['url'];
         var lvls = data['user']['level'];
         var Sparks = data['user']['sparks'];
         var ChannelID = data['user']['id'];
         var HostID = data['hosteeId'];
         var Tetrisid = data['tetrisGameId'];
         var Coverid = data['coverId'];
         var levelRestrict = data['preferences']['channel:users:levelRestrict'];
         var Thumbnail = data['thumbnailId'];
         var StreamMute = data['preferences']['channel:player:muteOwn'];
         var FollowNotify = data['preferences']['channel:notify:follow'];
         var SubscribeNotify = data['preferences']['channel:notify:subscribe'];
         var TweetNotify = data['preferences']['channel:tweet:enabled'];
        var Hypezone = data['preferences']['hypezone:allow'];
         var TotalViews = data['viewersTotal'];
         var transcoding = data['transcodingEnabled'];
         var Online = data['online'];
         if(data['type'] != null){
            var lastPlayed = data['type']['name'];
         }else{
            var lastPlayed = "None";
         }
         if(HostID = null){
            var HostID = null;
         }else{
            var HostID = "No ID";
         }
         if(Tetrisid = undefined){
            var Tetrisid = undefined;
         }else{
            var Tetrisid = "No ID";
         }
         if(transcoding = undefined){
            var transcoding = "Off";
         }else{
            var transcoding = "On";
         }
         if(Partnered = false){
            var Partnered = "No";
         }else{
            var Partnered = "Yes";
         }
         if(Tetris = false){
            var Tetris = "No";
         }else{
            var Tetris = "Yes";
         }
         if(StreamMute = false){
            var StreamMute = "Off";
         }else{
            var StreamMute = "On";
         }
         if(SubscribeNotify = false){
            var SubscribeNotify = "Off";
         }else{
            var SubscribeNotify = "On";
         }
         if(TweetNotify = false){
            var TweetNotify = "Off";
         }else{
            var TweetNotify = "On";
         }
         if(FollowNotify = false){
            var FollowNotify = "Off";
         }else{
            var FollowNotify = "On";
         }
                if(Hypezone = false){
            var Hypezone = "No";
         }else{
            var Hypezone = "Yes";
         }
console.log("Someone Pressed The Button \nFollowers:"+Followers+"\nLevels:"+lvls+"\Sparks:"+Sparks+"\nLive:"+Online+"\nAvatar:"+Avatar)
         var joined = data['createdAt'];
         var html = '<center><img src="' + Avatar + '"class="img-circle"width="100px" height="100px" style="border:4px solid black">';
          html = '<center><img src="' + cover + '"class="img-circle"width="100px" height="100px" style="border:4px solid black">';
         html += '<h1><center><span class="label label-success">' + Username + '</h1>';
         html += '<br><b><span class="label label-primary">----------</b>'
          html += '<br><b><span class="label label-primary"><font size="3" color="white">Url Link: <a href="https://mixer.com/' + Username + '">Mixer.com/'+ Username +'</a></b>';
         html += '<br><b><span class="label label-primary">Followers: ' + Followers+ '</b>';
         html += '<br><b><span class="label label-primary">Partnered: ' + Partnered +'</b>';
         html += '<br><b><span class="label label-primary">Total Views: ' + TotalViews +'</b>';
         html += '<br><b><span class="label label-danger">---Points---</b>'
         html += '<br><b><span class="label label-warning"style="color: black;">Level: ' + lvls +'</b>';
         html += '<br><b><span class="label label-warning"style="color: black;">Experience: ' + Experience +'</b>';
         html += '<br><b><span class="label label-warning"style="color: black;">Sparks: ' + Sparks +'</b></i>';
         html += '<br><b><span class="label label-primary">---ID---</b>'
         html += '<br><b><span class="label label-primary">Tetris Game ID: ' + Tetrisid+ '</b>';
         html += '<br><b><span class="label label-primary">Host ID: ' + HostID+ '</b>';
         html += '<br><b><span class="label label-primary">Channel ID: ' + ChannelID+ '</b>';
         html += '<br><b><span class="label label-primary">Cover ID: ' + Coverid+ '</b>';
         html += '<br><b><span class="label label-primary">Thumbnail ID: ' + Thumbnail+ '</b>';
         html += '<br><b><span class="label label-primary">---Preference---</b>'
         html += '<br><b><span class="label label-info"style="color: black;">interactive:' + Tetris +'</b>';
         html += '<br><b><span class="label label-info"style="color: black;">Audience:' + Audience +'</b>';
         html += '<br><b><span class="label label-info"style="color: black;">SelfStreamMute:' + StreamMute +'</b>';
         html += '<br><b><span class="label label-info"style="color: black;">HypeBot FollowNotify:' + FollowNotify +'</b>';
         html += '<br><b><span class="label label-info"style="color: black;">HypeBot SubNotify:' + SubscribeNotify +'</b>';
         html += '<br><b><span class="label label-info"style="color: black;">TweetNotify:' + TweetNotify +'</b>';
         html += '<br><b><span class="label label-info"style="color: black;">Transcoding:' + transcoding +'</b>';
         html+= '<br><b><span class="label label-info"style="color:black;">Chat Level Restrict:'+levelRestrict+'</b>';
         html+= '<br><b><span class="label label-info">Hypezone:'+Hypezone+'</b>';
         html += '<br><b><span class="label label-primary">------------</b>'
         html += "<br>";
         if(Online){
             html += '<br><b><font color="White"><a href="https://mixer.com/' + Username + '">Online</a></font></b>';
         }else{
             html += '<br><b><font color="red">Offline</font></b>';
         }
         html+= '<br><b><span class="label label-primary">Last Played:'+lastPlayed+'</b>';
         html += '<br><b><span class="label label-primary">Joined on: '+joined+' </b>'.replace('T', ' at ');
         $('.profile').html(html);
      }).fail(function(data){
            html = '<p><span class="label label-warning"style="color: black;">A Mixer user with that name does not exist.';
             $('.profile').html(html);
            return;
      });;
}
