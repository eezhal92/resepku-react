import React from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'
import Footer from './components/Footer'
import FeaturedRecipe from './components/FeaturedRecipe'
import CategoryNav from './components/CategoryNav'
import RecipeList from './components/RecipeList'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        { this.props.children || <Home /> }
      </div>
    )
  }
}

export default connect()(App)
