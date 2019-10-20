import React from 'react'
import {Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
      cocktails: {},
      navbarOpen: false

    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar(){
    this.setState({navbarOpen: !this.state.navbarOpen})

  }
  render(){
    return(
      <nav className="navbar is-warning is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link to= "/" className="navbar-item"> Home </Link>
            <a role="button" className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''} ` } onClick={this.toggleNavbar}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''} ` }>
            <div className="navbar-end">
              <Link to="/categories" className="navbar-item"> Category </Link>
              <Link to="/countries" className="navbar-item">Cultured Cuisines </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar)
