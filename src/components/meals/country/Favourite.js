import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '../Card'
import _ from 'lodash'
import NoResultsHolder from '../indexPageTools/NoResultHolder'


class FavouriteMeals extends React.Component {
  constructor() {
    super()
    this.state = {
      names: [], 
      allfavs: []
    }
   
  }


  componentDidMount() {
    var names = JSON.parse(localStorage.getItem('names'))
    names = names.map(el => +el)
    this.setState({ names }, () => {
      this.getInfoFromStorage()
    })
      
  }

  getInfoFromStorage(){
    if(this.state.names){
      const retrieveFav = this.state.names.map(meal => meal)

      retrieveFav.map(x =>
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + x)
          .then(res => this.setState({ allfavs: [...res.data.meals].concat(this.state.allfavs) })
          ))
    }
  }
  

  render() {
    console.log(this.state.allfavs)
    if(!this.state.allfavs) return null

    if (this.state.allfavs.length === 0) return(
      <NoResultsHolder />
    )
    return (
      <section className = "section" >
        <div className="container">
          <hr />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-2">

              <div className="field">
                <h1 className="title is-6 heading">Your search currently matches {this.state.allfavs.length} Meals</h1>
                <hr />
                <label className="label has-text-left title is-6 heading">Search your favourites</label>

                <input className="input" type="text" placeholder="Favourite Meal" onKeyUp={this.handleKeyUp} />

                <hr />
                <label> Alphabetical Order:  </label>
                <div className="control">
                  <div className="select is-large">
                    <select onChange={this.handleChange}>
                      <option value="strMeal|asc">A-Z </option>
                      <option value="strMeal|desc">Z-A </option>
                    </select>
                  </div>
                </div>

                <hr />
             
                <hr />
              </div>
            </div>

            <div className="column">
              <div className="columns is-multiline">

                {!this.state.allfavs[0] &&
                  <NoResultsHolder />
                }



                {this.state.allfavs.map(meal =>
                  <div className="column is-half-tablet is-one-quarter-desktop"
                    key={meal.idMeal}
                  >
                    <Link to={`/meals/${meal.idMeal}`}

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
      </section >
    )
  }
}



export default FavouriteMeals

