 import React from 'react';

 class SingleHeader extends React.Component {
  render() {
    let { recipe } = this.props

    return (
      <div class="row content-head">
        <div class="col-md-10 col-md-offset-1">
          <h1 class="content-title">
            {recipe.title}
          </h1>
          <div class="content-sub-title">
            {recipe.sub_title}
          </div>
          {
            recipe.user ? (
              <div class="content-author ff-times">
                Created by {recipe.user.name} - {recipe.created_at}
              </div>
            ) : ''
          }

        </div>
      </div>
    )
   }
 }

 export default SingleHeader

