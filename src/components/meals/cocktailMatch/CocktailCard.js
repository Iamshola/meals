import React from 'react'
import axios from 'axios'

class CocktailCard extends React.Component {

  constructor(){
    super()
    this.state = {
      randomCocktail: {}
    }
  }

  componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => {
        this.setState({ randomCocktail: res.data.drinks[0] })
      })
  }

  render(){
    console.log(this.state.randomCocktail)
   
    return(
      <div>
        <h1 className="title is-4 heading"> Random Drink Pairing:  </h1>
        <div className="card">
          <div className="card-image">
            <figure className="image is-3by2">
              <img src={this.state.randomCocktail.strDrinkThumb} alt={this.state.randomCocktail.strDrink} />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-6 heading">{this.state.randomCocktail.strDrink}</p>
            <hr/>
            <p className="text is-12">{this.state.randomCocktail.strAlcoholic}, <br />{this.state.randomCocktail.strCategory}</p>
          </div>
        </div>
      </div>
      
    )
  }
}


export default CocktailCard