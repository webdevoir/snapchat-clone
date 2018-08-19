import { combineReducers } from 'redux'

import auth from './auth'
import currentUser from './currentUser'

export default combineReducers({
  auth,
  currentUser
})
