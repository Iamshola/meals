import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



class CountryHome extends React.Component {
  constructor() {
    super()
    this.state = {
      cuisines: []
    }
  }

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then(res => this.setState({ cuisines: res.data.meals }))
  }

  render() {   
    return (
      <section className="section">
        <h1>Explore By Cuisine</h1>
        <hr />
        <div className="columns is-half-desktop has-text-centered is-offset-3">
          
          <div className="columns is-multiline">
            {this.state.cuisines.map(meal =>
              <div className="column is-one-quarter-tablet is-one-fifth-desktop"
                key={meal.strArea}
              >
                <Link to={`/countries/${meal.strArea}`}>
                  <p className="title is-6 heading"> {meal.strArea} </p>
                </Link>
              </div>
            )}
          </div>
        </div>
       
      </section>
      

    )
  }
}

export default CountryHome
