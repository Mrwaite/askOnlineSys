//实现与数据库的交互
var mysql = require('mysql'),
    $conf = require('../conf/db'),
    $sql = require('./userSqlMapping');




//使用连接池,提升性能
var pool = mysql.createPool($conf.mysql);



var methods = {
    //向数据库添加记录
    check : function (req, res, callback) {
        pool.getConnection(function (err, connection) {
            if (err) {
                connection.release();
                return callback(err, null);
            }
            var param = req.body;
            connection.query($sql.queryNameAndSt, [param.username,param.stNumber], function (err, result) {
                connection.release();
                if(err) {
                    return callback(err, null);
                }
                //1:报名了没有考试
                //2:报名了考试过了
                //3:没有报名
                //4:报名了没有签到
                console.log(result);
                if(result.length > 0) {
                    //表示数据库有此人,此人已报名
                    if(result[0]['ask_tag'] === 1 && result[0]['sign'] === 1) {
                        //报名了签到了
                        callback(null, 1);
                    } else if (result[0]['ask_tag'] === 2) {
                        //已经考过了
                        callback(null, 2);
                    } else if (result[0]['ask_tag'] === 1 && result[0]['sign'] === 0) {
                        //报名了没有签到
                        callback(null, 4);
                    }
                } else {
                    //表示数据库没有此人,此人是来霸试的
                    callback(null, 3);
                }

            });
        });
    },
    
    finishAsk : function (username, callback) {
        pool.getConnection(function (err, connection) {
            if(err) {
                connection.release();
                return callback(err, null);
            }
            connection.query($sql.changeAskTag, username, function (err, result) {
                connection.release();
                if (err) {
                    return callback(err, null);

                }
                callback(null, result[0]);
            })
        });
    },
    /*1:签到 2:已签到 3:霸面*/
    sign : function (username, stNumber, callback) {
        pool.getConnection(function (err, connection) {
            if(err) {
                connection.release();
                return callback(err, null);
            }
            connection.query($sql.querySign, [username, stNumber], function (err, result) {

                if(err) {
                    connection.release();
                    return callback(err, null);
                }
                //1:未签到
                //2:已签到
                //3:霸面
                console.log(result);
                if(result.length > 0) {
                    //表示数据库有此人,此人已报名
                    if(result[0]['sign'] === 0) {
                        connection.query($sql.changeSign, [username, stNumber], function (err, result) {
                            connection.release();
                            if(err) {
                                 return callback(err, null);
                            }
                            return callback(null, '1');
                        })
                    } else if (result[0]['sign'] === 1) {
                        connection.release();
                        return callback(null, '2');
                    }
                } else {

                    //表示数据库没有此人,此人是来霸试的
                    connection.release();
                    return callback(null, '3');
                }

            })
        });
    }

};

module.exports = methods;
