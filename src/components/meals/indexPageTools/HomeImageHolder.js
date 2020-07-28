import React from 'react'
import { Link } from 'react-router-dom'
import Jump from 'react-reveal/Jump'
import Flash from 'react-reveal/Flash'
import Modal from '../Modal'


// import ReactPlayer from 'react-player'

const HomeImageHolder = ({ strMealThumb, idMeal, strMeal, showModal }) => {
  return (
    <section className="hero homeImage">
      <div className="hero-body">
        <div className="container">
          <hr />
          <br/>
          <Jump>
            <h2 className="title is-2 has-text-centered">About Us</h2>
          </Jump>
          <div className="columns">
            <div className="column">
              <p className="is-4">This Platform is an opportunity to refresh the traditional meal sharing platform that we are all familiar with. We want you to be able to share your family recipes, search for new recipes and save your favourites. All in the same place! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="column"> 
              <p className="is-4">This Platform is an opportunity to refresh the traditional meal sharing platform that we are all familiar with. We want you to be able to share your family recipes, search for new recipes and save your favourites. All in the same place! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <hr />
          </div>
          
        </div>
      </div>
    </section>

  )
}
export default HomeImageHolder