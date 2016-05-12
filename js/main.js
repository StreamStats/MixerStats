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
         var SSAvatar = "https://beam.pro/api/v1/users/" + data['user']['id'] + "/avatar";
         var SSUsername = data['user']['username'];
         var SSFollowers = data['numFollowers'];
         var SSPartnered = data['partnered'];
         var SSTetris = data['interactive'];
         var SSAudience = data['audience'];
         var SSExperience = data['user']['experience'];
         var SSlvls = data['user']['level'];
         var SSSparks = data['user']['sparks'];
         var SSChannelID = data['user']['id'];
         var SSTetrisid = data['tetrisGameId'];
         var SSCoverid = data['coverId'];
         var SSThumbnail = data['thumbnailId'];
         var SSStreamMute = data['preferences']['channel:player:muteOwn'];
         var SSFollowNotify = data['preferences']['channel:notify:follow'];
         var SSSubscribeNotify = data['preferences']['channel:notify:subscribe'];
         var SSTweetNotify = data['preferences']['channel:tweet:enabled'];
         var SSTotalViews = data['viewersTotal'];
         var SSte = data['transcodingEnabled'];
         var SSOnline = data['online'];
         if(data['type'] != null){
            var SSlastPlayed = data['type']['name'];
         }else{
            var SSlastPlayed = "None";
         }
         var SSjoined = data['createdAt'];
         
         var html = '<center><img src="' + SSAvatar + '"class="img-circle"width="100px" height="100px" style="border:4px solid black">';
         
         html += '<h1><center><span class="label label-success">' + SSUsername + '</h1>';
         html += '<br><b><span class="label label-primary">----------</b>'
          html += '<br><b><span class="label label-primary"><font size="3" color="white">Url Link: <a href="https://beam.pro/' + Username + '">Beam.pro/'+ Username +'</a></b>';
         html += '<br><b><span class="label label-primary">Followers: ' + SSFollowers+ '</b>';
         html += '<br><b><span class="label label-primary">Partnered: ' + SSPartnered +'</b>';
         html += '<br><b><span class="label label-primary">Total Views: ' + SSTotalViews +'</b>';
         html += '<br><b><span class="label label-danger">---Points---</b>'
         html += '<br><b><span class="label label-warning"style="color: black;">Level: ' + SSlvls +'</b>';
         html += '<br><b><span class="label label-warning"style="color: black;">Experience: ' + SSExperience +'</b>';
         html += '<br><b><span class="label label-warning"style="color: black;">Sparks: ' + SSSparks +'</b></i>';
         html += '<br><b><span class="label label-primary">---ID---</b>'
         html += '<br><b><span class="label label-primary">Tetris Game ID: ' + SSTetrisid+ '</b>';
         html += '<br><b><span class="label label-primary">Channel ID: ' + SSChannelID+ '</b>';
         html += '<br><b><span class="label label-primary">Cover ID: ' + SSCoverid+ '</b>';
         html += '<br><b><span class="label label-primary">Thumbnail ID: ' + SSThumbnail+ '</b>';
         html += '<br><b><span class="label label-primary">---Preference---</b>'
         html += '<br><b><span class="label label-info"style="color: black;">interactive:' + SSTetris +'</b>';
         html += '<br><b><span class="label label-info"style="color: black;">Audience:' + SSAudience +'</b>';
         html += '<br><b><span class="label label-info"style="color: black;">SelfStreamMute:' + SSStreamMute +'</b>';
         html += '<br><b><span class="label label-info"style="color: black;">BeamBot FollowNotify:' + SSFollowNotify +'</b>';
         html += '<br><b><span class="label label-info"style="color: black;">BeamBot SubNotify:' + SSSubscribeNotify +'</b>';
         html += '<br><b><span class="label label-info"style="color: black;">TweetNotify:' + SSTweetNotify +'</b>';
         html += '<br><b><span class="label label-info"style="color: black;">Transcoding:' + SSte +'</b>';
         html += '<br><b><span class="label label-primary">------------</b>'
         html += "<br>";
         if(Online){
             html += '<br><b><font color="White"><a href="https://beam.pro/' + SSUsername + '">Online</a></font></b>';
         }else{
             html += '<br><b><font color="red">Offline</font></b>';
         }
         html+= '<br><b><span class="label label-primary">Last Played:'+SSlastPlayed+'</b>';
         html += '<br><b><span class="label label-primary">Joined on: '+SSjoined+' </b>'.replace('T', ' at ');
         $('.profile').html(html);
      }).fail(function(data){
            html = '<p><span class="label label-warning"style="color: black;">A Beam user with that name does not exist.';
             $('.profile').html(html);
            return;
      });;
}
