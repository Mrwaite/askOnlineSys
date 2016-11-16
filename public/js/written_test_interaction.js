/**
 * Created by Administrator on 2016/10/17.
 */
$(function(){
    var num = 0;
    var num_1 = 0;
    var answer_1 = [];
    var answer_2 = [];
    function getUrlParams(url) {
        if (!url) {
            url = window.location.href;
        }
        var arrUrl = url.split('?');
        if (typeof(arrUrl[1]) == 'string') {
            var u = arrUrl[1].split('&');
            var get = {};
            for (var i in u) {
                var j = u[i].split('=');
                get[decodeURIComponent(j[0])] = decodeURIComponent(j[1]);
            }
            return get;
        } else {
            return {};
        }
    }
    var transfer = function (item) {
        for (var i = 0; i < item.type[0]; i++) {
            $('#main_test_content_title_0').append('<h2 id="main_test_content_title_name_' + i + '">' + (i + 1) + '.' + item.tiankong[i][0] + '</h2>');
            $('#main_test_content_0').append('<div id="main_test_content_item_' + i + '">' + item.tiankong[i][1] + '</div>');
            $('#main_test_content_content_0').append('<textarea class="main_test_content_explain" id="main_test_content_explain_' + i + '" placeholder="写出你的答案和思路٩(◦`꒳´◦)۶">' + item.answer[i] + '</textarea>');
            $('#main_menu_0').append('<p id="main_menu_grade_' + i + '"><span>试题难度 :</span> <span class="stnandu"></span></p>');
            $('#main_menu_item_list_0').append('<span id="main_menu_item_list_id_0_' + i + '">' + (i + 1) + '</span>');
        }
        for (var i = 0; i < item.type[1]; i++) {
            $('#main_test_content_title_0').append('<h2 id="main_test_content_title_name_' + (i + item.type[0]) + '">' + (i + item.type[0] + 1) + '.' + item.jianda[i][0] + '</h2>');
            $('#main_test_content_0').append('<div id="main_test_content_item_' + (i + item.type[0]) + '">' + item.jianda[i][1] + '</div>');
            $('#main_test_content_content_0').append('<textarea class="main_test_content_explain" id="main_test_content_explain_' + (i + item.type[0]) + '" placeholder="写出你的答案和思路٩(◦`꒳´◦)۶">' + item.answer[i + 4] + '</textarea>');
            $('#main_menu_0').append('<p id="main_menu_grade_' + (i + item.type[0]) + '"><span>试题难度 :</span> <span class="stnandu"></span></p>');
            $('#main_menu_item_list_0').append('<span id="main_menu_item_list_id_0_' + i + '">' + (i + item.type[0] + 1) + '</span>');
        }
        $('#main_test_content_title_0').append('<h2 id="main_test_content_title_name_6"> ∞.技能树 </h2>');
        $('#main_test_content_0').append('<div id="main_test_content_item_6">网协期待每一个对技术怀有无限热忱的你，这道题，你可以向我们展示你的技能树。</div>');
        $('#main_test_content_content_0').append('<textarea class="main_test_content_explain" id="main_test_content_explain_6" placeholder="跪拜大神 ORZ">' + item.answer[6] + '</textarea>');
        $('#main_menu_0').append('<p id="main_menu_grade_6"><span>试题难度 :</span> <span class="stnandu"><img src="images/star-on.png" alt="grade"><img src="images/star-on.png" alt="grade"><img src="images/star-on.png" alt="grade"></span></p>');
        $('#main_menu_item_list_0').append('<span id="main_menu_item_list_id_0_6">1024</span>');
        $('#main_menu_item_list_id_0_0').addClass('item_2');
        for (var i = 0; i < item.type[2]; i++) {
            $('#main_test_content_title_1').append('<h2 id="main_test_content_title_name_1_' + i + '">' + (i + 1) + '.' + item.biancheng[i][0] + '</h2>');
            $('#main_test_content_1').append('<div id="main_test_content_item_1_' + i + '">' + item.biancheng[i][1] + '</div');
            $('#main_test_content_content_1').append('<textarea class="main_test_content_explain" id="main_test_content_explain_1_' + i + '" placeholder="写出你的答案和思路٩(◦`꒳´◦)۶">' + item.answer[i + 7] + '</textarea>');
            $('#main_menu_1').append('<p id="main_menu_grade_1_' + i + '"><span>试题难度 :</span> <span class="stnandu"></span></p>');
            $('#main_menu_item_list_1').append('<span id="main_menu_item_list_id_1_' + i + '">' + (i + 1) + '</span>');
        }
        $('#main_menu_item_list_id_1_0').addClass('item_2');
        for (var i = 0; i < item.type[0]; i++) {
            for (var j = 0; j < item.tiankong[i][2]; j++) {
                $('#main_menu_grade_' + i + ' .stnandu').append('<img src="images/star-on.png" alt="grade">');
            }
        }
        for (var i = 0; i < item.type[1]; i++) {
            for (var j = 0; j < item.jianda[i][2]; j++) {
                $('#main_menu_grade_' + (i + item.type[0]) + ' .stnandu').append('<img src="images/star-on.png" alt="grade">');
            }
        }
        for (var i = 0; i < item.type[2]; i++) {
            for (var j = 0; j < item.biancheng[i][2]; j++) {
                $('#main_menu_grade_1_' + i + ' .stnandu').append('<img src="images/star-on.png" alt="grade">');
            }
        }
        $('#main_test_content_content_0 textarea').each(function () { //checked textArea value
            $(this).val() && $('#main_menu_item_list_0 span').eq($(this).index()).addClass('item_1');
        });
        $('#main_test_content_content_1 textarea').each(function () { //checked textArea value
            $(this).val() && $('#main_menu_item_list_1 span').eq($(this).index()).addClass('item_1');
        });
        if (!JSON.parse(localStorage.flag)) {
            $('#item_2').hide();
            $('#aside_2').hide();
            for (var i = 1; i < 7; i++) {
                $('#main_test_content_title_name_' + i + '').hide();
                $('#main_test_content_item_' + i + '').hide();
                $('#main_test_content_explain_' + i + '').hide();
                $('#main_menu_grade_' + i + '').hide();
            }
        }
        else {
            $('#item_1').hide();
            $('#aside_1').hide();
            for (var i = 1; i < 2; i++) {
                $('#main_test_content_title_name_1_' + i + '').hide();
                $('#main_test_content_item_1_' + i + '').hide();
                $('#main_test_content_explain_1_' + i + '').hide();
                $('#main_menu_grade_1_' + i + '').hide();
            }
        }

        //menu_0
        $('#main_menu_item_list_0 span').click(function () {
            $('#main_test_content_content_0 textarea').each(function () { //checked textArea value
                $(this).val() && $('#main_menu_item_list_0 span').eq($(this).index()).addClass('item_1');
                if ($(this).val()) {
                    item.answer[$(this).index()] = $(this).val();
                }
            });
            localStorage.answer = JSON.stringify(item.answer);
            $('#main_menu_item_list_0 span').removeClass('item_2');
            $(this).addClass('item_2');
            $('#main_test_content_title_0 h2').hide();
            $('#main_test_content_title_0 h2').eq($(this).index()).show();
            $('#main_test_content_0 div').hide();
            $('#main_test_content_0 div').eq($(this).index()).show();
            $('#main_test_content_answer_0 input').hide();
            $('#main_test_content_answer_0 input').eq($(this).index()).show();
            $('#main_test_content_content_0 textarea').hide();
            $('#main_test_content_content_0 textarea').eq($(this).index()).show();
            $('#main_menu_0 p').hide();
            $('#main_menu_0 p').eq($(this).index()).show();
            num = $(this).index();
        });
        //menu_1
        $('#main_menu_item_list_1 span').click(function () {
            $('#main_test_content_content_1 textarea').each(function () { //checked textArea value
                $(this).val() && $('#main_menu_item_list_1 span').eq($(this).index()).addClass('item_1');
                if ($(this).val()) {
                    item.answer[$(this).index() + 7] = $(this).val();
                }
            });
            localStorage.answer = JSON.stringify(item.answer);
            console.log(localStorage.answer);
            $('#main_menu_item_list_1 span').removeClass('item_2');
            $(this).addClass('item_2');
            $('#main_test_content_title_1 h2').hide();
            $('#main_test_content_title_1 h2').eq($(this).index()).show();
            $('#main_test_content_1 div').hide();
            $('#main_test_content_1 div').eq($(this).index()).show();
            $('#main_test_content_content_1 textarea').hide();
            $('#main_test_content_content_1 textarea').eq($(this).index()).show();
            $('#main_menu_1 p').hide();
            $('#main_menu_1 p').eq($(this).index()).show();
            num_1 = $(this).index();
        });
    };
    if (localStorage.data) {
        var object = JSON.parse(localStorage.data);
        object.answer = [];
        object.answer = JSON.parse(localStorage.answer);
        transfer(object);
        console.log(localStorage.answer);
    } else {
        $.ajax({
            url: '/getTopic',
            type: 'GET',
            cache: false,
            async: true,
            dataType: 'json',
            success: function (data) {
                data.answer = ['', '', '', '', '', '', '', '', ''];
                localStorage.data = JSON.stringify(data);
                localStorage.answer = JSON.stringify(data.answer);
                localStorage.flag = false;
                localStorage.startTime = new Date().getTime();
                transfer(data);
            }
        });
    }
    //submit
    $('#submit_1').click(function(){
        var result = confirm("你确定提交第一部分吗？");
        if(result==false){
            return ;
        }
        $('#item_1').hide();
        $('#aside_1').hide();
        $('#item_2').show();
        $('#aside_2').show();
        for(var i=1;i<2;i++){
            $('#main_test_content_title_name_1_'+i+'').hide();
            $('#main_test_content_item_1_'+i+'').hide();
            $('#main_test_content_explain_1_'+i+'').hide();
            $('#main_menu_grade_1_'+i+'').hide();
        }
        localStorage.flag = true;
    });
    //next_0
    $('#nextItem_1').click(function(){
        var answer = ['', '', '', '', '', '', '', '', ''];
        if (++num < 7) {
            $('#main_test_content_title_name_'+num+'').prev().hide();//set next title of easyAnswer
            $('#main_test_content_title_name_'+num+'').show();
            $('#main_test_content_item_'+num+'').prev().hide();//set next content of easyAnswer
            $('#main_test_content_item_'+num+'').show();
            $('#main_test_content_explain_'+num+'').prev().hide();//set next value of easyAnswer
            $('#main_test_content_explain_'+num+'').show();
            $('#main_menu_grade_'+num+'').prev().hide();//set grade of easyAnswer
            $('#main_menu_grade_'+num+'').show();
            $('#main_test_content_content_0 textarea').each(function(){  //checked textArea value
                $(this).val()&&$('#main_menu_item_list_0 span').eq($(this).index()).addClass('item_1');
                if ($(this).val()) {
                    answer[$(this).index()] = $(this).val();
                }
            });
            localStorage.answer = JSON.stringify(answer);
            $('#main_menu_item_list_0 span').removeClass('item_2');
            $($('#main_menu_item_list_0 span')[num]).addClass('item_2');//set menu of easyAnswer
        }
    });
    //next_1
    $('#nextItem_2').click(function(){
        var answer = ['', '', '', '', '', '', '', '', ''];
        if(++num_1 < 2) {
            $('#main_test_content_title_name_1_'+num_1+'').prev().hide();//set next title of easyAnswer
            $('#main_test_content_title_name_1_'+num_1+'').show();
            $('#main_test_content_item_1_'+num_1+'').prev().hide();//set next content of easyAnswer
            $('#main_test_content_item_1_'+num_1+'').show();
            $('#main_test_content_explain_1_'+num_1+'').prev().hide();//set next value of easyAnswer
            $('#main_test_content_explain_1_'+num_1+'').show();
            $('#main_menu_grade_1_'+num_1+'').prev().hide();//set grade of easyAnswer
            $('#main_menu_grade_1_'+num_1+'').show();
            $('#main_test_content_content_1 textarea').each(function(){  //checked textArea value
                $(this).val()&&$('#main_menu_item_list_1 span').eq($(this).index()).addClass('item_1');
                if ($(this).val()) {
                    answer[$(this).index()] = $(this).val();
                }
            });
            localStorage.answer = JSON.stringify(answer);
            $('#main_menu_item_list_1 span').removeClass('item_2');
            $($('#main_menu_item_list_1 span')[num_1]).addClass('item_2');//set menu of easyAnswer
        }
    });
    $('#submit_2').click(function(){
        var result = confirm("你确定提交第二部分吗？");
        if (result == false) {
            return;
        }
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
        $('#main_test_content_content_1 textarea').each(function(){
            answer_2.push($(this).val()) ;
        });
        while(1){
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
            success:function(){
                alert("考试结束!");
                window.location.href="http://localhost:3000/login.html";
                localStorage.clear();
            },
            error: function () {
                console.log('XHR error');
            }
        })
    });
    if (window.console && window.console.log) {
        console.log("不要偷看 (╯‵□′)╯︵┴─┴");
    }
});
