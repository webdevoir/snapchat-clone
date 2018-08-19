import { AUTH_CHANGED } from '../constants/ActionTypes'

const initialState = {
  isLoggedIn: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH_CHANGED:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      }
    default:
      return state
  }
}
