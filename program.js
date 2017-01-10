'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.self = undefined;

var _storeRTDE = require('./storeRTDE');

var self = exports.self = {
  state: {
    inputs: {},
    outputs: {}
  },
  recipe: {
    0: {
      perform: function perform(callback) {
        var currState = (0, _storeRTDE.getRobotState)();
        self.state.inputs = currState.inputs;
        self.state.outputs = currState.outputs;
        console.log(self.state);
        return callback(null);
      },
      nextStep: 1

    },
    1: {
      nextStep: 2
    },
    2: {
      perform: function perform(callback) {
        console.log((0, _storeRTDE.getStandardDigitalOutput)(0));
        if ((0, _storeRTDE.getStandardDigitalOutput)(0) == '1') {
          self.recipe[2].nextStep = 0;
        } else {
          self.recipe[2].nextStep = 3;
        }
        return callback(null);
      },
      nextStep: 3
    },
    3: {
      nextStep: 0
    }
  }
};