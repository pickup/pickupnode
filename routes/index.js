var async = require('async');
var repository = require('../repositories/commonRepository');
var service = require('../services/commonService');
/*
 * GET home page.
 */
exports.index = function(req, res){
    var renderData = {};
    service.getUserBooks(function(err, books){

    });
    //service.createBook('心理学', '心理学相关的一些资料', function(err) {
        //
    //});
    repository.getAllUsers(function(userInfos){
        res.render('index', { layout: 'layout.jade', title: 'Express Test', users: userInfos });
    });
};
