import React from 'react'
import RecipeItem from './RecipeItem'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchRecipes } from './../actions'

class RecipeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      canLoadMore: true,
    }
    this.loadMoreRecipes = this.loadMoreRecipes.bind(this)
  }

  loadMoreRecipes() {
    let currentPage = this.props.currentPage
    let canLoadMore = currentPage <= this.props.lastPage || currentPage >= 1

    if (canLoadMore) {
      this.props.fetchRecipes(currentPage + 1)
      this.setState({
        canLoadMore: currentPage <= this.props.lastPage || currentPage >= 1
      })
    }
  }

  render() {
    let { recipes, fetching } = this.props
    let fetchingOrEmpty = fetching || recipes.length == 0
    let existsOrFetcing = recipes.length > 0 || fetching

    return (
      <div class="grey-section">
        <div class="container container-p40">
          <div class="row card-container">
            {recipes.map((item, i) => <RecipeItem recipe={item} key={i}/>)}
          </div>
          <div class="row tac mt20">
            <p class="txt-grey" hidden={!fetching}><b>Loading...</b></p>
            <h3 class="txt-grey" style={{display: existsOrFetcing ? 'none' : 'block'}}>There's no any recipes :(</h3>
            <a class="btn btn-arrow-red fwb ttu" onClick={this.loadMoreRecipes} style={{display: fetchingOrEmpty ? 'none' : ''}}>
              Load more recipe
              <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentPage: state.recipes.currentPage,
    lastPage: state.recipes.lastPage,
    fetching: state.recipes.fetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRecipes: (nextPage) => {
      return dispatch(fetchRecipes({
        page: nextPage,
        limit: 6
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
