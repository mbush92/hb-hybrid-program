'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var self = {
  state: {
    inputs: {},
    outputs: {}
  },
  recipe: {
    0: {
      perform: function perform(state, callback) {
        var currState = state;
        self.state.inputs = currState.inputs;
        self.state.outputs = currState.outputs;
        return callback(null, 1);
      },
      nextStep: 1
    },
    1: {
      nextStep: 2
    },
    2: {
      perform: function perform(state, callback) {
        var outputs = state.outputs.standardOutputs;
        if (outputs[0] == '1') {
          self.recipe[2].nextStep = 0;
          return callback(null, 0);
        } else {
          self.recipe[2].nextStep = 3;
          return callback(null, 3);
        }
      },
      nextStep: 3
    },
    3: {
      nextStep: 0
    }
  }
};

module.exports = _extends({}, self);