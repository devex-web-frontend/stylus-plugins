/**
 * Module dependencies.
 */

var stylus = require('stylus'),
    path = require('path'),
    nodes = stylus.nodes,
    utils = stylus.utils
exports = module.exports = plugin;

// conditionally expose canvas-based APIs.

try {

  var img = require('./nodes/img');
} catch (err) {
  // ignore
}

exports.path = __dirname;

/**
 * Return the plugin callback for stylus.
 *
 * @return {Function}
 * @api public
 */

function plugin() {
  return function(style){
    style.include(__dirname);

      style.define('addImg', img.addImg);

    }
  }

