import { combineReducers } from 'redux'

import tree from './tree'
import modal from './modal'
import api from './api'

export default combineReducers({
  tree,
  modal,
  api
})