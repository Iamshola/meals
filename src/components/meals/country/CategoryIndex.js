import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '../Card'
import Checkboxes from '../indexPageTools/Checkboxes.js'
import _ from 'lodash'


class CategoryIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      category: [],
      categorySortTerm: 'name|asc',
      categorySearchTerm: ''
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filterCategories = this.filterCategories.bind(this)
  }

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.props.match.params.id)
      .then(res => this.setState({ category: res.data.meals }))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.props.match.params.id)
        .then(res => {
          this.setState({ category: res.data.meals })
        })
    }
    window.scrollTo(0, 0)
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


    const filterCountries = _.filter(this.state.category, meal => {
      return re.test(meal.strMeal)
    })

    const sortedcountries = _.orderBy(filterCountries, [field], [order])

    return sortedcountries
  }



  render() {
    console.log(this.state.category)
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

                {this.filterCategories().map(category =>
                  <div className="column is-half-tablet is-one-quarter-desktop"
                    key={category.idMeal}
                  >
                    <Link to={`/meals/${category.idMeal}`}>
                      <Card name={category.strMeal} image={category.strMealThumb} />
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

