export function getName () {
  return {
    type: 'NAME_RECEIVED',
    payload: 'Hariharan'
  }
}
export function getContexts () {
  return {
    type: 'CONTEXT_RECEIVED',
    payload: [{id: 1, name: 'CENTRAL'}]
  }
}

export function getItems (contexts) {

  // HTTP calls are done here. Take a look at redux-promise-middleware
  return {
    type: 'ITEMS_RECEIVED',
    payload: [{name: 'contact Wilson'}, {name: 'test react app'}]
  }
}
