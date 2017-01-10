'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var self = exports.self = {
  state: {
    inputs: {},
    outputs: {}
  },
  recipe: {
    0: {
      perform: function perform(state, callback) {
        var currState = state;
        this.state.inputs = currState.inputs;
        this.state.outputs = currState.outputs;
        console.log(this.state);
        console.log('****************************************************')
        console.log('ROB DOESNT BELIEVE ME!!!!!')
        return callback(null, 3);
      },
      nextStep: 3
    },
    1: {
      nextStep: 2
    },
    2: {
      perform: function perform(state, callback) {
        var outputs = state.outputs.standardOutputs;
        if (outputs[0] == '1') {
          this.recipe[2].nextStep = 0;
          return callback(null, 0);
        } else {
          this.recipe[2].nextStep = 1;
          return callback(null, 1);
        }
      },
      nextStep: 1
    },
    3: {
      nextStep: 0
    }
  }
};
