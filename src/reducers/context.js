import Immutable from 'seamless-immutable'

const defaultState = Immutable({branches: []})

export default function (state = defaultState, action) {
  switch (action.type) {
    case `CONTEXT_RECEIVED`:
      return state.merge({branches: action.payload})
    // case `ITEMS_REJECTED`:
    //   return state.merge({isLoading: false, data: []})
  }
  return state
}
