let self = {
  testFunction({ popupError, ip }, callback) {
    return popupError(ip, 'Hey this worked');
  },

  concatNoSpace({ popupError, ip }, callback) {
    return popupError(ip, 'I overwrote the base functionality with this new function');
  },
};

module.exports = { ...self };
