let self = {
  testFunction({ popupError, ip }, callback) {
    return popupError(ip, 'Hey this worked');
  },
};

module.exports = { ...self };
