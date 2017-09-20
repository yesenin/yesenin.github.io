import { combineReducers } from 'redux'

import directories from './directoriesReducer'
import notes from './notesReducer'
import api from './apiReducer'

export default combineReducers({
  directories,
  notes,
  api
})