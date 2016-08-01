import React from 'react'
import RecipeItem from './RecipeItem'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchRecipes } from './../actions'
import { classNames } from 'classnames'

class RecipeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      canLoadMore: true
    }
    this.loadMoreRecipes = this.loadMoreRecipes.bind(this)
  }

  loadMoreRecipes() {
    let { currentPage, lastPage } = this.props
    let canLoadMore = currentPage < lastPage
    console.log(canLoadMore)

    if (canLoadMore) {
      this.props.fetchRecipes(currentPage + 1)
    } else {
      this.setState({ canLoadMore: false })
    }
  }

  render() {
    let { recipes, fetching, currentPage, lastPage } = this.props
    let fetchingOrEmpty = fetching || recipes.length == 0 || currentPage == lastPage
    let existsOrFetcing = recipes.length > 0 || fetching

    return (
      <div class="grey-section">
        <div class="container container-p40">
          <div class="row card-container">
            {recipes.map((item, i) => <RecipeItem recipe={item} key={i}/>)}
          </div>
          <div class="row tac mt20">
            <p class="txt-grey" hidden={!fetching}><b>Loading...</b></p>
            <h3 class="txt-grey" style={{display: this.props.error ? 'block' : 'none'}}>Error</h3>
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
    fetching: state.recipes.fetching,
    error: state.recipes.error
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
