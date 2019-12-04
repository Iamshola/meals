import React from 'react'
import { Link } from 'react-router-dom'
// import ReactPlayer from 'react-player'

const HomeImageHolder = ({ strMealThumb, idMeal, strMeal }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered">
              <h1 className="title is-4 heading">{strMeal}</h1>

              <Link to={`/meals/${idMeal}`}>
                <div className="button is-primary">See Recipe </div>
              </Link>
            </div>
            <div className="column is-half-desktop">
              <div className="box">
                <div className='player-wrapper'>
                  <figure className="image is-4by3">
                    <img src={strMealThumb} alt={name} />
                  </figure>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

  )
}
export default HomeImageHolder