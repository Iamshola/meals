import React from 'react'
import Card from '../meals/Card'
import Box from '../meals/Box'
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
            <div className="column is-one-third-desktop has-text-centered is-offset-8">
              <h1 className="title is-1 heading">MealBored</h1>
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
        <section className="hero is-medium is-primary is-warning">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                About Us
              </h1>
              <h2 className="subtitle">
                We are a social enterprise providing meal ideas.
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
              <h1 className="title is-2 has-text-centered"> Try This!</h1>
              <hr />
              <div className="columns">
                <div className="column has-text-centered home-random-text">
                  <Link to={`/meals/${this.state.randomMeal.idMeal}`}>
                    <p className="title is-2">{this.state.randomMeal.strMeal}</p>
                  </Link>
                </div>

                <div className="column is-half-desktop">
                  <Box
                    name={this.state.randomMeal.strMeal}
                    strYoutube={this.state.randomMeal.strYoutube}
                  />
                </div>
               
              </div>
            </div>
          </div>
        </section>

        <footer className="footer top">
          <div className="content has-text-centered">
            <div className="column is-one-third-desktop has-text-centered is-offset-5">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="text" placeholder="Your Email Address" />
                </div>
                <div className="control">
                  <a className="button is-light"> Subscribe</a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <footer className="footer bottom">
          <div className="content has-text-centered">
            <div>
              <strong>MealBored</strong> by <a href="https://github.com/Iamshola"> Shola</a>
            </div>
          </div>
        </footer>
      </div>

    )
  }
}

export default Home
