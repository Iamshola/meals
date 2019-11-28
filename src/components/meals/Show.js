import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

class ShowMeal extends React.Component {
  constructor(){
    super()
    this.state = {
      meal: []
    }
    this.handleIngredients = this.handleIngredients.bind(this)
  }
  
  componentDidMount(){
    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.id)
      .then(res => this.setState({ meal: res.data.meals[0] 

      }, () => {
        this.handleIngredients()
      })
      )
  }


  handleIngredients(){
    const ingredients = [this.state.meal.strIngredient1, this.state.meal.strIngredient2, this.state.meal.strIngredient3, this.state.meal.strIngredient4, this.state.meal.strIngredient5, this.state.meal.strIngredient6, this.state.meal.strIngredient7, this.state.meal.strIngredient9, this.state.meal.strIngredient10, this.state.meal.strIngredient11, this.state.meal.strIngredient12, this.state.meal.strIngredient13, this.state.meal.strIngredient14]

    const portion = [this.state.meal.strMeasure1, this.state.meal.strMeasure2, this.state.meal.strMeasure3, this.state.meal.strMeasure4, this.state.meal.strMeasure5, this.state.meal.strMeasure6, this.state.meal.strMeasure7, this.state.meal.strMeasure9, this.state.meal.strMeasure10, this.state.meal.strMeasure11, this.state.meal.strMeasure12, this.state.meal.strMeasure13, this.state.meal.strMeasure14]

    if (ingredients.length === portion.length) {
      var c = []
      for (var i = 0; i < ingredients.length; i++) {
        c.push(ingredients[i] + ', ' + portion[i])
      }
      console.log(c)
    }

    const display = c.filter(item => item !== ', ')

    return display 
    
  }


  render(){
  
    console.log(this.handleIngredients())

    console.log('rendering', this.state.meal)
    if (!this.state.meal || !this.state.meal.strTags) return null

    return(
      
      <section className="section">
        <div className="container">

          <div className="container">
            <div className="columns">
              <div className="column">
                <figure className="image show-page">
                  <img src={this.state.meal.strMealThumb} alt={this.state.meal.strMeal} />
                </figure>
              </div>

              <div className="column">
                <br />
                <div className="title is-1 has-text-centered">{this.state.meal.strMeal}</div>
                <p className="title is-5 has-text-centered">{this.state.meal.strTags.split(',').join(', ')}</p>
                <Link to={`/countries/${this.state.meal.strArea}`}>
                  <p className="title is-5 has-text-centered"> {this.state.meal.strArea} </p>
                </Link>
                <hr />
                <p className="title is-3 has-text-centered">Ingredients:</p>
                <ul>
                  {this.handleIngredients().map((item, index) =>
                    <li key={index} className="has-text-centered">{item}</li>
                  )}
                </ul>
              </div>
            </div>

            <hr />
            <div className="columns">
              <div className="column">
                <p className="title is-4 has-text-centered">Instructions:</p>
                <p>{this.state.meal.strInstructions}</p>        
              </div>
              <div className="column">
                <div className='player-wrapper'>
                  <ReactPlayer
                    url={this.state.meal.strYoutube}
                    className='react-player'
                    playing
                    width='100%'
                    height='100%'
              
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
            
 
      </section>
      
     
    )
  }
}



export default ShowMeal
