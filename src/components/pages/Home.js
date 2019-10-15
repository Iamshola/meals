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
        <section className="hero is-fullheight-with-navbar is-bold bg-hero">
          <div className="hero-body">
            <div className="column is-one-third-desktop has-text-centered is-offset-7">
              <h1 className="title is-1">MealBored</h1>
              <h2 className="subtitle is-4"> A place for bored meal lovers</h2>
              <div className="field has add-ons">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Search your favourite ingredient" className="input is-rounded" onChange={this.handleChange}/>
                </form>
              </div>
              <hr />
            </div>
          </div>
        </section>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                About 
              </h1>
              <h2 className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Reprehenderit blanditiis obcaecati ducimus consequatur porro! 
                Eum deserunt, repellat voluptatum dolor possimus odit! 
                Assumenda ratione quos, nihil laboriosam illum laudantium molestias id.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Reprehenderit blanditiis obcaecati ducimus consequatur porro! 
                Eum deserunt, repellat voluptatum dolor possimus odit! 
                Assumenda ratione quos, nihil laboriosam illum laudantium molestias id.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Reprehenderit blanditiis obcaecati ducimus consequatur porro! 
                Eum deserunt, repellat voluptatum dolor possimus odit! 
                Assumenda ratione quos, nihil laboriosam illum laudantium molestias id.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Reprehenderit blanditiis obcaecati ducimus consequatur porro! 
                Eum deserunt, repellat voluptatum dolor possimus odit! 
                Assumenda ratione quos, nihil laboriosam illum laudantium molestias id.
              </h2>
            </div>
          </div>
        </section>

        
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-2"> Meal of the Day!</h1>
              <div className="columns">
                <div className="column is-one-quarter-desktop">
                  <Link to={`/meals/${this.state.randomMeal.idMeal}`}>
                    <Card
                      name={this.state.randomMeal.strMeal}
                      image={this.state.randomMeal.strMealThumb}
                    />
                  </Link>
                </div>
                <div className="column has-text-centered is-offset-3">
                  <h1 className="title is-4">Instructions:</h1>
                  <p>{this.state.randomMeal.strInstructions}</p>
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
