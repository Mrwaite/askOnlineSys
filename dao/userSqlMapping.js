var user = {
    insert:'INSERT INTO users(id, name, stNumber, telNumber, direction, sex, major, grade) VALUES(0,?,?,?,?,?,?,?)',
    update:'update users set name=?,stNumber=?, telNumber=?, direction=?, sex=?, major=?, grade=? where id=?',
    delete: 'delete from users where id=?',
    queryById: 'select * from users where id=?',
    querySign: 'select users.sign from users where users.name=? and users.stNumber=?',
    queryNameAndSt : 'select users.ask_tag , users.sign from users where users.name=? and users.stNumber=?',
    changeAskTag : 'update users set ask_tag=2 where name=?',
    changeSign : 'update users set sign=1 where name=? and stNumber=?'
};

module.exports = user;