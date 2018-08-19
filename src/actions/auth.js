import { AUTH_CHANGED } from '../constants/ActionTypes'

export function login() {
  return async function(dispatch, getState) {
    // login logic here
    dispatch({ type: AUTH_CHANGED, isLoggedIn: true })
  }
}

export function logout() {
  return async function(dispatch, getState) {
    dispatch({ type: AUTH_CHANGED, isLoggedIn: false })
  }
}

export function changeAuth(isLoggedIn) {
  return { type: AUTH_CHANGED, isLoggedIn }
}
