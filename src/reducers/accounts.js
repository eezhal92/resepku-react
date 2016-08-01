export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER'
export const LOG_OUT = 'LOG_OUT'
export const CHECK_TOKEN = 'CHECK_TOKEN'
export const SET_TOKEN = 'SET_TOKEN'

export const accountsInitialState = {
  loggedIn: false,
  user: null,
  token: null
}

function accounts(state = accountsInitialState, action) {
  switch(action.type) {
    case SET_LOGGED_IN_USER:
      return { ...state, user: action.user, loggedIn: true, token: action.token }
    case LOG_OUT:
      return { ...state, user: null, loggedIn: false, token: null }
    default:
      return state
  }
}

export default accounts
