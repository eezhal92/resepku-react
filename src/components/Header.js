import React from 'react'
import classNames from 'classnames'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { logoutUser } from './../actions'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  render() {
    let panelClass = classNames('nav-xs-panel', { active: this.state.navOpen })
    let panelOverlayClass = classNames('nav-xs-overlay', { active: this.state.navOpen })
    let logInShow = classNames('ttu', { hidden: !this.props.loggedIn })
    let logInHide = classNames('ttu', { hidden: this.props.loggedIn })

    return (
      <div id="header">
        <div class="container">
          <header>
            <Link to="/" id="logo" class="pull-left">
              <img src="/images/logo-resepku.png" alt="" width="200" href="80" />
            </Link>
            <nav class="pull-right fwb fz12 visible-lg">
              <Link to="/about" class="ttu">
                About
                <span class="mr5 ml5 fwn">|</span>
              </Link>
              <Link to="/sign-in" class={logInHide}>
                SIGN IN
                <span class="mr5 ml5 fwn">|</span>
              </Link>
              <Link to="/sign-up" class={logInHide}>
                REGISTER
              </Link>
              {
                this.props.loggedIn
                  ? <a class={logInShow}>Hello, {this.props.user.username}<span class="mr5 ml5 fwn">|</span></a>
                  : ''
              }
              <a class={logInShow} onClick={this.props.logout.bind(this)}>
                Log Out
              </a>
            </nav>
            <nav class="pull-right hidden-lg">
              <div class="nav-xs-trigger" onClick={this.toggleNav}>
                <i class="fa fa-bars"></i>
              </div>
              <div ref="panel" class={panelClass}>
                <Link to="sign-in" class="nav-xs-item db">Sign in</Link>
                <Link to="sign-up" class="nav-xs-item db">Register</Link>
              </div>
              <div class={panelOverlayClass} onClick={this.toggleNav}>&nbsp;</div>
            </nav>
          </header>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.accounts.user,
    loggedIn: state.accounts.loggedIn
  }
}

function dispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, dispatchToProps)(Header)
