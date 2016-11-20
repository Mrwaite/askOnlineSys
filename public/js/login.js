/**
 * Created by Administrator on 2016/10/19.
 */
$(function(){
    $('#username').focus(function(){
        $('.login_content_form span').remove();
    });
    $('#suNumber').focus(function () {
        $('.login_content_form span').remove();
    });
    $('#btn').click(function(){
        $('.login_content_form span').remove();
        var username = $('#username').val();
        var suNumber = $('#suNumber').val();
        $.ajax({
            url:'/login',
            type:'post',
            cache:false,
            async:true,
            dataType:'json',
            data:{
                username: username,
                stNumber: suNumber
            },
            success:function(data){
                judgeUser(data);
            },
            error:function(){
                console.log('get login value false');
            }
        })
    });

    /*
    *传给后端username 接受1,2,3 
    * 1为报名未参加面试
    * 2为报名已参加面试
    * 3为霸面
    * */
    var judgeUser = function(data){
        if(data.code==1){
            var username = $('#username').val();
            if (localStorage.name && username != localStorage.name) {
                localStorage.clear();
            }
            localStorage.name = username;
            var url = 'http://localhost:3000/written_test.html';
            window.location.href=url;
        }else if(data.code==2){
            $('#username').after('<span class="login_content_form_notice">* 你已经参与过笔试啦..</span>');
        }else if(data.code==3){
            $('#username').after('<span class="login_content_form_notice">* 你是来霸面的咩..</span>');
        }else if(data.code==4){
            $('#username').after('<span class="login_content_form_notice">* 你还没有去签到喵..</span>');
        }
    }
});