import React from 'react'
import Card from '../meals/Card'
import Box from '../meals/indexPageTools/Box'
import HomeImageHolder from '../meals/indexPageTools/HomeImageHolder'
import axios from 'axios'
import { Link } from 'react-router-dom'


import Navbar from  '../common/Navbar'

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
    console.log(this.state.randomMeal)
    if(!this.state.randomMeal) return <h2>Loading...</h2>
    return (
      <div>
        <section className="hero is-medium is-bold bg-hero">
          <div className="hero-body">
            <div className="column has-text-centered">
              <h1 className="title is-4 heading">Ingredients</h1>
              <div className="field has add-ons">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Search your favourite ingredient" className="input" onChange={this.handleChange}/>
                </form>
              </div>
              <hr />
            </div>
          </div>
        </section>



        <section className="hero is-medium is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
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
     
        <HomeImageHolder
          name={this.state.randomMeal.strMeal}
          strMealThumb={this.state.randomMeal.strMealThumb}
          strMeal={this.state.randomMeal.strMeal}
          idMeal={this.state.randomMeal.idMeal}
        />

        <footer className="footer">
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
