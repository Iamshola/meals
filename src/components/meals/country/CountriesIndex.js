import React from 'react'
import axios from 'axios'
import Card from '../Card'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import Checkboxes from '../indexPageTools/Checkboxes.js'
import NoResultsHolder from '../indexPageTools/NoResultHolder'




class CountriesIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      countrySearchTerm: '',
      sortTerm: 'name|asc',
      selectedTerm: '',
      ingredients: {}

    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filterCountries = this.filterCountries.bind(this)

  }

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + this.props.match.params.country)
      .then(res => this.setState({ countries: res.data.meals }))
  
  }



  componentDidUpdate(prevProps) {
    if (prevProps.match.params.country !== this.props.match.params.country) {
      axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + this.props.match.params.country)
        .then(res => {
          this.setState({ countries: res.data.meals })
        })
      window.scrollTo(0, 0)
    }
  }


  
  handleKeyUp(e) {
    this.setState({ countrySearchTerm: e.target.value })
  }

  handleChange(e) {
    this.setState({ sortTerm: e.target.value })
  }


  filterCountries() {
    const re = new RegExp(this.state.countrySearchTerm, 'i')
    const [field, order] = this.state.sortTerm.split('|')


    const filterCountries = _.filter(this.state.countries, meal => {
      return re.test(meal.strMeal)
    })

    const sortedcountries = _.orderBy(filterCountries, [field], [order])

    return sortedcountries
  }


  render() {
    console.log(this.state.countries)
    console.log(this.state.ingredients)

    if (!this.state.countries) return <div className="container"><h2>No result found. Return <Link to="/">home </Link> </h2> </div>

    return (
      <section className="section">
        <div className="container">
          <hr />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-2">

              <div className="field">
                <h1 className="title is-6 heading">Your search currently matches {this.filterCountries().length} Meals </h1>
                <hr />
                <label className="label has-text-left title is-6 heading">Search your favourites</label>

                <input className="input" type="text" placeholder="Favourite meal?" onKeyUp={this.handleKeyUp} />

                <div className="field">
                  <hr />
                  <label> Alphabetical Order:  </label>
                  <select onChange={this.handleChange}>
                    <option value="strMeal|asc">A-Z </option>
                    <option value="strMeal|desc">Z-A </option>
                  </select>
                  <br />
                  <br />

                </div>
                <hr />
                <label> This Product Contains: </label>
                <Checkboxes
                  onClick={this.handleSelected}
                  onChange={this.handleChange}

                />


              </div>
            </div>

            <div className="column">
              <div className="columns is-multiline">
                {!this.filterCountries()[0] &&
                  <NoResultsHolder />
                }

                {this.filterCountries().map(meal =>
                  <div className="column is-half-tablet is-one-quarter-desktop"
                    key={meal.idMeal}
                  >
                    <Link to={`/meals/${meal.idMeal}`}>
                      <Card name={meal.strMeal} image={meal.strMealThumb} />
                    </Link>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}


export default CountriesIndex
 