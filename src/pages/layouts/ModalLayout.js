import React from 'react'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'

class ModalLayout extends React.Component {
  componentWillMount() {
    window.changeBgColor('bg-grey')
  }

  componentWillUnmount() {
    window.changeBgColor('')
  }

  render() {
    return (
      <div class="container" class="bg-grey">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 mt40 mb40">
            <div class="modal-box">
              <div class="ttu fwb fz44 tac">
                {this.props.title}
              </div>
              <div class="modal-box-line">&nbsp;</div>
                <p class="txt-content tac">
                  {this.props.subTitle}
                </p>
                  { this.props.children }
              </div>
          </div>
          <div class="col-md-12 tac mb40">
            <a onClick={this.props.goBack.bind(this)} class="btn btn-arrow-nobox fwb ttu">
              <i class="fa fa-long-arrow-left mr10"></i>
              Back to previous page
            </a>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goBack: () => dispatch(goBack())
  }
}

export default connect(null, mapDispatchToProps)(ModalLayout)
