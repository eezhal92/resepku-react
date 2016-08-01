import React from 'react'
import FeaturedRecipe from './../components/FeaturedRecipe'
import CategoryNav from './../components/CategoryNav'
import RecipeList from './../components/RecipeList'
import { connect } from 'react-redux'
import { getRecipes } from './../reducers/recipes'
import { fetchRecipes } from './../actions'
import GeneralLayout from './layouts/GeneralLayout'

class Home extends React.Component {
  componentDidMount() {
    if (! this.props.fetched) {
      this.props.fetchRecipes()
    }
  }

  render() {
    return (
      <GeneralLayout>
        <FeaturedRecipe />
        <CategoryNav />
        <RecipeList recipes={this.props.recipes} />
      </GeneralLayout>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: getRecipes(state),
    fetched: state.recipes.fetched
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRecipes: () => {
      return dispatch(fetchRecipes({
        limit: 6
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
