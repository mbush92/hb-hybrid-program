let self = {
  testFunction({ popupError, ip }, callback) {
    return popupError(ip, 'Hey this worked');
  },

  concatNoSpace({ popupError, ip, params }, callback) {
    let _ = require('lodash');
    var returnValue = '';
    _.forEach(params, (value, key) => {
      if (key == 0) {
        returnValue = value;
      } else {
        returnValue += value;
      }
    });
    //callback(null, returnValue);
    return popupError(ip, 'I extended the base functionality with this new function, had to have the original code and added to it in the new function...not a real extension');
  },
};

module.exports = { ...self };
