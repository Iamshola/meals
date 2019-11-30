import React from 'react'
import axios from 'axios'
import Card from './Card'
import _ from 'lodash'
import { Link } from 'react-router-dom'


import Loading from '../common/Error404'
import Checkboxes from './indexPageTools/Checkboxes'
import NoResultsHolder from './indexPageTools/NoResultHolder'

class MealsIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      meals: [],
      eachMeal: [],
      searchTerm: '',
      ingredient: [],
      sortTerm: 'name|asc',
      allIngredient: [],
      clickTerm: []
      
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filterMeals = this.filterMeals.bind(this)
    this.handleSelected = this.handleSelected.bind(this)
    this.eachIngredient = this.eachIngredient.bind(this)
    this.handleAllIngredient = this.handleAllIngredient.bind(this)
  }

  componentDidMount(){
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + this.props.match.params.meal)
      .then(res => this.setState({ meals: res.data.meals, eachMeal: [], clickTerm: '' }, () => {
        this.eachIngredient()
      })
      )
  }

  eachIngredient(){
    if(this.state.meals){
      const retrieveId = this.state.meals.map(mealId => mealId.idMeal)
      retrieveId.map(x =>
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + x)
          .then(res => this.setState({ eachMeal: [...res.data.meals].concat(this.state.eachMeal) }, () => {
            this.handleAllIngredient()
          })
          ))
    
    }
  }
  handleAllIngredient(){
    var ingredients = this.state.eachMeal.map(function (elem) {
      return {
        idMeal: elem.idMeal, 
        strMeal: elem.strMeal,
        strMealThumb: elem.strMealThumb,
        strArea: elem.strArea,
        zall: [elem.strIngredient1, elem.strIngredient2, elem.strIngredient3, elem.strIngredient4, elem.strIngredient5, elem.strIngredient6, elem.strIngredient7, elem.strIngredient9, elem.strIngredient10, elem.strIngredient11, elem.strIngredient12, elem.strIngredient13, elem.strIngredient14].toLocaleString().toLowerCase().split(',')
      }
    })
    this.setState({ allIngredient: ingredients })
  }

  handleKeyUp(e) {
    this.setState({ 
      searchTerm: e.target.value 
    })
  }

  handleChange(e) {
    this.setState({ 
      sortTerm: e.target.value 
    })
  }
  handleSelected(e) {
    if (this.state.clickTerm.includes(e.target.value)){
      console.log('heyy')
      this.setState({ 
        clickTerm: this.state.clickTerm.filter(a => a !== e.target.value)
      })
    } else{
      this.setState({
        clickTerm: [...this.state.clickTerm, e.target.value]
      })
    }

  }

  filterMeals(){
    const re = new RegExp(this.state.searchTerm, 'i')
    const [field, order] = this.state.sortTerm.split('|')
    const word = new RegExp(this.state.clickTerm, 'g')
   
    const filterMeals = _.filter(this.state.allIngredient, meal => {
      return re.test(meal.strMeal) && word.test(meal.zall)
    })

    const sortedMeals = _.orderBy(filterMeals, [field], [order])
    return sortedMeals
  }

  render(){
    if (!this.state.meals) return( 
      <Loading />
    )

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

                <input className="input" type="text" placeholder="Favourite Meal"  onKeyUp={this.handleKeyUp}/>

                <div className="field">
                  <hr />
                  <label> Alphabetical Order:  </label>
                  <select onChange={this.handleChange}>
                    <option value="strMeal|asc">A-Z </option>
                    <option value="strMeal|desc">Z-A </option>
                  </select>
                  <br />
               
                </div>

                <hr />
                <label> This Product Contains: </label>
                <Checkboxes
                  onClick={this.handleSelected}
                  onChange={this.handleChange}
                
                />

                <hr />
              </div>
            </div>

            <div className="column">
              <div className="columns is-multiline">

                {!this.filterMeals()[0] &&
                  <NoResultsHolder />
                }
                
          
                
                {this.filterMeals().map(meal =>
                  <div className="column is-half-tablet is-one-quarter-desktop"
                    key={meal.idMeal}
                  >
                    <Link 
                      to={{
                        pathname: `/meals/${meal.idMeal}`,
                        state: this.state.allIngredient
                      }}
                    
                    >
                      <Card 
                        name={meal.strMeal} 
                        image={meal.strMealThumb}
                        area={meal.strArea}
                        
                      />
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
