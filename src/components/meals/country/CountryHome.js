import React from 'react'
import Card from '../Card'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CountryHome extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => {
        this.setState({ randomMeal: res.data.meals[0] })
      })

  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit() {
    this.props.history.push('/search/' + this.state.searchTerm)

  }

  render() {
    if (!this.state.randomMeal) return <h2>Loading...</h2>
    return (
      <div>
        <section className="hero is-fullheight-with-navbar is-bold">
          <div className="hero-body">
            <div className="column is-one-third-desktop has-text-centered is-offset-7">
              <h1 className="title is-1">MealBored</h1>
              <h2 className="subtitle is-4"> A place for bored meal lovers</h2>
              <div className="field has add-ons">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Search your favourite ingredient" className="input is-rounded" onChange={this.handleChange} />
                </form>
              </div>
              <hr />
            </div>
          </div>
        </section>
       
      </div>

    )
  }
}

export default CountryHome
