/* jslint node: true */
"use strict";
var passport = require('passport');

var index = require('../controllers/index'),
    user = require('../controllers/user');

var routes = function(app){
  app.get('/', index.index);
  app.get('/users', user.list);

  app.get('/auth/linkedin', passport.authenticate('linkedin'));
  app.get("/auth/linkedin/callback", passport.authenticate('linkedin', {
    successRedirect: '/',
    failureRedirect: '/?failure-at-login'
  }));

  app.get('/auth/facebook', passport.authenticate('facebook',
    {scope: 'read_stream'}
  ));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/?failure-at-login'
  }));

  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/?failure-at-login'
  }));
};

module.exports = function(app){
  return routes(app);
};
