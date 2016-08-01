import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { toggleCategory } from './../actions'

class CategoryNavItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let itemClasses = classNames('nav-icon-item', { active: this.props.item.selected })
    let iconClasses = classNames('nav-icon-ico', this.props.item.icon)

    return (
      <div class={itemClasses} onClick={this.props.onClick}>
        <div class={iconClasses}></div>
      </div>
    )
  }
}

export default connect()(CategoryNavItem)
