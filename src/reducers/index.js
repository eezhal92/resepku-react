import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import recipes from './recipes'
import categories from './categories'
import comments from './comments'
import accounts from './accounts'

const rootReducers = combineReducers({
  recipes,
  categories,
  routing: routerReducer,
  comments,
  accounts
})

export default rootReducers
