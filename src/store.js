import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducers from './reducers'
import { categoriesInitialState } from './reducers/categories'
import { recipesInitialState } from './reducers/recipes'
import { commentsInitialState } from './reducers/comments'
import { accountsInitialState } from './reducers/accounts'

const defaultState = {
  categories: categoriesInitialState,
  recipes: recipesInitialState,
  comments: commentsInitialState,
  accounts: accountsInitialState
}

const store = createStore(
  rootReducers,
  defaultState,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(browserHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducers = require('./reducers').default
    store.replaceReducer(nextReducers)
  })
}

export default store
