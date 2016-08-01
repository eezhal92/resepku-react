import React from 'react'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Single from './pages/Single'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { Route, IndexRoute } from 'react-router'
import { checkAuth } from './route_callbacks'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/recipes/:id" component={Single} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/sign-in" onEnter={checkAuth} component={SignIn} />
  </Route>
)

export default routes
