import React from 'react';
import { Link } from 'react-router'

class RecipeItem extends React.Component {
  render() {
    let backgroundImage = {
      backgroundImage: `url('${this.props.recipe.image}')`
    }

    let { recipe } = this.props

    return (
      <div class="col-sm-6 col-md-4 card-item-col">
        <div class="card-item">
          <div class="card-item-img" style={backgroundImage}></div>
          <Link to={`/recipes/${recipe.id}`} class="card-item-title p20">
            <div class="fwb ttu fz18">
              {recipe.title}
            </div>
          </Link>
          <div class="card-item-author fsi ff-times p20 fz16">
            {recipe.user.name}
          </div>
          <div class="clearfix card-border">
            <div class="card-item-love txt-grey p20 dib fwb">
              <i class="fa fa-heart"></i>
              {recipe.love}
            </div>
            <Link to={`/recipes/${recipe.id}`} class="card-item-link fwb ttu p20 dib">
              Read recipe
              <i class="fa fa-long-arrow-right ml5"></i>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeItem
