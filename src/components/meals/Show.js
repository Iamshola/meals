import React from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import CocktailCard from './cocktailMatch/cocktailCard'

class ShowMeal extends React.Component {
  constructor(){
    super()
    this.state = {
      meal: []
    }
  }


  componentDidMount(){
    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.id)
      .then(res => this.setState({ meal: res.data.meals[0] }))
  }

  render(){
    console.log('rendering', this.state.meal)
    if(!this.state.meal) return <h2>Loading...</h2>
    return(
      <div className="container">
        <section className="section">
          
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={this.state.meal.strMealThumb} alt={this.state.meal.strMeal} />
              </figure>
              <br />
              
            </div>
            <div className="column">
              <div className="title is-1">{this.state.meal.strMeal}</div>
              <p>{this.state.meal.strTags}</p>
              <p>{this.state.meal.strArea}</p>

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
              <p>{this.state.meal.strInstructions}</p>


              <ReactPlayer
                url={this.state.meal.strYoutube}
                controls volume={0}
                key='video' className="full-width is-centered"
                playing />
            </div>


          </div>

          <h2 className="subtitle is-4">Many thanks to: {this.state.meal.strSource}</h2>
          <CocktailCard />
        </section>
      </div>
    )
  }
}



export default ShowMeal
