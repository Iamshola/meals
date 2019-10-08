import React from 'react'
import axios from 'axios'



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
            </div>
            <div className="column">
              <div className="title is-1">{this.state.meal.strMeal}</div>
              <p>{this.state.meal.strTags}</p>
              <p>{this.state.meal.strArea}</p>
              <hr />
              <p>{this.state.meal.strInstructions}</p>

            </div>
          </div>
        </section>
      </div>
    )
  }
}



export default ShowMeal
