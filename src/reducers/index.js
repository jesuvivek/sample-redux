import { combineReducers } from 'redux'
import name from './name'
import itemsForAttention from './itemsForAttention'
import context from './context'

export default combineReducers({
  name,
  itemsForAttention,
  context
 })
