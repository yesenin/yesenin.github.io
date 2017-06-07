import { combineReducers } from 'redux'

import directories from './directoriesReducer'
import notes from './notesReducer'

export default combineReducers({
  directories,
  notes
})