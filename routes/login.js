/*
 * GET login page.
 */

exports.login = function(req, res){
    res.render('login', { layout: '_layout.jade' });
};
