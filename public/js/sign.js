/**
 * Created by Administrator on 2016/11/10.
 */
$(function(){
   $('.sign-form input:not(:last-child)').focus(function(){
       $('.login-notice').remove();
   });
   $('#btn').click(function(){
       var stNumber = $('#stNumber').val();
       var username = $('#username').val();
       $.ajax({
           type : 'post',
           url : '/sign',
           data : {
               username : username,
               stNumber : stNumber
           },
           success:function(data){
              /* $('.login-notice').remove();*/
               judgeUser(data);
           },
           error:function(){
               console.log('XHR error');
           }
       });
       var judgeUser = function(data){
           if(data=='1'){
               $('#username').after('<span class="login-notice">签到成功</span>');
               $('#stNumber').val('');
               $('#username').val('');
           }else if(data=='2'){
               $('#username').after('<span class="login-notice">已签到</span>');
           }else if(data=='3'){
               $('#username').after('<span class="login-notice">未报名</span>');
           }else{
               console.log('error');
           }
       }
   });
});
