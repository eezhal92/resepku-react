import React from 'react'
import CategoryNavItem from './CategoryNavItem'
import { resetAndAddRecipes } from './../actions'
import { connect } from 'react-redux'
import { toggleCategory, fetchRecipes } from './../actions'

const CategoryNav = React.createClass({
  handleToggleNavItem(id) {
    this.props.toggleCategory(id)
  },
  componentWillReceiveProps(nextProps) {
    nextProps.fetchRecipes({
      limit: 6,
      categories: nextProps.filteredCategories.map(item => item.id).join()
    })
  },
  render() {
    return (
      <div class="container">
        <div class="nav-icon clearfix hidden-xs hidden-sm">
          {this.props.categories.map((item, i) => {
            let boundClick = this.handleToggleNavItem.bind(this, item.id)

            return <CategoryNavItem onClick={boundClick} key={i} item={item} />
          })}
        </div>
        <div class="clearfix hidden-md hidden-lg mb20">
          <div class="form-select">
            <select name="" id="" class="form-control fwb">
              <option value="">Cake</option>
              <option value="">Burger</option>
              <option value="">Seafood</option>
              <option value="">Hot drink</option>
              <option value="">Ice</option>
              <option value="">Meat</option>
              <option value="">Cofee</option>
            </select>
            <i class="fa fa-caret-down"></i>
          </div>
        </div>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    categories: state.categories.items,
    filteredCategories: state.categories.filters
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCategory: id => dispatch(toggleCategory(id)),
    fetchRecipes: params => dispatch(fetchRecipes(params))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryNav)
