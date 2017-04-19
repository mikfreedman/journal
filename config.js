var path = require('path'),
    config, mysql;

var env = process.env.NODE_ENV || 'development';
var production = env == 'production';

var cfCore = {};
var sqlCredentials = {};
var mailCredentials = {};
if (production) {
  var cfEnv = require("cf-env");
  var pkg   = require("./package.json");
  var cfCore = cfEnv.getCore({name: pkg.name});
  var sqlCredentials = cfEnv.getService("ghost-pg").credentials;
  var mailCredentials = cfEnv.getService("ghost-mail").credentials;
}

console.log(sqlCredentials);
console.log(mailCredentials);
