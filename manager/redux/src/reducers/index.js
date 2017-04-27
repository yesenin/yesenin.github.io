import { combineReducers } from 'redux'

import tree, * as fromTree from './tree'
import modal, * as fromModal from './modal'

export default combineReducers({
  tree,
  modal
})