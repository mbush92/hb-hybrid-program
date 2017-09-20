'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var self = {
  testFunction: function testFunction(_ref, callback) {
    var popupError = _ref.popupError,
        ip = _ref.ip;

    return popupError(ip, 'Hey this worked');
  },
  concatNoSpace: function concatNoSpace(_ref2, callback) {
    var popupError = _ref2.popupError,
        ip = _ref2.ip;

    return popupError(ip, 'I overwrote the base functionality with this new function');
  }
};

module.exports = _extends({}, self);