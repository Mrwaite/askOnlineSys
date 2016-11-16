/**
 * Created by Administrator on 2016/10/15.
 */
window.onload = function(){
    var hour,min,second;
    var timepiece = document.getElementById('timepiece');
    if (localStorage.startTime) {
        time = (new Date().getTime() - localStorage.startTime) / 1000;
    } else {
        time = 0;
    }
    console.log(time);
    timer = setInterval(updateTime,1000);
    function format(time){
        return time.toString().replace(/^(\d)$/,'0$1');
    }
    function updateTime(){
        if (time >= 30) {
            alert("考试结束，系统将自动保存你的答案，请等待面试结果");
            clearInterval(timer);
            var answer_1 = [];
            var answer_2 = [];
            var data = [
                {username: localStorage.name}
            ];
            $('#main_test_content_0 div').each(function () {
                answer_1.push($(this).html());
            });
            $('#main_test_content_content_0 textarea').each(function () {
                answer_2.push($(this).val());
            });
            $('#main_test_content_1 div').each(function () {
                answer_1.push($(this).html());
            });
            $('#main_test_content_content_1 textarea').each(function () {
                answer_2.push($(this).val());
            });
            while (1) {
                var a = answer_1.shift();
                if(a==undefined){
                    break;
                }
                var b = answer_2.shift();
                var tran={
                    topic : '',
                    answer : ''
                };
                tran.topic=a;
                tran.answer = b;
                data.push(tran);
            }
            $.ajax({
                url:'/save',
                type: 'post',
                contentType: 'application/json',
                data:JSON.stringify(data),
                success: function (data) {
                    window.location.href="http://localhost:3000/login.html";
                    localStorage.clear();
                },
                error: function () {
                    console.log('XHR error');
                }
            })
        }
        time++;
        hour = parseInt(time / 3600);
        min = parseInt(time % 3600 / 60);
        second = parseInt(time % 3600 % 60);
        timepiece.innerHTML = ''+format(hour) +':'+ format(min) +':'+ format(second) +'';
        return 0;
    }

};