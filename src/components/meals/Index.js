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
      selectedTerm: '', 
      ingredients: ''
      
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filterMeals = this.filterMeals.bind(this)
    this.handleSelected = this.handleSelected.bind(this)
  }

  componentDidMount(){
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + this.props.match.params.meal)
      .then(res => this.setState({ meals: res.data.meals, ingredients: res.data.meals.strIngredient1 }))
  }

  handleKeyUp(e){
    this.setState({ searchTerm: e.target.value})
  }

  handleChange(e){
    this.setState({ sortTerm: e.target.value})
  }

  handleSelected(e){
    this.setState({ selectedTerm: e.target.value})
  }


  filterMeals(){
    const re = new RegExp(this.state.searchTerm, 'i')
    const [field, order] = this.state.sortTerm.split('|')
    const checkbox = this.state.selectedTerm.ingredients
    
    const filterMeals = _.filter(this.state.meals, meal => {
      return re.test(meal.strMeal) || checkbox.test(meal.strMeal) 
    })

    const sortedMeals = _.orderBy(filterMeals, [field], [order])

    return sortedMeals
  }


  render(){
    console.log(this.state.meals)
    
    if (!this.state.meals) return <div className="container"><h2>No result found. Return <Link to="/">home </Link> </h2> </div>
   
    return(
      <section className="section">
        <div className="container">
          <hr />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-2">

              <div className="field">
                <h1 className="title is-6 heading">Your search currently matches {this.filterMeals().length} Meals</h1>
                <hr />
                <label className="label has-text-left title is-6 heading">Search your favourites</label>

                <input className="input" type="text" placeholder="Favourite space?"  onKeyUp={this.handleKeyUp}/>

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
                <form onChange={this.handleChange}>
                  <div className="checkbox">
                    <label> <input type="checkbox" value="onion" onChange={this.handleSelected} /> onion </label>
                    <label> <input type="checkbox" value="eggs" onChange={this.handleSelected} /> Eggs </label>
                  </div>
                </form> 

                
                <div className="field">

                </div>

              </div>
            </div>

            <div className="column">
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
          </div>
        </div>

      </section>
    )
  }
}


export default MealsIndex
