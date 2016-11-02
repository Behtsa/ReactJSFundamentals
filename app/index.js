var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require ('raven-js')

var sentryKey = 'b2bed7b25edd4a95b4563f34fc61a153'
var sentryApp = '111248'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

Raven.config(sentryURL).install()


ReactDOM.render(
  routes, document.getElementById('app')
);
