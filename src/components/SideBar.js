import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import _ from 'lodash'

class SideBar extends React.Component {
  render() {
    let { topRecipes } = this.props
    return (
      <div class="col-md-5">
        <div class="sidebar">
          <h3 class="fwb txt-red ttu mb40 mt0">
            Top recipe
          </h3>
          <b class="txt-grey" hidden={topRecipes.length > 0}>No top recipe yet</b>
          {topRecipes.map((item, i) => {
            return (
              <div class="sidebar-item mb40" key={i}>
                <h3 class="fwb ttu mb20">{item.title}</h3>
                <p class="txt-content mb20">
                  {item.sub_title}
                </p>
                <Link to={`/recipes/${item.id}`} class="btn btn-arrow-nobox fwb ttu">
                  Read Recipe
                  <i class="fa fa-long-arrow-right"></i>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    topRecipes: _.orderBy(state.recipes.items, ['love'], ['desc']).slice(0, 3)
  }
}

export default connect(mapStateToProps)(SideBar)
