import React from 'react'
import Card from '../meals/Card'
import axios from 'axios'
import {Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => {
        this.setState({ randomMeal: res.data.meals[0] })
      })

    // axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    //   .then(res => {
    //     this.setState({ alcoholicCocktails: res.data.drinks })
    //   })
  }

  handleChange(e){
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit(){
    this.props.history.push('/search/' + this.state.searchTerm)

  }

  render(){
    if(!this.state.randomMeal) return <h2>Loading...</h2>
    return (
      <div>
        <section className="hero is-medium is-light is-bold bg-img">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-multiline">
                <div className="column is-one-third-desktop has-text-centered">
                  <h1 className="title is-1">MealBored</h1>
                  <h2 className="subtitle is-4"> 🍸A place for bored meal lovers</h2>
                  <div className="field has add-ons">
                    <form onSubmit={this.handleSubmit}>
                      <input type="text" placeholder="Search your favourite ingredient" className="input" onChange={this.handleChange}/>
                    </form>
                  </div>
                  <hr />
                  <h1 className="subtitle is-2 has-text-weight-light"> Meal of the Day!</h1>
                  <Link to={`/meals/${this.state.randomMeal.idMeal}`}>
                    <Card
                      name={this.state.randomMeal.strMeal}
                      image={this.state.randomMeal.strMealThumb}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>MealBored</strong> by <a href="https://github.com/Iamshola"> Shola</a>
            </p>
          </div>
        </footer>
      </div>

    )
  }
}

export default Home
