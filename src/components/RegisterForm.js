import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { registerUser } from './../actions'

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.defaultState()
  }

  defaultState() {
    return {
      name: '',
      email: '',
      password: '',
      submitting: false
    }
  }

  resetForm() {
    ReactDOM.findDOMNode(this.refs.name).value = ''
    ReactDOM.findDOMNode(this.refs.email).value = ''
    ReactDOM.findDOMNode(this.refs.password).value = ''
  }

  resetStateAndForm() {
    this.state = this.defaultState()
    this.resetForm()
  }

  handleUpdate(e) {
    this.setState({
      name: ReactDOM.findDOMNode(this.refs.name).value,
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    })
  }

  handleSubmit(e) {
    if (! this.state.submitting) {
      this.state.submitting = true

      this.props.register(this.state).then(() => {
        this.resetStateAndForm()
        this.state.submitting = false
      })
    }
  }

  render() {
    return (
      <div class="form-submit">
        <div class="form-group">
          <input type="text" onChange={this.handleUpdate.bind(this)} class="form-control" ref="name" placeholder="your name" />
        </div>
        <div class="form-group">
          <input type="email" onChange={this.handleUpdate.bind(this)} class="form-control" ref="email" placeholder="email" />
        </div>
        <div class="form-group">
          <input type="password" onChange={this.handleUpdate.bind(this)} class="form-control" ref="password" placeholder="password" />
        </div>
        <div class="form-group tar mt40">
          <button type="submit" onClick={this.handleSubmit.bind(this)} class="btn btn-arrow-red fwb ttu db">
            Register
            <i class="fa fa-long-arrow-right"></i>
          </button>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    register: (params) => dispatch(registerUser(params))
  }
}

export default connect(null, mapDispatchToProps)(RegisterForm)
