import { combineReducers } from 'redux'
// import board from './board'
import columns from './columns'

const reducers = combineReducers({
  columns,
  // board,
  // other reducers here
})

export default reducers