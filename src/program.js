'use strict'

export const self = {
    state:{
      inputs:{},
      outputs:{},
    },
    recipe:{
      0: {
        perform: (state, callback)=>{
          let currState = state
          self.state.inputs = currState.inputs
          self.state.outputs = currState.outputs
          console.log(self.state)
          return callback(null)
        },
        nextStep:1,

      },
      1: {
        nextStep:2
      },
      2: {
        perform:(state, callback)=>{
          let outputs = state.outputs.standardOutputs
          if(outputs[0] == '1') {
              self.recipe[2].nextStep = 0
            } else {
              self.recipe[2].nextStep = 3
            }
            return callback(null)
        },
        nextStep:3
      },
      3: {
        nextStep:0
      },
    },
  }
