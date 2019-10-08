import React from 'react'
import ReactDOM from 'react-dom'
import {Link, withRouter } from 'react-router-dom'



class Footer extends React.Component {
  constructor(){
    super()
    this.state = {
    }
  }

  render(){
    return(
      <footer className="footer is-fixed-bottom">
        <div className="content has-text-centered">
          <p>
            <strong>CocktailBored</strong> by <a href="https://jgthms.com">Alexis and Shola</a>
          </p>
        </div>
      </footer>
    )
  }



}


export default Footer
