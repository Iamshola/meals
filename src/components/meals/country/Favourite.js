import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '../Card'
import _ from 'lodash'


class FavouriteMeals extends React.Component {
  constructor() {
    super()
    this.state = {


    }
   
  }


  componentDidMount() {

  }

  

  render() {
    if (!this.sta) return <h2>Loading...</h2>
    return (
      <section className="section">
        <div className="container">
          <hr />
        </div>
        <div className="container">
          <div className="columns">

            <h1>Heyy</h1>
            
          </div>
        </div>
        

      </section>
    )
  }
}



export default FavouriteMeals

