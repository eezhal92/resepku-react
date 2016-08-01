import store from './store'
import { push } from 'react-router-redux'
import { redirect } from './actions'

export function checkAuth(nextState, replace) {
  // replace('/', nextState.location.pathname)
  console.log(store.getState().accounts)
}
