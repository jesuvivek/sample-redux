import Immutable from 'seamless-immutable'

const defaultState = Immutable({isLoading: false, data: [], isErrored: false})

export default function (state = defaultState, action) {
  switch (action.type) {
    case `ITEMS_PENDING`:
      return state.merge({isLoading: true, data: []})
    case `ITEMS_RECEIVED`:
      return state.merge({isLoading: false, data: action.payload})
    case `ITEMS_REJECTED`:
      return state.merge({isLoading: false, data: []})
  }
  return state
}
