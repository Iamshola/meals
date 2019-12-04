import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Link } from 'react-router-dom'
import Box from '../meals/indexPageTools/Box'

class ShowMeal extends React.Component {
  constructor(){
    super()
    this.state = {
      meal: [], 
      names: []
      
    }
    this.handleIngredients = this.handleIngredients.bind(this)
    this.addFavs = this.addFavs.bind(this)
    this.removeFav = this.removeFav.bind(this)
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
    }
    let displayIngredients = c.filter(item => item !== ',  ' && item !== ', ' && item !== 'null, ' )

    displayIngredients = displayIngredients.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())

    return displayIngredients
  }

  addFavs(){    
    var names = []
    names = JSON.parse(localStorage.getItem('names')) || []
    names.push(this.state.meal.idMeal)

    names = localStorage.setItem('names', JSON.stringify(names))
   
    toast.success('You favourited ' + this.state.meal.strMeal )
    this.setState({ names })
    

  }


  removeFav(){

    var names = JSON.parse(localStorage.getItem('names'))

    names = names.filter(item => item !== this.state.meal.idMeal)
  
    names = localStorage.setItem('names', JSON.stringify(names))

    // var storedNames = JSON.parse(localStorage.getItem("names"));

    toast.info('You unfavourited ' + this.state.meal.strMeal)
    this.setState({ names })
  }


  render(){

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
              <ToastContainer />
             

              <div className="column">
                <br />
                <div className="title is-1 has-text-centered">{this.state.meal.strMeal}</div>
                <div className="button" value={this.state.meal.idMeal} onClick={this.addFavs}>
                  Save this for later!
                </div>
                <div className="button" onClick={this.removeFav}>
                  Remove
                </div>


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
                <p className="is-7 has-text-centered">{this.state.meal.strInstructions}</p>        
              </div>
              <div className="column">
                <Box
                  name={this.state.meal.strMeal}
                  strYoutube={this.state.meal.strYoutube}
                />

                
              </div>
            </div>
          </div>
        </div>
            
 
      </section>
      
     
    )
  }
}



export default ShowMeal
