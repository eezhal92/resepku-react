import React from 'react'
import { connect } from 'react-redux'

class CommentList extends React.Component {
  render() {
    let noComment = this.props.comments.length == 0

    return (
      <div class="comment mb40">
        <h3 class="fwb txt-red ttu mb40">Comment</h3>
        <p class="txt-grey" style={{ display: noComment ? 'block' : 'none' }}><b>Be the first who comment!</b></p>
        {this.props.comments.map((item, i) => {
          return (
            <div class="comment-item" key={i}>
              <div class="row mb20">
                <div class="col-md-6 comment-author">
                  <div class="fwb fz18">
                    {item.user.name}
                  </div>
                </div>
                <div class="col-md-6 comment-date">
                  <div class="fwb ttu txt-grey">
                    {item.created_at}
                  </div>
                </div>
              </div>
              <div class="txt-content">
                <p>{item.body}</p>
              </div>
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments.items
  }
}

export default connect(mapStateToProps)(CommentList)
