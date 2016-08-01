import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { loginUser } from './../actions'

class LogInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.defaultState()
  }

  defaultState() {
    return {
      email: '',
      password: '',
      submitting: false
    }
  }

  resetForm() {
    ReactDOM.findDOMNode(this.refs.email).value = ''
    ReactDOM.findDOMNode(this.refs.password).value = ''
  }

  resetStateAndForm() {
    this.state = this.defaultState()
    this.resetForm()
  }

  handleUpdate(e) {
    this.setState({
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (! this.state.submitting) {
      this.props.login(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} class="form-submit">
        <div class="form-group">
          <input type="email" onChange={this.handleUpdate.bind(this)} class="form-control" ref="email" placeholder="email" />
        </div>
        <div class="form-group">
          <input type="password" onChange={this.handleUpdate.bind(this)} class="form-control" ref="password" placeholder="password" />
        </div>
        <div class="form-group tar mt40">
          <button type="submit" class="btn btn-arrow-red fwb ttu db">
            Enter
            <i class="fa fa-long-arrow-right"></i>
          </button>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login(params) {
      dispatch(loginUser(params))
    }
  }
}

export default connect(null, mapDispatchToProps)(LogInForm)
