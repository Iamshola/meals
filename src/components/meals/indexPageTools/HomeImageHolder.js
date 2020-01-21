import React from 'react'
import { Link } from 'react-router-dom'
// import ReactPlayer from 'react-player'

const HomeImageHolder = ({ strMealThumb, idMeal, strMeal }) => {
  return (
    <section className="hero homeImage">
      <div className="hero-body">
        {/* <div className="container"> */}
        <div className="columns">
          <div className="column has-text-centered">
            <h2 className="title is-3">About Us</h2>
            <p className="is-4">This Platform is an opportunity to refresh the traditional meal sharing platform that we are all familiar with. We want you to be able to share your family recipes, search for new recipes and save your favourites. All in the same place! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className="column is-half-desktop">
            <h2 className="title is-2 has-text-centered">Our pick</h2>

            <div className='player-wrapper'>
              <figure className="image is-4by3">
                <img className="is-rounded" src={strMealThumb} alt={name} />
              </figure>
            </div>
            <br />
            <h1 className="title is-5 heading has-text-centered">{strMeal}</h1>
            <Link to={`/meals/${idMeal}`}>
              <div className="has-text-centered">
                <button className="button is-warning title is-6">See The Reciepe </button>
              </div>
            </Link>
          </div>

        </div>

      </div>
  
    </section>

  )
}
export default HomeImageHolder