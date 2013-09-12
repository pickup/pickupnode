var sqlite3 = require('sqlite3').verbose();
var async = require('async');
var dbpath = __dirname + '/pickupnode.db3';
var db = new sqlite3.Database(dbpath);

exports.getAllUsers = function(callback) {
    var userInfos = [];

    db.all("SELECT Id,Name,Nick,Token,Email FROM User", function (err, rows) {
        for(var i in rows) {
            userInfos.push({id: rows[i].Id, name: rows[i].Name, nick: rows[i].Nick, email: rows[i].Email});
        }
        callback(userInfos);
    });
    /*针对每行的处理
    db.each("SELECT Id,Name,Nick,Token,Email FROM User", function (err, row) {
            userInfos.push({id: row.Id, name: row.Name, nick: row.Nick, email: row.Email});
        },
        function() {
            callback(userInfos);
    });
    */
};

exports.getBooksByUserId = function(userId, callback) {
    var books = [];
    db.all("SELECT Id,UserId,Title,Description,UpdateTime,CreateTime FROM book", function (err, rows) {
        if(err == null) {
            for(var i in rows) {
                userInfos.push({id: rows[i].Id, name: rows[i].Name, nick: rows[i].Nick, email: rows[i].Email});
            }
            callback(null, books);
        }
        callback(err);
    });
};

exports.getMarksByConditions = function(conditions, callback) {

};

exports.getUserById = function(userId, callback) {

};

exports.getUserByName = function(name, callback) {

};

exports.createBook = function(book, callback) {
    var createBookCmd = db.prepare("INSERT INTO Book (UserId,Title,Description) VALUES (?,?,?)");
    createBookCmd.run(book.userId, book.title, book.description);
    createBookCmd.finalize();
};

exports.updateBook = function(book, callback) {
    var createBookCmd = db.prepare("Update Book set UserId = ?,Title = ?,Description = ?,UpdateTime = ? where Id = ?");
    createBookCmd.run(book.userId, book.title, book.description, book.updateTime, book.id);
    createBookCmd.finalize();
};

exports.removeBook = function(bookId, callback) {
    var createBookCmd = db.prepare("delete Book where Id = ?");
    createBookCmd.run(bookId);
    createBookCmd.finalize();
};

exports.createMark = function(mark, callback) {

};

exports.updateMark = function(mark, callback) {

};

exports.removeMark = function(markId, callback) {

};

exports.createUser = function(user, callback) {

};

exports.updateUser = function(user, callback) {

};

exports.removeUser = function(userId, callback) {

};

/* 参考
 async.parallel([
 function(callback){
 //db.each("SELECT Id,Name,Nick,Token,Email FROM User", function (err, row) {
 //userInfos.push({id: row.Id, name: row.Name, nick: row.Nick, email: row.Email});
 //console.log(row.Id + ": " + row.Name + "(" + row.Nick + ")-" + row.Email);
 //res.render('index', { layout: 'layout.jade', title: 'Express Test', users: userInfos });
 //});
 //db.close();
 resulte.id = 1;
 userInfos.push({id: 1, name: "zdy", nick: "zdy", email: "zdy@test.com"});
 callback(userInfos);
 }
 ],
 function (err, resulte){
 res.render('index', { layout: 'layout.jade', title: 'Express Test', users: userInfos });
 //return userInfos;
 }
 );
//db.serialize(function () {
//db.run("CREATE TABLE lorem (info TEXT)");
//var addUserCmd = db.prepare("INSERT INTO User (Name,Nick,Token,Email) VALUES (?,?,?,?)");
//for (var i = 0; i < 10; i++) {
//    stmt.run("Ipsum " + i);
//}
//addUserCmd.run("zdy_bit", "宽厚", "123456", "zdy_bit@163.com");
//addUserCmd.finalize();

//db.each("SELECT Id,Name,Nick,Token,Email FROM User", function (err, row) {
//userInfos.push({id: row.Id, name: row.Name, nick: row.Nick, email: row.Email});
//console.log(row.Id + ": " + row.Name + "(" + row.Nick + ")-" + row.Email);
//res.render('index', { layout: 'layout.jade', title: 'Express Test', users: userInfos });
//});
//});
//db.close();
 */
