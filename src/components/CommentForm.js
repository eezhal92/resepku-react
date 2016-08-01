import React from 'react';

class CommentForm extends React.Component {
  render() {
    return (
      <div class="comment mb40">
        <h3 class="fwb txt-red ttu mb40">Write comment</h3>
        <div class="form-submit">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="your name" />
          </div>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="email" />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="comment" />
          </div>
          <div class="form-group tar mt20">
            <a href="page.html" class="btn btn-arrow-red fwb ttu">
              Send
              <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentForm
