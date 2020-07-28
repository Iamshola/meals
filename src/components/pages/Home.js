import React from 'react'
import Card from '../meals/Card'
import Box from '../meals/indexPageTools/Box'
import HomeImageHolder from '../meals/indexPageTools/HomeImageHolder'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LazyHero from 'react-lazy-hero'
import Modal from '../meals/Modal'
// import Navbar from  '../common/Navbar'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: '', 
      show: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.openModalHandler = this.openModalHandler.bind(this)
    this.closeModalHandler = this.closeModalHandler.bind(this)
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

  openModalHandler () {
    this.setState({
      isShowing: true
    })
  }

  closeModalHandler () {
    this.setState({
      isShowing: false
    })
  }


  render(){
    console.log(this.state.randomMeal)
    if(!this.state.randomMeal) return <h2>Loading...</h2>
    return (
      <div>
        <div className="container">
          <LazyHero ransitionTimingFunction="ease-in-out" isFixed={true} minHeight="69vh" opacity={0.2} imageSrc="https://media.giphy.com/media/3Oo9kuFdl4qjK/giphy.gif">
          </LazyHero>
        </div>
      
        <section className="hero is-bold bg-hero">
          <div className="hero-body">
            <div className="column has-text-centered">
              <h1 className="title is-4 heading">SEARCH BY YOUR FAVOURITE Ingredients</h1>
              <div className="field has add-ons">
                <form onSubmit={this.handleSubmit} className="search-container">
                  <input type="text" id="search-bar" placeholder="Search your favourite ingredient" className="input is-half is-8" onChange={this.handleChange}/>
                  

                  <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
                </form>
              </div>
            </div>

          </div>
          <HomeImageHolder
            name={this.state.randomMeal.strMeal}
            strMealThumb={this.state.randomMeal.strMealThumb}
            strMeal={this.state.randomMeal.strMeal}
            idMeal={this.state.randomMeal.idMeal}
            show={this.state.show}

            
          />

          <br />
          {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

          <div className="has-text-centered ">
            <button onClick={this.openModalHandler} className="button title is-6 open-modal-bt"> 
              Open Modal
            </button>
          </div>

          <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}
            strMeal={this.state.randomMeal.strMeal}
            strMealThumb={this.state.randomMeal.strMealThumb}
            strInstructions={this.state.randomMeal.strInstructions}
              
          >
               
               
          </Modal>

         
        </section>   
       
       

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
