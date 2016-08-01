import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { postComment } from './../actions'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.defaultState()
    this.renderMessage = this.renderMessage.bind(this)
  }

  handleUpdate(e) {
    this.setState({
      title: ReactDOM.findDOMNode(this.refs.title).value,
      body: ReactDOM.findDOMNode(this.refs.body).value
    })
  }

  defaultState() {
    return {
      errorMessage: '',
      title: '',
      body: '',
      sending: false
    }
  }

  resetStateAndForm() {
    this.setState(this.defaultState())
    this.resetForm()
  }

  resetForm() {
    ReactDOM.findDOMNode(this.refs.title).value = ''
    ReactDOM.findDOMNode(this.refs.body).value = ''
  }

  handleSubmit(e) {
    e.preventDefault()
    if (! this.props.loggedIn) {
      this.setState({ errorMessage: 'You have to be logged in' })
      this.renderMessage()
      return
    }

    let { title, body } = this.state

    this.setState({ sending: true })
    this.props.postComment(this.props.recipeId, title, body).then(() => {
      this.resetStateAndForm()
    }).catch(() => {
      this.resetStateAndForm()
    })
  }

  renderMessage(message) {
    return <p class="txt-content tac">{this.state.errorMessage}</p>
  }

  render() {
    let { sending } = this.state
    return (
      <div class="comment mb40">
        <h3 class="fwb txt-red ttu mb40">Write comment</h3>
        <form class="form-submit" onSubmit={this.handleSubmit.bind(this)}>
          <div class="form-group">
            <input type="text" class="form-control" onChange={this.handleUpdate.bind(this)} ref="title" placeholder="title" />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" onChange={this.handleUpdate.bind(this)} ref="body" placeholder="comment" />
          </div>
          <div class="form-group tar mt20">
            <p class="txt-grey" style={{ display: !sending ? 'none' : '' }}>
              <b>Sending...</b>
            </p>
            <button class="btn btn-arrow-red fwb ttu" style={{ display: sending ? 'none' : '' }}>
              Send
              <i class="fa fa-long-arrow-right"></i>
            </button>
            { this.state.errorMessage ? this.renderMessage() : ''}
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.accounts.loggedIn,
    user: state.accounts.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postComment: (recipeId, title, body) => dispatch(postComment(recipeId, title, body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
