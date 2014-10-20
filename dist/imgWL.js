/**
 * Module dependencies.
 */

var stylus = require('stylus'),
    path = require('path');

exports = module.exports = plugin;

try {

  var img = require('./nodes/img');
} catch (err) {
  // ignore
}

exports.path = __dirname;

function plugin() {
  return function(style){
    style.include(__dirname);
	  style.define('addImg', img.addImg);

    }
  }

