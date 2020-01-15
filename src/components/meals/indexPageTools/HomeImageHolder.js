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
            <p className="title is-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className="column is-half-desktop">

            <div className='player-wrapper'>
              <figure className="image is-4by3">
                <img src={strMealThumb} alt={name} />
              </figure>
            </div>
            <br />
            <h1 className="title is-4 heading has-text-centered">{strMeal}</h1>
            <Link to={`/meals/${idMeal}`}>
              <div className="has-text-centered">
                <button className="button is-warning">See The Reciepe </button>
              </div>
            </Link>
          </div>

        </div>

      </div>
  
    </section>

  )
}
export default HomeImageHolder