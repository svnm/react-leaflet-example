import { combineReducers } from 'redux'
import { RECEIVE_GROUNDS, RECEIVE_VISIBLE_GROUNDS, RECEIVE_MAP_BOUNDS } from './actions'

const initialState = {
  all: [],
  visible: []
}

function grounds (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_VISIBLE_GROUNDS:
      return {
        ...state,
        visible: action.visible
      }
    case RECEIVE_GROUNDS:
      return {
        ...state,
        all: action.grounds
      }
    default:
      return state
  }
}

function bounds (state = {}, action) {
  switch (action.type) {
    case RECEIVE_MAP_BOUNDS:
      return action.bounds
    default:
      return state
  }
}

const rootReducer = combineReducers({
  grounds,
  bounds
})

export default rootReducer
