var repository = require('../repositories/commonRepository');
var currentUserId = 1; //todo：获取当前用户Id

exports.getUserBooks = function(callback){
    repository.getBooksByUserId(currentUserId, callback);
};

exports.createBook = function(title, description, callback) {
    var book = { userId: currentUserId, title: title, description: description };
    repository.createBook(book, callback);
};

exports.renameBook = function(id, title, description, callback) {
    var book = { userId: currentUserId, title: title, description: description, updateTime : new Date() };
    repository.updateTime(book, callback);
};

exports.removeBook = function(id, callback){
    repository.removeBook(id, callback);
};