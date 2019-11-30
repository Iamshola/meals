import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '../Card'
import Checkboxes from '../indexPageTools/Checkboxes.js'
import NoResultsHolder from '../indexPageTools/NoResultHolder'
import _ from 'lodash'


class CategoryIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      category: [],
      categorySortTerm: 'name|asc',
      categorySearchTerm: '', 
      meals: [],
      clickTerm: []

    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filterCategories = this.filterCategories.bind(this)
    this.handleSelected = this.handleSelected.bind(this)
    this.eachIngredient = this.eachIngredient.bind(this)
    this.handleAllIngredient = this.handleAllIngredient.bind(this)


  }


  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.props.match.params.id)
      .then(res => this.setState({ category: res.data.meals, eachMeal: [], clickTerm: '' }, () => {
        this.eachIngredient()
      })
      )
  }


  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.props.match.params.id)
        .then(res => {
          this.setState({ 
            category: res.data.meals, 
            categorySearchTerm: '', 
            categorySortTerm: 'name|asc',
            eachMeal: [],
            clickTerm: ''
          }, () => {
            this.eachIngredient()
          })
        }
        )
      window.scrollTo(0, 0)
    }
  }

  eachIngredient() {
    if (this.state.category) {
      const retrieveId = this.state.category.map(mealId => mealId.idMeal)
      retrieveId.map(x =>
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + x)
          .then(res => this.setState({ eachMeal: [...res.data.meals].concat(this.state.eachMeal) }, () => {
            this.handleAllIngredient()
          })
          ))

    }
  }


  handleAllIngredient() {
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

  handleSelected(e) {
    if (this.state.clickTerm.includes(e.target.value)) {
      console.log('heyy')
      this.setState({
        clickTerm: this.state.clickTerm.filter(a => a !== e.target.value)
      })
    } else {
      this.setState({
        clickTerm: [...this.state.clickTerm, e.target.value]
      })
    }

  }


  handleKeyUp(e) {
    this.setState({ categorySearchTerm: e.target.value })
  }

  handleChange(e) {
    this.setState({ categorySortTerm: e.target.value })
  }


  filterCategories() {
    const re = new RegExp(this.state.categorySearchTerm, 'i')
    const [field, order] = this.state.categorySortTerm.split('|')
    const word = new RegExp(this.state.clickTerm, 'g')


    const filterCountries = _.filter(this.state.allIngredient, meal => {
      return re.test(meal.strMeal) && word.test(meal.zall)
    })

    const sortedcountries = _.orderBy(filterCountries, [field], [order])

    return sortedcountries
  }

  render() {
    if (!this.state.category) return <h2>Loading...</h2>
    return (
      <section className="section">
        <div className="container">
          <hr />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-2">

              <div className="field">
                <h1 className="title is-6 heading">Your search currently matches {this.filterCategories().length} Meals</h1>
                <hr />
                <label className="label has-text-left title is-6 heading">Search your favourites</label>

                <input className="input" type="text" placeholder="Favourite meal?" 
                 
                  onKeyUp={this.handleKeyUp}
                />

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
                {!this.filterCategories()[0] &&
                  <NoResultsHolder />
                }

                {this.filterCategories().map(category =>
                  <div className="column is-half-tablet is-one-quarter-desktop"
                    key={category.idMeal}
                  >
                    <Link to={`/meals/${category.idMeal}`}>
                      <Card 
                        name={category.strMeal} 
                        image={category.strMealThumb} 
                        area={category.strArea}
                      />
                    </Link>
                  </div>
                )
                }

              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}



export default CategoryIndex

