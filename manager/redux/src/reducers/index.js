import { combineReducers } from 'redux'

import directories from './directoryReducer'
import notes from './noteReducer'

export default combineReducers({
  directories,
  notes
})