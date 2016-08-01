import React from 'react'
import { connect } from 'react-redux'
import SingleHeader from './../components/SingleHeader'
import SingleContent from './../components/SingleContent'
import { fetchRecipe, fetchComments } from './../actions'
import { history } from './../store'
import GeneralLayout from './layouts/GeneralLayout'

class Single extends React.Component {
  componentDidMount() {
    let { id } = this.props.params
    this.fetchRecipeAndComments(id)
  }

  fetchRecipeAndComments(id) {

    let { selectedRecipe, fetchRecipe, params } = this.props

    if (!selectedRecipe.id || params.id !== id || !params.id) {
      fetchRecipe(id)
    }

    this.props.fetchComments(id)
  }

  componentWillReceiveProps(nextProps) {
    // this.fetchRecipeAndComments(nextProps.params.id)
  }

  render() {
    return (
      <GeneralLayout>
        <div class="container">
          <SingleHeader recipe={this.props.selectedRecipe} />
          <SingleContent recipe={this.props.selectedRecipe} />
        </div>
      </GeneralLayout>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedRecipe: state.recipes.selectedRecipe,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRecipe: (id) => dispatch(fetchRecipe(id)),
    fetchComments: (recipeId) => dispatch(fetchComments(recipeId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Single)
