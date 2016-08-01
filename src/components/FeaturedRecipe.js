import React from 'react'

export default class FeaturedRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.recipe = {
      title: 'Roti Mentega',
      sub_title: 'Tabur Gula Putih',
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>Cras ultricies ligula sed magna dictum porta. Pellentesque <br>in ipsum id orci porta dapibus."
    }
  }

  renderHTML(markup) {
    return {__html: markup}
  }

  render() {
    return (
      <div id="hero" class="container">
        <div class="row">
          <div class="col-lg-6 tac">
            <div class="fz44 fwb ttu">{this.recipe.title}</div>
            <div class="fz20 fwb ttu c-primary">{this.recipe.sub_title}</div>
            <br />
            <p class="ff-times tti lpn fsi fz18" dangerouslySetInnerHTML={this.renderHTML(this.recipe.summary)}></p>
            <br />
            <a href="page.html" class="btn btn-arrow-red fwb ttu">
              Read recipe
              <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
