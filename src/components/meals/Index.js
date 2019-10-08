import React from 'react'
import axios from 'axios'
import Card from './Card'
import _ from 'lodash'
import {Link } from 'react-router-dom'

class MealsIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      meals: [],
      searchTerm: '',
      sortTerm: 'name|asc',
      selectedOption: ''
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filterMeals = this.filterMeals.bind(this)
  }

  componentDidMount(){
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + this.props.match.params.meal)
      .then(res => this.setState({ meals: res.data.meals }))
  }

  handleKeyUp(e){
    this.setState({ searchTerm: e.target.value})
  }

  handleChange(e){
    this.setState({ sortTerm: e.target.value})
  }


  filterMeals(){
    const re = new RegExp(this.state.searchTerm, 'i')
    const [field, order] = this.state.sortTerm.split('|')

    const filterMeals = _.filter(this.state.meals, meal => {
      return re.test(meal.strMeal)
    })
    const sortedMeals = _.orderBy(filterMeals, [field], [order])

    return sortedMeals
  }


  render(){
    console.log(this.state)
    if(!this.state.meals) return <div className="container"><h2>No result found. Return <Link to="/">home </Link> </h2> </div>
    return(
      <section className="section">
        <div className="container">
          <div className="field">
            <input placeholder="Search your favourite food" className="input" onKeyUp={this.handleKeyUp}/>
          </div>

          <label> Alphabetical Order:  </label>
          <select onChange={this.handleChange}>
            <option value="strMeal|asc">A-Z </option>
            <option value="strMeal|desc">Z-A </option>
          </select>
          <br />
          <br />

          <div className="columns is-multiline">
            {this.filterMeals().map(meal =>
              <div className="column is-half-tablet is-one-quarter-desktop"
                key={meal.idMeal}
              >
                <Link to={`/meals/${meal.idMeal}`}>
                  <Card name={meal.strMeal} image={meal.strMealThumb}/>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}


export default MealsIndex
