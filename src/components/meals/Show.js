import React from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import CocktailCard from './cocktailMatch/cocktailCard'
import { Link } from 'react-router-dom'


class ShowMeal extends React.Component {
  constructor(){
    super()
    this.state = {
      meal: [], 
      meals: []
    }
  }
  


  componentDidMount(){
    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.id)
      .then(res => this.setState({ meal: res.data.meals[0] }))
  }



  render(){
    console.log('rendering', this.state.meal)
    if (!this.state.meal || !this.state.meal.strTags) return <h2>Loading...</h2>
    return(
      <div className="container">
        <section className="section">
          <figure className="image show-page">
            <img src={this.state.meal.strMealThumb} alt={this.state.meal.strMeal} />
          </figure>
          <br />
          <div className="title is-1 has-text-centered">{this.state.meal.strMeal}</div>
          <h2 className="title is-6 heading has-text-centered">Many thanks to: {this.state.meal.strSource}</h2>
          <p className="title is-5 has-text-centered">{this.state.meal.strTags.split(',').join(', ')}</p>
          <p className="title is-5 has-text-centered">{this.state.meal.strArea}</p>

          <hr />
          <p className="title is-3">Ingredients:</p>

          <p>{this.state.meal.strIngredient1}, {this.state.meal.strMeasure1}</p>
          <p>{this.state.meal.strIngredient2}, {this.state.meal.strMeasure2}</p>
          <p>{this.state.meal.strIngredient3}, {this.state.meal.strMeasure3}</p>
          <p>{this.state.meal.strIngredient4}, {this.state.meal.strMeasure4}</p>
          <p>{this.state.meal.strIngredient5}, {this.state.meal.strMeasure5}</p>
          <p>{this.state.meal.strIngredient6}, {this.state.meal.strMeasure6}</p>
          <p>{this.state.meal.strIngredient7}, {this.state.meal.strMeasure7}</p>
          <p>{this.state.meal.strIngredient8}, {this.state.meal.strMeasure8}</p>
          <p>{this.state.meal.strIngredient9}, {this.state.meal.strMeasure9}</p>
          <p>{this.state.meal.strIngredient10}, {this.state.meal.strMeasure10}</p>

          <hr />
          <p className="title is-4">Instructions:</p>
          <p>{this.state.meal.strInstructions}</p>        
          <hr />
          <div className='player-wrapper'>
            <ReactPlayer
              url={this.state.meal.strYoutube}
              className='react-player'
              playing
              width='100%'
              height='100%'
              
            />
          </div>
          <br />
          <CocktailCard />
        </section>
      
      </div>
    )
  }
}



export default ShowMeal
