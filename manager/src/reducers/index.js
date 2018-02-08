import { combineReducers } from 'redux'

import api from './apiReducer'
import folders from './foldersReducer'
import notes from './notesReducer'
import search from './searchReducer'

export default combineReducers({
    api,
    folders,
    notes,
    search
})