import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import store, { history } from './store'
import routes from './routes'
import { Provider } from 'react-redux'

window.changeBgColor = (classNames) => {
  window.document.body.className = classNames
}

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
  document.querySelector('#app')
)
