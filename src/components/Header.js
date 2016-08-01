import React from 'react'
import classNames from 'classnames'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

export default class Header extends React.Component {
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
              </Link>
              <span class="mr5 ml5 fwn">|</span>
              <Link to="/sign-in" class="ttu">
                SIGN IN
              </Link>
              <span class="mr5 ml5 fwn">|</span>
              <Link to="/sign-up" class="ttu">
                REGISTER
              </Link>
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
