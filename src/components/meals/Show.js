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
      names: [], 
      active: true, 
      unactive: false
      
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
        this.detectmob()
      })
      )
  }

  detectmob() {
    if (window.innerWidth <= 800 && window.innerHeight <= 600) {
      return true
    } else {
      this.highlightChecker()
    }
  }


  handleIngredients(){
    const ingredients = [this.state.meal.strIngredient1, this.state.meal.strIngredient2, this.state.meal.strIngredient3, this.state.meal.strIngredient4, this.state.meal.strIngredient5, this.state.meal.strIngredient6, this.state.meal.strIngredient7, this.state.meal.strIngredient8, this.state.meal.strIngredient9, this.state.meal.strIngredient10, this.state.meal.strIngredient11, this.state.meal.strIngredient12, this.state.meal.strIngredient13, this.state.meal.strIngredient14, this.state.meal.strIngredient15, this.state.meal.strIngredient16, this.state.meal.strIngredient17, this.state.meal.strIngredient18, this.state.meal.strIngredient19, 
      this.state.meal.strIngredient20]

    const portion = [this.state.meal.strMeasure1, this.state.meal.strMeasure2, this.state.meal.strMeasure3, this.state.meal.strMeasure4, this.state.meal.strMeasure5, this.state.meal.strMeasure6, this.state.meal.strMeasure7, this.state.meal.strMeasure8, this.state.meal.strMeasure9, this.state.meal.strMeasure10, this.state.meal.strMeasure11, this.state.meal.strMeasure12, this.state.meal.strMeasure13, this.state.meal.strMeasure14, this.state.meal.strMeasure15, this.state.meal.strMeasure16, this.state.meal.strMeasure17, this.state.meal.strMeasure18, this.state.meal.strMeasure19, this.state.meal.strMeasure20]

    if (ingredients.length === portion.length) {
      var c = []
      for (var i = 0; i < ingredients.length; i++) {
        c.push(ingredients[i] + ', ' + portion[i])
      }
    }
    let displayIngredients = c.filter(item => item !== ',  ' && item !== ', ' && item !== 'null, null')
    console.log(displayIngredients)
    displayIngredients = displayIngredients.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())

    return displayIngredients
  }

  addFavs(){    
    var names = []
    names = JSON.parse(localStorage.getItem('names')) || []
    names.push(this.state.meal.idMeal)
    names = localStorage.setItem('names', JSON.stringify(names))
    toast.success('You favourited ' + this.state.meal.strMeal )
    this.setState({ names, active: !this.state.active, unactive: !this.state.unactive })
  }


  removeFav(){
    var names = JSON.parse(localStorage.getItem('names'))
    names = names.filter(item => item !== this.state.meal.idMeal)
    names = localStorage.setItem('names', JSON.stringify(names))
    toast.info('You unfavourited ' + this.state.meal.strMeal)
    this.setState({ names, unactive: !this.state.unactive, active: !this.state.active  })
  }

  highlightChecker(){
    var names = JSON.parse(localStorage.getItem('names'))
    if(names.includes(this.state.meal.idMeal)){
      this.setState({ names, unactive: !this.state.unactive, active: !this.state.active })
    }
  }


  render(){
    console.log(this.state.meal)
    if (!this.state.meal || !this.state.meal.strTags) return null
    return(
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={this.state.meal.strMealThumb} alt={this.state.meal.strMeal} />
              </figure>
            </div>

            <ToastContainer />
         
            <div className="column">
              <div className="title is-1 has-text-centered">{this.state.meal.strMeal}</div>
              <div className="has-text-centered">
                {this.state.active && <button className="button is-primary" value={this.state.meal.idMeal} onClick={this.addFavs}> Save this for later!</button> }
                {this.state.unactive && <button className="button is-warning" onClick={this.removeFav}>Remove </button>}
                <br />
                <br />
  
            
                <p className="title is-5 has-text-centered">{this.state.meal.strTags.split(',').join(', ')}</p>
                <Link to={`/countries/${this.state.meal.strArea}`}>
                  <p className="title is-5 has-text-centered"> {this.state.meal.strArea} </p>
                </Link>
                <hr />
              </div>
        
              <br />
              <p className="title is-3 has-text-centered">Ingredients:</p>
              <ul>
                {this.handleIngredients().map((item, index) =>
                  <li key={index} className="has-text-centered">{item}</li>
                )}
              </ul>
            </div>
          </div>
        </div>            
        <hr />
        <div className="column">

          <p className="title is-4 has-text-centered">Instructions:</p>
          <p className="is-7 has-text-centered">{this.state.meal.strInstructions}</p>
          <br />
          <Box
            name={this.state.meal.strMeal}
            strYoutube={this.state.meal.strYoutube}
          />
        </div>
       
  
 
      </section>
      
     
    )
  }
}



export default ShowMeal
