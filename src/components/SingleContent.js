import React from 'react';
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import SideBar from './SideBar'
import { connect } from 'react-redux'

class SingleContent extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-7">
          <div class="article mb40" dangerouslySetInnerHTML={{__html: this.props.recipe.body}}></div>
          <CommentList />
          <CommentForm recipeId={this.props.recipe.id} />
        </div>
        <SideBar />
    </div>
    )
  }
}

export default connect()(SingleContent)
