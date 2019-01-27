import Immutable from 'seamless-immutable'

const defaultState = Immutable({isLoading: false, data: []})

export default function (state = defaultState, action) {
  switch (action.type) {
    case `NAME_PENDING`:
      return state.merge({isLoading: true, data: []})
    case `NAME_RECEIVED`:
      return state.merge({isLoading: false, data: action.payload})
    case `NAME_REJECTED`:
      return state.merge({isLoading: false, data: []})
  }
  return state
}
