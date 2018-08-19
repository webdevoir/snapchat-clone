import { ADD_SNAP } from '../constants/ActionTypes'

export function addSnap(snap) {
  return async function(dispatch, getState) {
    // login logic here
    dispatch({ type: ADD_SNAP, snap })
  }
}
