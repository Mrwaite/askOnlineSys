var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');
var topics = require('../dao/topics');
var fs = require('fs');


module.exports = function (app) {


    app.get('/', function(req, res) {
      res.render('index', {
        title : '签到'
      });
    });

    app.post('/sign', function (req, res) {
        var username = req.body.username;
        var stNumber = req.body.stNumber;
        userDao.sign(username, stNumber, function (err, data) {
            if(err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });

    });

    //post {
    //      username : username
    // }
    /*
    *@return
    * 1为报名未参加面试
     * 2为报名已参加面试
     * 3为霸面
    * */
    app.post('/login', function (req, res) {
      userDao.check(req, res, function (err, code) {
          if(err) {
              res.send(err);
          }
          res.cookie('username', req.body.username);
          res.json({code : code});
      });
    });


    /*
    *return {
    *   type : [4,2,2],
    *   tiankong : [
    *       ['题目类型','题目',难度],
    *       [一样]
    *   ],
    *   jianda : [
    *
    *   ],
    *   biancheng : [
    *       []
    *   ]
    * }
    * */
    app.get('/getTopic', function (req, res) {
        res.json(topics.getPaper());
    });

    /*
    *save [
    *  {username : username},
    *  {topic: topic, answer : answer}
    * ]
    * */
    app.post('/save', function (req, res) {
        var simuData = req.body;
        var save_data = [];
        for(var i = 1; i < simuData.length; i++){
            save_data.push(('问题:' + (simuData[i].topic).replace(/\<br\>/g, '\n').replace(/<\/pre>|<pre>/g, '') + '\n' + '答案:\n' + simuData[i].answer + '\n\n\n---------\n'));
        }
        var final = save_data.join('');
        final = new Buffer(final);
        var save_url = 'public/final_answer/' + req.cookies.username + '.txt';
        /*res.send(final);*/
        /*'/final_answer/' + simuData[0].name + '_' + simuData[0].stNumber + '.txt'*/

        userDao.finishAsk(req.cookies.username, function (err, data) {
            if(err) {
                return console.log('数据库链接错误' + err);
            }
            console.log('tag修改成功' + data);
            fs.writeFile(save_url, final, {flag : 'w+', mode : '0666'}, function (err) {
                if(err) {
                    res.send(err)
                } else {
                    res.clearCookie('username');
                    res.send('写入成功');
                }
            });

        });
    });

    app.get('/test', function (req, res) {
        res.json(req.body);
    })



};

