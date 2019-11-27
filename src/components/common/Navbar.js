import React from 'react'
import {Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
      cocktails: {},
      navbarOpen: false, 
      cuisines: [], 
      categories: []

    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then(res => this.setState({ cuisines: res.data.meals }))

    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => this.setState({ categories: res.data.categories }))
  }


  toggleNavbar(){
    this.setState({navbarOpen: !this.state.navbarOpen})

  }


  render(){
    return(
      <nav className="navbar is-warning is-fixed-top">
        <div className="container">
          <div className="navbar-brand title is-6 heading">
            <Link to= "/" className="navbar-item"> Home </Link>
            <a role="button" className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''} ` } onClick={this.toggleNavbar}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''} ` }>-
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Explore by Category
                </a>

                <div className="navbar-dropdown">

                  {this.state.categories.map(category =>
                    <div className="navbar-item"
                      key={category.idCategory}
                    >
                      <Link to={`/categories/${category.strCategory}`}>
                        <p className="title is-7 heading"> {category.strCategory} </p>
                      </Link>
                    </div>
                  )}
                  <hr className="navbar-divider" />
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                     Explore by Cusine
                </a>

                <div className="navbar-dropdown">

                  {this.state.cuisines.map(meal =>
                    <div className="navbar-item"
                      key={meal.strArea}
                    >
                      <Link to={`/countries/${meal.strArea}`}>
                        <p className="title is-7 heading"> {meal.strArea} </p>
                      </Link>
                    </div>
                  )}
                  <hr className="navbar-divider" />
                </div>
              </div>              
            </div>
          </div>
        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar)
