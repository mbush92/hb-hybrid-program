'use strict'
import {
  getRobotState,
  getStandardDigitalOutput,
  getStandardDigitalInput,
} from './storeRTDE'


export const self = {
    state:{
      inputs:{},
      outputs:{},
    },
    recipe:{
      0: {
        perform: (callback)=>{
          let currState = getRobotState()
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
        perform:(callback)=>{
          console.log(getStandardDigitalOutput(0))
          if(getStandardDigitalOutput(0) == '1') {
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
